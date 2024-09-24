import { createStore } from "redux";
const ADD_PRODUCT = "addproduct";
const REMOVE_PRODUCT = "removeproduct";
// state
const initialState = {
    products: ['mobile', 'laptop'],
    count: 2
}
// action => type and payload
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product
    }
}

// reudcer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                count: state.count + 1
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(item => item !== action.payload),
                count: state.count - 1

            }
        default:
            return state;
    }
}

// store
const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(addProduct("laptop"))
store.dispatch(addProduct("tv"))
store.dispatch(addProduct("laptop"))
store.dispatch(removeProduct("laptop"))



// state
// action
// reducer
// store