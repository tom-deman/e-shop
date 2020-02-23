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

// Redux
import { connect }        from 'react-redux'
import { incrementCount } from './actions/action'

// Other
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

// Components
import Sidebar from './components/Sidebar'
import Home    from './components/Home'
import Contact from './components/Contact'


const App = ( props ) => {

    return (
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
                        </Switch>
                    </div>

                </Router>
            </div>
        </StrictMode>
    )
}


const mapStateToProps = ( state ) => {
    return {
        count: state.count.count
    }
}

const mapActionToProps = {
    incrementCount: incrementCount
}


export default connect( mapStateToProps, mapActionToProps )( App )
