import React ,{ Component } from 'react'

class Menu extends Component{

    render(){
        return(
            <div className="col-md-2" id="sideBar">
            <nav className="side-nav">
              <ul className="sidebarnav" id="sidebar-item">
                <li className="sidebar-item">
                  <a href="" className="sidebar-link has-arrow waves-effect waves-dark btn btn-primary" aria-expanded="true" id="sidenav-menu">
                    <i className="far fa-file-alt"></i>
                    <span className="">Venta</span>
                  </a>
                  
                  <ul className="collapse first-level" aria-expanded="true">
                    <li className="sidebar-item">
                      <a href="" className="sidebar-link">
                        <i className="fas fa-plus"></i>
                        <span>
                          Registrar Venta
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                    <a href="" className="sidebar-link has-arrow waves-effect waves-dark btn btn-primary" id="sidenav-menu" aria-expanded="false">
                      <i className="far fa-file-alt"></i>
                      <span className="">Inventario</span>
                    </a>
                    
                    <ul className="collapse first-level" aria-expanded="false">
                      <li className="sidebar-item">
                        <a href="" className="sidebar-link">
                          <i className="fas fa-plus"></i>
                          <span>
                            Registrar Producto
                          </span>
                        </a>
                      </li>

                      <li className="sidebar-item">
                        <a href="" className="sidebar-link">
                          <i className="fas fa-plus"></i>
                          <span>
                            Lista de Productos
                          </span>
                        </a>
                      </li>

                      <li className="sidebar-item">
                        <a href="" className="sidebar-link">
                          <i className="fas fa-plus"></i>
                          <span>
                            Crear categoria
                          </span>
                        </a>
                      </li>

                      <li className="sidebar-item">
                        <a href="" className="sidebar-link">
                          <i className="fas fa-list"></i>
                          <span>
                            Imprimir Código de Barra
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
              </ul>
            </nav>
          </div> 
        );
    }    
}

export default Menu;

