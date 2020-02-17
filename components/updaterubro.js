import React, {Component} from 'react';

class Updaterubro extends Component {

    render(){
        return(
            <div className="col-md-10">                  
                <div style={{ height:"55px" }}>  </div>
                <div className="col-md-10" id="content">
                
                    <div className="col-md-12" id="title">
                        <h3>Editar Rubro</h3><hr/>
                    </div><br/>
                    <div className="col-md-12" id="form">
                        <form action="">
                            <div className="col-md-12" id="form">
                                <div className="form-group">
                                    <label for="" className="control-label col-md-6">ID</label>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Readonly" readonly/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="" className="control-label col-md-6">Nombre del rubro: </label>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Rubro"/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button className="btn btn-primary col-sm-12" id="save" type="submit">
                                        <i className="fas fa-save"></i>
                                        <span>Guardar</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div><br/>
                    <div className="col-md-12"><br/><br/>
                        <nav aria-label="" id="navigation">
                            <a className="btn btn-primary" href="#back" role="button">
                                <i className="fas fa-angle-left"></i>
                                <span>Atrás</span>
                            </a>
                            <a className="btn btn-primary" href="#edit" role="button">
                                <i className="far fa-window-close"></i>
                                <span>Cancelar</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }

}

export default Updaterubro;

