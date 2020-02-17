import React, { Component } from 'react'

const CategoriesItems = ({propCategory}) => (
   <>
        <option key={0} selected value={0}  disabled  >Seleccionar una categoría</option>   
        {
            propCategory.categories.map(category=>(                
                <option value={category.categoryName}  key={category.id}>{category.categoryName}</option>
            ))
        }
    </>
);

class SelectOptions extends Component {

    constructor(){
        super()
    }

    render(){
        if(this.props.propCategory.categories){
            return( <CategoriesItems propCategory={{"categories":this.props.propCategory.categories , "selected": this.props.propCategory.selected }} />  ) 
        }else{
            return( null ) 
        }      
    }
}

export default SelectOptions;