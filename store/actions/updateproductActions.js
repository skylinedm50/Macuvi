export const updateProduct = (product) => {
    return ( dispatch , getState, {getFirebase, getFirestore} ) => {
        const firestore = getFirestore();
        
        firestore.collection('Products').doc(product.id).set({
            productImg  : product.imagen       ,
            productName : product.productName  ,
            productCost : product.productCost  ,
            productPrice: product.productPrice ,
            productStock: product.productStock
        }).then(()=>{
           return dispatch({type: 'UPDATED_PRODUCT' , product})
        }).catch((error)=>{
            return dispatch({type: 'UPDATED_PRODUCT_ERROR', error});
        })    
    }
};
