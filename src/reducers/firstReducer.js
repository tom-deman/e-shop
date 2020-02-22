let initialState = {
    count: 0
}

export default function reducer( state = initialState, { type, payload }) {
    switch( type ) {
        case 'INCREMENT_COUNT':
            return state = {
                ...state,
                count: state.count += payload
            }
        default:
            return state
    }
}
