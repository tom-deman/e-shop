import React, {
    StrictMode,
    useState
} from 'react'

import { connect }        from 'react-redux'
import { incrementCount } from './actions/action'


const App = ( props ) => {

    return (
        <StrictMode>
            
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
