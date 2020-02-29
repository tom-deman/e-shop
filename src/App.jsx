import React, { StrictMode } from 'react'

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

// Tabs
import { routerTabs } from './assets/js/routerTabs'


const App = () => 
    <StrictMode>
        <div
            className="flex"
            id="main"
        >
            <Router>

                <Sidebar />

                <div
                    className="md:w-4/5 w-full"
                    id="right"
                >
                    <Switch>
                        { routerTabs.map(( element, index ) => 
                            <Route
                                exact
                                path={ element.path }
                                component={ element.component }
                                key={ index }
                            />
                        )}

                        <ProductsRouter />

                    </Switch>
                </div>
            </Router>
        </div>
    </StrictMode>


export default App
