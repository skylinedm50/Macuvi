import React ,{ Component } from 'react'

class Loadcv extends Component {

    render(){
        return(
            <div className="col-md-10">                  
                <div style={{ height:"55px" }}>  </div>
                    <div className="col-md-10" id="content">
                        <div className="col-md-12" id="title">
                            <h3>Carga de Curriculum</h3>
                            <hr/>
                        </div>  
                        <br/>
                        <form action="">
                            <div className="col-md-12" id="form">
                                <div className="form-group">
                                    <label className="control-label col-md-6">Rubro: </label>
                                    <div className="col-md-12">
                                        <select name="" id="" className="form-control">
                                            <option >Seleccione un rubro</option>
                                            <option >Medicina</option>
                                            <option >Ingeniería en sistemas</option>
                                            <option >Ingeniería civil</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-6">Valoración: </label>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Valoración"/>                
                                    </div>
                                </div>
                                <br/><br/>
                                <div className="col-sm-12">
                                    <button className="btn btn-primary col-sm-12" id="save" type="submit">
                                        <i className="fas fa-save"></i>
                                        <span>Guardar</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <br/>
                        <div className="col-md-12">
                            <br/><br/>
                            <nav aria-label="" id="navigation">
                                <a className="btn btn-primary" style={{margin:"15px"}} href="#back" role="button">
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

export default Loadcv;
