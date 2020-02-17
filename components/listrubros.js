import React, {Component} from 'react'

class ListRubros extends Component{

    render(){
        return(
            <div className="col-md-10">                  
                    <div style={{ height:"55px" }}>  </div>
                    <div className="col-md-10" id="content">
                        <div className="col-md-12" id="title">
                            <h3>Listado de Rubros</h3><hr/>
                        </div><br/>
                        <div className="col-md-12" id="table">
                            <table className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">Rubro</th>
                                    <th scope="col">Detalles</th>
                                    <th scope="col">Editar</th>
                                    <th scope="col">Eliminar</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="col-md-6">Ingeniería Civil</td>
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
                                    <td className="col-md-6">Ingeniería Industrial</td>
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
                                    <td className="col-md-6">Medicina</td>
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
                                    <td className="col-md-6">Enfermería</td>
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
                                    <td className="col-md-6">Ingeniería Química</td>
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
                                    <td className="col-md-6">Hostelería y turismo</td>
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
                                <ul class="pagination">
                                <li class="page-item disabled">
                                    <a href="#" class="page-link">Anterior</a>
                                </li>
                                <li class="page-item active">
                                    <a href="#1" class="page-link">1</a>
                                </li>
                                <li class="page-item"><a href="#2" class="page-link">2</a></li>
                                <li class="page-item"><a href="#3" class="page-link">3</a></li>
                                <li class="page-item"><a href="#1" class="page-link">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>               
            </div>
        );
    }
}

export default ListRubros;