import React, {Component} from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux';

class Listcv extends Component {

    render(){
        return(
            <div className="col-md-10">                  
                <div style={{ height:"55px" }}>  </div>
                <div className="col-md-10" id="content">
                   
                    <div className="col-md-12" id="title">
                        <h3>Listado de Curriculum</h3><hr/>
                    </div><br/>
                   
                    <div className="col-md-12">
                        <select name="" id="myInput" className="form-control" placeholder="Rubro">
                            <option value="" disabled selected>Filtrar por categoría</option>
                            <option value="">Medicina</option>
                            <option value="">Ingeniería Civil</option>
                            <option value="">Enfermería</option>
                        </select>
                    </div> <br/>
                  
                    <div className="col-md-12" id="table">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th className="col-md-3">Imagen</th>
                                    <th className="col-md-3">Producto</th>
                                    <th className="col-md-2">Precio de venta</th>
                                    <th className="col-md-2">Precion de compra</th>
                                    <th className="col-md-2">Cantidad en inventario</th>
                                    <th className="col-md-2">Detalle</th>
                                    <th className="col-md-2">Editar</th>
                                    <th className="col-md-2">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody id="myInput">
                                <tr>
                                    <td className="col-md-3">CURRICULUM DE PRUEBA 1</td>
                                    <td className="col-md-3">Medicina</td>
                                    <td className="col-md-3">Medicina</td>
                                    <td className="col-md-3">Medicina</td>
                                    <td className="col-md-3">Medicina</td>
                                    <td className="col-md-2">
                                    <a href="#details">
                                        <i className="far fa-eye"></i>
                                    </a>
                                    </td>
                                    <td className="col-md-2">
                                    <a href="#edit">
                                        <i className="far fa-edit"></i>
                                    </a>
                                    </td>
                                    <td className="col-md-2">
                                    <a href="#delete">
                                        <i className="fas fa-trash-alt"></i>
                                    </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-3">CURRICULUM DE PRUEBA 2</td>
                                    <td className="col-md-3">Ingeniería Civil</td>
                                    <td className="col-md-3">Ingeniería Civil</td>
                                    <td className="col-md-3">Ingeniería Civil</td>
                                    <td className="col-md-3">Ingeniería Civil</td>
                                    <td className="col-md-2">
                                    <a href="#details">
                                        <i className="far fa-eye"></i>
                                    </a>
                                    </td>
                                    <td className="col-md-2">
                                    <a href="#edit">
                                        <i className="far fa-edit"></i>
                                    </a>
                                    </td>
                                    <td className="col-md-2">
                                    <a href="#delete">
                                        <i className="fas fa-trash-alt"></i>
                                    </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                    <div className="col-md-12" id="pagination">
                        <nav aria-label="">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a href="#" className="page-link">Anterior</a>
                                </li>
                                <li className="page-item active">
                                    <a href="#1" className="page-link">1</a>
                                </li>
                                <li className="page-item"><a href="#2" className="page-link">2</a></li>
                                <li className="page-item"><a href="#3" className="page-link">3</a></li>
                                <li className="page-item"><a href="#1" className="page-link">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products
    }
}
export default compose(
    connect(mapStateToProps) ,
    firestoreConnect([
        {collection: "Products"}
    ])
) (Listcv);
