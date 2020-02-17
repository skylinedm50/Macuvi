import React, {Component} from 'react';
import { createCategory } from '../store/actions/createCategoryActions'
import { connect } from 'react-redux';


class newCategory extends Component {

    constructor(){
        super()
        this.HandleTextChange = this.HandleTextChange.bind(this);
        this.HandleSubmitButton = this.HandleSubmitButton.bind(this);
    }

    HandleTextChange(e){
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    
    HandleSubmitButton(e){
        this.props.createCategory(this.state)
    }

    
     render(){
         return(
            <div className="col-md-10">                  
                <div style={{ height:"55px" }}>  </div>
                <div className="col-md-10" id="content">              
                    <div className="col-md-12" id="title">
                        <h3>Nueva Categoría</h3><hr/>
                    </div><br/>
                    <div className="col-md-12" id="form">
                        <form action="">
                            <div className="form-group">
                                <label className="control-label col-md-6">ID</label>
                                <div className="col-md-12">
                                    <input type="text" id="CategoryID" className="form-control" onChange={this.HandleTextChange} placeholder="Readonly" readOnly/>
                                </div>
                            </div>
                
                            <div className="form-group">
                                <label className="control-label col-md-6">Nombre de la Categoría: </label>
                                <div className="col-md-12">
                                    <input type="text" id="CategoryName" className="form-control" onChange={this.HandleTextChange}placeholder="Categoria"/>
                                </div>
                            </div><br/>
                            <div className="col-sm-12">
                                <button className="btn btn-primary col-sm-12" onClick={this.HandleSubmitButton} id="save" >
                                    <i className="fas fa-save"></i>
                                    <span>Guardar</span>
                                </button>
                            </div>
                        </form>
                    </div><br/>
                    <div className="col-md-12"><br/><br/>
                        <nav aria-label="" id="navigation">
                            <a className="btn btn-primary" href="#back" role="button">
                                <i className="fas fa-angle-left"></i>
                                <span>Atrás</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
         )
     }
}

const mapStateToProps = (dispatch)=>{
    return {
        createCategory:(category) => dispatch(createCategory(category))
    }
}

export default connect( null ,mapStateToProps)(newCategory);
