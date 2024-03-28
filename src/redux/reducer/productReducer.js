const initialState={
    products:[]
}
const initialState1={
    products:[]
}

export const productReducer=(state=initialState,action)=>{
    console.log('data',action.payload)
    switch(action.type){
        case 'SET_PRODUCT':
            return{
                ...state,
                products:action.payload
            }
        default:
            return{
                ...state
            }    
    }
}

export const selectedProductReducer=(state=initialState1,action)=>{
    console.log('data2',action.payload)
    switch(action.type){
        case 'SELECT_PRODUCTS':
            return{
                ...state,
                products:action.payload
            }
        default:
            return{
                ...state
            }    
    }
}