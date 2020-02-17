export const createCategory = (category) => {
    return ( dispatch , getState, {getFirebase, getFirestore} ) => {
        const firestore = getFirestore();
        firestore.collection('Categories').doc().set({
            categoryName  :  category.CategoryName    ,
            categoryState :  1 
        }).then(()=>{
           return dispatch({type: 'CREATE_CATEGORY' , category})
        }).catch((error)=>{
            return dispatch({type: 'CREATE_CATEGORY_ERROR', error});
        })        
    }
};
