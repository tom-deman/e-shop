import React, { StrictMode } from 'react'

// React router
import { Switch } from 'react-router'
import { BrowserRouter as
    Router,
    Route
} from 'react-router-dom'

// Redux
import { connect }        from 'react-redux'
import { incrementCount } from './actions/action'

// Other
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/animate.css/animate.css'

// Components
import Sidebar        from './components/Sidebar'
import Home           from './components/Home'
import Contact        from './components/Contact'
import Shop           from './components/Shop'
import ProductsRouter from './components/ProductsRouter'
import Cart           from './components/Cart'


const App = () =>
    <StrictMode>
        <div
            className="flex"
            id="main"
        >
            <Router>

                <Sidebar />

                <div
                    className="w-4/5"
                    id="right"
                >
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/contact">
                            <Contact />
                        </Route>

                        <Route path="/shop">
                            <Shop />
                        </Route>

                        <Route path="/cart">
                            <Cart />
                        </Route>

                        <ProductsRouter />

                    </Switch>
                </div>

            </Router>
        </div>
    </StrictMode>


const mapStateToProps = ( state ) => {
    return {
        count: state.count.count
    }
}

const mapActionToProps = {
    incrementCount: incrementCount
}


export default connect( mapStateToProps, mapActionToProps )( App )
