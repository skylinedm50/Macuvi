import React, {Component} from 'react'

class Detailsrubro extends Component {

    render(){
        return(

            <div className="col-md-10">                  
                      <div style={{ height:"55px" }}>  </div>
                      <div className="col-md-10" id="content">                            
                            <div className="col-md-12" id="title">
                                <h3>Detalle de Rubro</h3>
                                <hr/>
                            </div>
                            <br/>                        
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-sm-4" style={{background: '#e0e0e0'}}><br/>
                                        <p> <strong>ID</strong> </p>
                                    </div>
                                    <div className="col-sm-8" style={{background: '#f5f5f5'}}><br/>
                                        <p className="text-center">med1234jshfh</p>
                                    </div>
                                    &nbsp;
                                </div>
                                <div className="row">
                                    <div className="col-sm-4" style={{background: '#e0e0e0'}}><br/>
                                        <p><strong>Nombre del rubro:</strong></p>
                                    </div>
                                    <div className="col-sm-8" style={{background: '#f5f5f5'}}><br/>
                                        <p className="text-center">Medicina</p>
                                    </div>
                                    &nbsp;
                                </div>
                            </div>
                        
                            <div className="col-md-12"><br/><br/>
                                <nav aria-label="" id="navigation">
                                    <a className="btn btn-primary" href="#back" role="button">
                                        <i className="fas fa-angle-left"></i>
                                        <span>Atrás</span>
                                    </a>
                                    <a className="btn btn-primary" href="#edit" role="button">
                                        <i className="far fa-edit"></i>
                                        <span>Editar</span>
                                    </a>
                                </nav>
                            </div>
                    </div>
            </div>

        );
    }

}

export default Detailsrubro;
