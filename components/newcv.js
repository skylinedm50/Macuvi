import React , {Component, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
 
class Newcv extends Component {

    constructor(){
        super()
        this.state= { states: [
                        [                            
                            {name:"stepwizard-step1" , class:"btn btn-primary btn-circle"} ,
                            {name:"stepwizard-step2" , class:"btn btn-default btn-circle"} ,
                            {name:"stepwizard-step3" , class:"btn btn-default btn-circle"}                                         
                        ] ,
                        [                             
                            {name:"step1" , visible:true} ,
                            {name:"step2" , visible:false},
                            {name:"step3" , visible:false}
                        ]
                    ]
                }
        this.NavListeClick = this.NavListeClick.bind(this);    
    }


    NavListeClick(e){    
        this.state.states.map((statex , i)=>{
                statex.map((obj , x)=>{
                    if(i==0){
                        obj.class ="btn btn-default btn-circle"            
                        if(e.target.id === obj.name){
                            obj.class ="btn btn-primary btn-circle"            
                        }
                    }else{
                        obj.visible = false;
                        if(e.target.id.substring(11,17) === obj.name){
                            obj.visible = true
                        }
                    }
                });
        });

    }

    HandlerNextClickEnvent(nextObj , btnActive){
        this.state.states.map((statex , i)=>{
                statex.map((obj , x)=>{
                    if(i == 0){
                        obj.class ="btn btn-default btn-circle"     
                        if(btnActive == obj.name){
                            obj.class ="btn btn-primary btn-circle"  
                        }
                    }
                    else if(i==1){
                        obj.visible = false;
                        if(nextObj == obj.name){
                            obj.visible = true
                        }
                    }
                });
        });

    }

    render(){
        
        return(
           
            <div className="col-md-10">                  
                    <div style={{ height:"55px" }}>  </div>
                    <div className="col-md-10" id="content">
                        <div className="col-md-12" id="title">
              
                            <h3>Nuevo Curriculum</h3><hr/>
                        </div>
                        <div className="row">
                            <div className="stepwizard col-md-10">
                                <div className="stepwizard-row setup-panel col">
                                    <div className="stepwizard-step">
                                        <a href="#step-1" id="stepwizard-step1" type="button" onClick={this.test} className={this.state.states[0][0].class}>1</a>
                                        <p>Paso 1</p>
                                    </div>
                                    <div className="stepwizard-step">
                                        <a href="#step-2" id="stepwizard-step2" type="button" onClick={this.NavListeClick} className={this.state.states[0][1].class} disabled="disabled" >2</a>
                                        <p>Paso 2</p>
                                    </div>
                                    <div className="stepwizard-step">
                                        <a href="#step-3" id="stepwizard-step3" type="button" onClick={this.NavListeClick} className={this.state.states[0][2].class} disabled="disabled">3</a>
                                        <p>Paso 3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12" id="form step-1">
                            <section className="setup-content" id="step1" style = {{ display: this.state.states[1][0].visible ?"block":"none"}} ref = "setup-content1">
                                <h6>Datos Generales</h6>
                                <div className="form-group">
                                    <label className="control-label col-md-6">Nombre</label>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Nombre completo"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-6">Imagen</label>
                                    <div className="col-md-12">
                                        <input type="file" className="form-control form-control-file"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-6">Número de identidad</label>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Ej: 0801199312147"/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label className="control-label col-md-6">Fecha de nacimiento</label>
                                        <div className="col-md-12">
                                            <input type="date" className="form-control" placeholder="Date"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="control-label col-md-6">Estado civil</label>
                                        <div className="col-md-12">
                                            <select name="" id="" className="form-control">
                                                <option value="">Casado/a</option>
                                                <option value="">Soltero/a</option>
                                                <option value="">Viudo/a</option>
                                                <option value="">Divorciado/a</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-6">Lugar de nacimiento</label>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Ej: Tegucigalpa, Francisco Morazán"/>
                                    </div>
                                </div>
                                <div className="col-md-12" id="nav-steps">
                                    <a className="btn btn-primary nextBtn btn pull-left" href="#step-2" onClick = {this.HandlerNextClickEnvent.bind(this, "step2", "stepwizard-step2")} >Siguiente</a>            
                                </div>
                            </section>
                            <section className="setup-content" id="step2" href="#step-3" style = {{ display: this.state.states[1][1].visible ?"block":"none"}} ref = "setup-content2">
                                <h6>Formación Académica</h6>
                                <div className="form-group">
                                    <label className="control-label col-md-6">Institución</label>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Ej: Universidad Autónoma de Honduras"/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label className="control-label col-md-6">Período</label>
                                        <div className="col-md-12">
                                            <input type="date" className="form-control" placeholder="Date"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="control-label col-md-6">Nivel de estudio</label>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder="Ej: Superior"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row" id="campos"></div>
                                <div className="col-md-12">
                                    <a href="#" onClick="AgregarCampos();" className="sidebar-link has-arrow waves-effect waves-dark btn btn-primary" aria-expanded="true" id="addButton" >
                                        <i className="fas fa-plus"></i>
                                        <span>Agregar otra formación</span>
                                    </a>
                                </div><br/>
                                <div className="col-md-12" id="nav-steps">
                                    <a className="btn btn-primary prevBtn btn pull-left" style={{margin:"15px"}} href="#step-1"  onClick = {this.HandlerNextClickEnvent.bind(this, "step1" , "stepwizard-step1")}>Atrás</a>
                                    <a className="btn btn-primary nextBtn btn pull-left" href="#step-3" onClick = {this.HandlerNextClickEnvent.bind(this, "step3", "stepwizard-step3")}>Siguiente</a>
                                </div>
                            </section>
                            <section className="setup-content" id="step3" href="#step-1" style = {{ display: this.state.states[1][2].visible ?"block":"none"}} ref = "setup-content3">
                                <h6>Experiencia</h6>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label className="control-label col-md-6">Período</label>
                                        <div className="col-md-12">
                                            <input type="date" className="form-control" placeholder="Date"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label className="control-label col-md-6">Puesto</label>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder="Ej: Analista programador"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-6">Actividades</label>
                                    <div className="col-md-12">
                                        <textarea id="" rows="3" className="form-control" placeholder="Descripción de actividades"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12" id="nav-steps">
                                    <a className="btn btn-primary prevBtn btn pull-left" style={{margin:"15px"}} href="#step-2"  onClick = {this.HandlerNextClickEnvent.bind(this, "step2", "stepwizard-step2")}>Atrás</a>
                                    <input className="btn btn-success btn pull-right" type="submit" value="Guardar"></input>
                                </div>
                            </section>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Newcv;