import React,{Component} from 'react';

class Header extends Component{

    render(){
        return (
            <div>                      
                <header>
                  <nav className="navbar top-navbar navbar-expand-md navbar-dark" id="navbar">
                      <div className="navbar-header">
                        <span className="navbar-brand" >MACUVI</span>
                      </div>                     
                  </nav>
               </header>
            </div>
        ); 
    }
}

export default Header;

