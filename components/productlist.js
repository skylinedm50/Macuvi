import React, {Component} from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux';
import TbListProducts from './tbListProducts';

class productlist extends Component {

    render()
    {    
        return(
            
            <div className="col-md-10">                  
                <div style={{ height:"55px" }}>  </div>
                <div className="col-md-10" id="content">
                   
                    <div className="col-md-12" id="title">
                        <h3>Inventario de productos</h3><hr/>
                    </div><br/>                  
                    <div className="col-md-12">
                        <select name="" id="myInput" className="form-control" placeholder="Rubro">
                            <option value="" disabled selected>Filtrar por categoría</option>
                            <option value="">Medicina</option>
                            <option value="">Ingeniería Civil</option>
                            <option value="">Enfermería</option>
                        </select>
                    </div> <br/>
                    <TbListProducts products = { this.props.Products }></TbListProducts>                 
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {        
    return {
        Products: state.firestore.ordered.Products
    }
}
export default compose(
    connect(mapStateToProps) ,
    firestoreConnect([
        {   
            collection: "Products" ,
            orderBy : ["productStock","desc"]
        }
    ])
) (productlist);
