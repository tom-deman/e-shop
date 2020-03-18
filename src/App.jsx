import React, {
    StrictMode,
    useState
} from 'react'

// React router
import { Switch } from 'react-router'
import { BrowserRouter as
    Router,
    Route
} from 'react-router-dom'

// Other
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/animate.css/animate.css'

// Components
import Sidebar        from './components/Sidebar'
import ProductsRouter from './components/ProductsRouter'
import Modal          from './components/Modal'
import Burger         from './components/Burger'

// Tabs
import { routerTabs } from './assets/js/routerTabs'


const App = () => {
    // First state to display or not he modal for mobile burger, second to show the burger svg or not
    const [ modal, setModal ] = useState( false )
    const [ hidden, setHidden ] = useState( '' )

    const openModal = () => {
        setModal( true )
        setHidden( 'hidden' )
    }

    const closeModal = () => {
        setModal( false )
        setHidden( '' )
    }


    return(
        <StrictMode>
            <div
                className = "flex overflow-hidden"
                id        = "main"
            >
                <Router>

                    <Sidebar />

                    <div
                        className = "md:w-4/5 w-full"
                        id        = "right"
                    >
                        <Burger
                            openModal = { () => openModal() }
                            hidden    = { hidden }
                        />

                        { modal === true &&
                            <Modal closeModal={ () => closeModal() } />
                        }

                        <Switch>
                            { routerTabs.map(( element, index ) => 
                                <Route
                                    exact
                                    path      = { element.path }
                                    component = { element.component }
                                    key       = { index }
                                />
                            )}

                            <ProductsRouter />

                        </Switch>
                    </div>
                </Router>
            </div>
        </StrictMode>
    )
}


export default App
