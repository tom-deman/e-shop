import React, {
    StrictMode,
    useState
} from 'react'

// React router
import { Switch } from 'react-router'
import { BrowserRouter as
    Router,
    Route,
    NavLink
} from 'react-router-dom'

// Other
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/animate.css/animate.css'

// Components
import Sidebar        from './components/Sidebar'
import ProductsRouter from './components/ProductsRouter'

// Tabs
import { routerTabs }                  from './assets/js/routerTabs'
import { navigationLinks, socialTabs } from './assets/js/sidebarsTabs.js'


const App = () => {
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

    const modalClass = 'text-gray-100 font-semibold text-lg hover:text-gray-500 animated fadeInDown'


    return(
        <StrictMode>
            <div
                className="flex overflow-hidden"
                id="main"
            >
                <Router>

                    <Sidebar />

                    <div
                        className="md:w-4/5 w-full"
                        id="right"
                    >
                        <button
                            className={ `md:hidden mr-8 burger absolute top-0 right-0 mt-4 mr-4 ${ hidden }` }
                            onClick={ () => openModal() }
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5ZM4 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071C20.5196 12.8946 20.2652 13 20 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11ZM4 17H20C20.2652 17 20.5196 17.1054 20.7071 17.2929C20.8946 17.4804 21 17.7348 21 18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17Z"
                                    fill="gray"
                                />
                            </svg>
                        </button>

                        { modal === true &&
                            <div
                                id="modal"
                                className="flex top-0 w-full h-full animated fadeIn delay-1"
                                onClick={ () => closeModal() }
                            >
                                <div className="text-center w-1/2 mx-auto mt-48">
                                    <ul>
                                        { navigationLinks.map(( element, index ) => 
                                            <li
                                                key={ index }
                                                className="text-center my-3"
                                            >
                                                { index === 4
                                                    ?
                                                        <a
                                                            href="https://tom-deman.github.io/portfolio/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={ `${ modalClass } delay-${ index } slow` }
                                                        >
                                                            { element }
                                                        </a>
                                                    :
                                                        <NavLink
                                                            exact
                                                            activeClassName="text-gray-500"
                                                            className={ `${ modalClass } delay-${ index } slow` }
                                                            to={ index === 0 ? '/e-shop/' : `/e-shop/${ element.toLowerCase() }` }
                                                        >
                                                            { element }
                                                        </NavLink>
                                                }
                                            </li>
                                        )}
                                    </ul>

                                    <ul className="flex h-6 justify-around m-auto w-48 mt-12">
                                        { socialTabs.map(( element, index ) => 
                                            <li key={ index }>
                                                <a
                                                    href={ element.href }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className={ `${ element.icon } text-white m-2 text-sm animated delay-6 fadeInUp` } />
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        }

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
    )
}


export default App
