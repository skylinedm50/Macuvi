
const initState = {
    project:[]
}

const appReducer = (state = initState , action)=>
{
    switch(action.type){
        case 'CREATE_PROJECT': 
            console.log("created project", action.project);
            return state;
        case 'CREATE_PRODUCT_ERROR':
            console.log("create project error", action.err)
            return state;
        case 'UPDATED_PRODUCT':
            console.log("updated product", action.product)
            return state;
        case 'UPDATED_PRODUCT_ERROR':
                console.log("updated product error", action.err)
            return state;
        default:
           /* console.log("default") */
            return state; 
    }
}


export default appReducer;

