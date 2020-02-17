import React , { Component } from 'react'
import {updateProduct} from '../store/actions/updateproductActions'
import { connect } from 'react-redux'
import { compose } from 'recompose';
import { firestoreConnect } from 'react-redux-firebase';
import SelectOptions from './SelectOptions';
import Select from 'react-select';


const customStyle = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 20,
      }),
    
      control: (_, { selectProps: { width }}) => ({
        width: width
      }),
    
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
    
        return { ...provided, opacity, transition };
      }
}

class Detailcv extends Component {

    constructor(){
        super()
        this.state              ={ imagen : "" }
        this.GetImageSrc        = this.GetImageSrc.bind(this);
        this.updateProductInfo  = this.updateProductInfo.bind(this);
        this.HandleChange       = this.HandleChange.bind(this);

    }


    GetImageSrc =(e)=>{
        if( e.target.files && e.target.files[0]){
            this.reader = new FileReader();
            this.reader.onload = this.LoadReader;
            this.reader.readAsDataURL(e.target.files[0]);
        }
    }

    updateProductInfo(producto){

        this.state = {
                        ["productName" ]: (!this.state["productName"])  ?producto.productName  :this.state["productName"]   ,
                        ["productPrice"]: (!this.state["productPrice"]) ?producto.productPrice :this.state["productPrice"]  ,
                        ["productStock"]: (!this.state["productStock"]) ?producto.productStock :this.state["productStock"]  ,
                        ["productCost"] : (!this.state["productCost"])  ?producto.productCost  :this.state["productCost"]   ,
                        ["imagen"]      : (!this.state["imagen"])       ?producto.productImg   :this.state["imagen"]        ,
                        ["id"]          : producto.id   
                    } ;
                    
        this.props.updateProduct(this.state )
    }

    HandleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    LoadReader = ()=>{
        this.setState( {imagen : this.reader.result})
    }

    render(){
        
        return (
        
        <div className="col-md-10">
           {/* <style>
            .css-yk16xz-control {
                height: 65px;
                width: 103%;
                background-color: #f5f5f5;
                }

                .css-1hwfws3 {
                height: 65px;
                width: 103%;
                }

            </style>*/}
            <div style={{ height:"55px" }}>  </div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="image-area mt-4">
                                <img id="imageResult"  src={ (this.state.imagen =="")?this.props.location.state.productImg:this.state.imagen} alt="" className="img-fluid rounded shadow-sm mx-auto d-block"/>
                            </div>

                            <div className="col-md-12">
                                <div className="input-group mb-3 px-2 py-2  bg-white shadow-sm">
                                    <input id="upload" type="file" onChange ={this.GetImageSrc}  className="form-control"/>
                                    <div className="input-group-append">
                                        <label htmlFor="upload" className="btn btn-light m-0 px-4"> 
                                            <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                                            <small className="text-uppercase font-weight-bold text-muted">Subir Imagen</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="td">
                            <div className="col-md-10" id="content">
                            <div className="col-md-12" id="title">
                                    <h3>Detalle del artículo</h3> <hr/>
                                </div>
                                <br/>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-sm-4" style={{background: '#e0e0e0'}}><br/>
                                            <p> <strong>Categoría del producto</strong> </p>
                                        </div>
                                        {/*<select id="category"className="col-sm-8 form-control"  style={{background: '#f5f5f5', height:63}}>
                                            
                                             <SelectOptions  propCategory={{"categories":this.props.Categories,"selected":this.props.location.state.productCategory}} />   
                                        </select>*/
                                        console.log(this.props.location.state)
                                        }
                                         <Select   className ="col-sm-8"  width='200px'  
                                                   value     ={this.props.location.state.productCategory} 
                                                   options   ={this.props.Categories}></Select>
                                        &nbsp;
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4" style={{background: '#e0e0e0'}}><br/>
                                            <p> <strong>Nombre</strong> </p>
                                        </div>
                                        <input type="text" id="productName" defaultValue={this.props.location.state.productName} onChange={this.HandleChange}  className="col-sm-8 form-control" style={{background: '#f5f5f5', height:63}}></input>
                                        &nbsp;
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4" style={{background: '#e0e0e0'}}>
                                            <br/>
                                            <p>
                                                <strong>Precio de venta: </strong>
                                            </p>
                                        </div>
                                        <input className="text-center" id="productPrice" type="number" defaultValue={ this.props.location.state.productPrice } onChange={this.HandleChange}   className="col-sm-8 form-control" style={{background: '#f5f5f5', height:63}}></input>
                                        &nbsp;
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4" style={{background: '#e0e0e0'}}>
                                            <br/>
                                            <p>
                                                <strong>Precio de compra: </strong>
                                            </p>
                                        </div>
                                        <input className="text-center" id="productCost" type="number" defaultValue={ this.props.location.state.productCost } onChange={this.HandleChange}   className="col-sm-8 form-control" style={{background: '#f5f5f5', height:63}}></input>                                            
                                        &nbsp;
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4" style={{background: '#e0e0e0'}}><br/>
                                            <p> <strong>Cantidad en Stock: </strong></p>
                                        </div>                                        
                                        <input className="text-center" id="productStock" type="number" defaultValue={  this.props.location.state.productStock } onChange={this.HandleChange}  className="col-sm-8 form-control" style={{background: '#f5f5f5', height:63}}></input>
                                        &nbsp;
                                    </div>
                                </div>
                                

                                <div className="col-md-12">
                                    <br/><br/>
                                    <nav aria-label="" id="navigation">
                                        <a style={{marginRight: 15}} className="btn btn-primary" href="/productlist" role="button">
                                            <i className="fas fa-angle-left"></i>
                                            <span>Atrás</span>
                                        </a>
                                        <a className="btn btn-primary"  onClick={this.updateProductInfo.bind(this,this.props.location.state) } role="button">
                                            <i className="far fa-edit"></i>
                                            <span>Editar</span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </td>                    
                    </tr>
                </tbody>
            </table>
            
                    
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

const mapDispatchToProps = (dispatch)=>{
    return {
        updateProduct:(product)=>dispatch(updateProduct(product))
    }
}

export default compose( 
                        connect(mapStateToProps , mapDispatchToProps) ,
                        firestoreConnect([{
                            collection:"Categories" ,
                            orderBy : ["categoryName","desc"]
                        }])
                    )(Detailcv)