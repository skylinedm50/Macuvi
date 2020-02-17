import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { withRouter  } from 'react-router-dom'
import firebase from '../config/FirebaseConfig'


class TbListProducts extends Component {

        constructor(){
            super()
            this.redirectPage = this.redirectPage.bind(this);
            this.deleting     = this.deleting.bind(this);           
        }
    
        deleting(id){
            const db = firebase.firestore()
            db.collection("Products").doc(id).delete()
        }

        redirectPage(id , productos)
        {
            productos.map((producto , i)=>{
                    if(producto.id === id){
                     this.props.history.push({pathname:"/detailcv" , state:producto})
                    }
            })            
        }

    
        render()
        {
            var productos = {
                columns: [
                            { title: 'Imagen', field: 'productImg', render: rowData => <img src={rowData.productImg} style={{width: 70}}/> },
                            { title: 'Producto', field: 'productName' },
                            { title: 'Precio de venta', field: 'productPrice', type: 'numeric'   },
                            { title: 'Precion de compra', field: 'productCost', type: 'numeric'  },
                            { title: 'Cantidad en inventario', field: 'productStock', type: 'numeric' }
                    ] ,
                data: this.props.products        
            }

            return(            
                    <div style={{ maxWidth: '110%' }}>
                        <MaterialTable
                            columns = { productos.columns}
                            data    = { productos.data}
                            actions = {[
                                        {icon:"visibility"      , tooltip:"ver"       ,onClick:(event, rowData)=> this.redirectPage(rowData.id, productos.data)   },                                           
                                        {icon:"delete"          , tooltip:"Eliminar"  ,onClick:(event, rowData)=> this.deleting(rowData.id)   }                 
                                ]}
                            options={{
                                    pageSize: 10,
                                    pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100 ],
                                    toolbar: true,
                                    paging: true
                                }}
                            title="Productos Existentes" />
                    </div>
            )
    }
}

export default withRouter (TbListProducts);

