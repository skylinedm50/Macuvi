export const createProject = (project) => {
    return ( dispatch , getState, {getFirebase, getFirestore} ) => {
        const firestore = getFirestore();
        firestore.collection('Products').doc().set({
            productImg     : project[0].imageSrc  ,
            productName    : project.productName  ,
            productCost    : project.productCost  ,
            productPrice   : project.productPrice ,
            productCategory: project.Category     ,
            productQr      : "project.productQr"  ,
            productStock   : project.productStock
        }).then(()=>{
           return dispatch({type: 'CREATE_PROJECT' , project})
        }).catch((error)=>{
            return dispatch({type: 'CREATE_PRODUCT_ERROR', error});
        })        
    }
};




