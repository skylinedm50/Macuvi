import React , {Component} from 'react';
import { connect } from 'react-redux'; 
import { createProject } from '../store/actions/createProductActions'; 
import { compose } from 'recompose';
import { firestoreConnect } from 'react-redux-firebase';
import Select from 'react-select';

var Barcode = require('react-barcode');


class Newproduct extends Component 
{
    options;
    constructor()
    {
        super()
        this.DisplayChanges = { displayes: [
                                [                            
                                    {name:"stepwizard-step1" , class:"btn btn-primary btn-circle"} ,
                                    {name:"stepwizard-step2" , class:"btn btn-default btn-circle"} ,
                                    {name:"stepwizard-step3" , class:"btn btn-default btn-circle"}                                         
                                ] ,
                                [                             
                                    {name:"step1" , visible:true} ,
                                    {name:"step2" , visible:false},
                                    {name:"step3" , visible:false}
                                ] ,
                                [
                                    {imageSrc:"#"}
                                ]
                    ]
                }
        this.NavListeClick          = this.NavListeClick.bind(this)         ;    
        this.GetImageSrc            = this.GetImageSrc.bind(this)           ; 
        this.LoadReader             = this.LoadReader.bind(this)            ;  
        this.HandleSubmit           = this.HandleSubmit.bind(this)          ;
        this.HandleChange           = this.HandleChange.bind(this)          ;
        this.HandleCategorySelected = this.HandleCategorySelected.bind(this);
    }

    NavListeClick(e){    
        this.DisplayChanges.displayes.map((statex , i)=>{
                statex.map((obj)=>{
                    if(i===0){
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
        this.DisplayChanges.displayes.map((statex , i)=>{
                statex.map((obj)=>{
                    if(i === 0){
                        obj.class ="btn btn-default btn-circle"     
                        if(btnActive === obj.name){
                            obj.class ="btn btn-primary btn-circle"  
                        }
                    }
                    else if(i===1){
                        obj.visible = false;
                        if(nextObj === obj.name){
                            obj.visible = true
                        }
                    }
                });
        });
    }
   
    GetImageSrc =(e)=>{
        if( e.target.files && e.target.files[0]){
            this.reader = new FileReader();
            this.reader.onload = this.LoadReader;
            this.reader.readAsDataURL(e.target.files[0]);
        }
    }

    LoadReader = ()=>{
        this.DisplayChanges.displayes.map((obj , i)=>{
            if(i === 2){
                obj[0].imageSrc = this.reader.result;
            }
        });
        this.setState(this.DisplayChanges.displayes[2])
    }

    HandleCategorySelected= selection=>{
        this.setState({ ["category"]:selection }); 
    }

    HandleSubmit(e){
        this.props.createProject(this.state)
    }

    HandleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render()
    {
        return( 
            <div className="col-md-10">                  
                    <div style={{ height:"55px" }}>  </div>
                    <div className="col-md-10" id="content">
                        <div className="col-md-12" id="title">             
                            <h3>Nuevo Producto</h3><hr/>
                        </div>
                        <div className="row">
                            <div className="stepwizard col-md-10">
                                <div className="stepwizard-row setup-panel col">
                                    <div className="stepwizard-step">
                                        <a href="#step-1" id="stepwizard-step1" type="button" onClick={this.NavListeClick} className={this.DisplayChanges.displayes[0][0].class}>1</a>
                                        <p>Paso 1</p>
                                    </div>
                                    <div className="stepwizard-step">
                                        <a href="#step-2" id="stepwizard-step2" type="button" onClick={this.NavListeClick} className={this.DisplayChanges.displayes[0][1].class} disabled="disabled" >2</a>
                                        <p>Paso 2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12" id="form step-1">
                            <section className="setup-content" id="step1" style = {{ display: this.DisplayChanges.displayes[1][0].visible ?"block":"none"}} ref = "setup-content1">                                                       
                                <table>
                                    <tbody>
                                        <tr>
                                            <td >
                                                <div className="image-area mt-4">
                                                    <img id="imageResult" src={this.DisplayChanges.displayes[2][0].imageSrc} alt="" className="img-fluid rounded shadow-sm mx-auto d-block"/>
                                                </div>
                                            </td>
                                            <td className="td">

                                                <h6>Datos Generales</h6>
                                                <div className="form-group">
                                                    <label className="control-label col-md-6">Imagen</label>
                                                    <div className="col-md-12">
                                                        <div className="input-group mb-3 px-2 py-2  bg-white shadow-sm">
                                                                <input id="upload" type="file" onChange ={this.GetImageSrc}  className="form-control"/>
                                                                <label id="upload-label" htmlFor="upload" className="font-weight-light text-muted">Subir Imagen</label>
                                                                <div className="input-group-append">
                                                                    <label htmlFor="upload" className="btn btn-light m-0 px-4"> 
                                                                        <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                                                                        <small className="text-uppercase font-weight-bold text-muted">Subir Imagen</small>
                                                                    </label>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-md-6">Categoría del producto</label>
                                                    <div className="col-md-12">                                                        
                                                        <Select id="Category" onChange={this.HandleCategorySelected.bind(this)} options={this.props.Categories}></Select>
                                                    </div> 
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-md-6">Nombre del producto</label>
                                                    <div className="col-md-12">
                                                        <input type="text" id="productName" className="form-control" onChange={this.HandleChange} placeholder="Nombre del producto"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-md-6">Inventario inicial</label>
                                                    <div className="col-md-12">
                                                        <input type="number" id="productStock" onChange={this.HandleChange} className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <div className="col-sm-5">
                                                        <label className="control-label col-md-6">Precio de compra</label>
                                                        <div className="col-md-12">
                                                            <input type="number" id="productCost" onChange={this.HandleChange} className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <label className="control-label col-md-6">Precio de venta</label>
                                                        <div className="col-md-12">
                                                            <input type="number" id="productPrice" onChange={this.HandleChange} className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label className="control-label col-md-6">QR</label>
                                                        <div className="col-md-12">
                                                            <input type="text" id="productQr" readOnly className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-12" id="nav-steps">
                                                    <a className="btn btn-primary nextBtn btn pull-left" href="#step-2" onClick = {this.HandlerNextClickEnvent.bind(this, "step2", "stepwizard-step2")} >Siguiente</a>            
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </section>
                            
                            <section className="setup-content" id="step2" href="#step-3" style = {{ display: this.DisplayChanges.displayes[1][1].visible ?"block":"none"}} ref = "setup-content2">
                                <h6>Impresión de código QR</h6>
                                <div className="Barcode">
                                    <div className="form-group">
                                        <Barcode value="Test Bar" />
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <label className="control-label col-md-6">Número para imprimir</label>
                                            <div className="col-md-6">
                                                <input type="number" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="col-md-12" id="nav-steps">
                                    <a className="btn btn-primary prevBtn btn pull-left" style={{margin:"15px"}} href="#step-1"  onClick = {this.HandlerNextClickEnvent.bind(this, "step1" , "stepwizard-step1")}>Atrás</a>
                                    <a className="btn btn-primary nextBtn btn pull-left"  onClick = {this.HandleSubmit } >Guardar producto</a>                                   
                                </div>
                            </section>

                   
                        </div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    var categories=[];
    if(state.firestore.ordered.Categories){
        state.firestore.ordered.Categories.map((category)=>{
            categories.push({id: category.id, value: category.categoryName , label: category.categoryName})            
        })
        return { Categories:  categories  }
    }
}

const mapDispatchToProps = (dispatch) => {
    return { createProject: (project) => dispatch(createProject(project))  }
}

export default compose(
                        connect(mapStateToProps,mapDispatchToProps),
                        firestoreConnect([{
                            collection:"Categories" ,
                            orderBy : ["categoryName","desc"]
                        }])
                    )(Newproduct);