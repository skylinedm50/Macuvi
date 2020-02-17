import React,{Component} from 'react'
import Logo from '../statics/images/iconcolor.png'

class Login extends Component{

    render(){
        return (
            <div >

                <div className="auth-wrapper justify-content-center align-items-center gradient">
                    <div className="auth-box">
                        <div className="loginform">
                            <div className="logo">
                                <span className="db"><img src={Logo} alt={"logo"} height="50" width="70"></img></span>
                                <h5 className="font-medium m-b-20">Autenticación</h5>
                            </div>
                        </div> 
                        <br/>

                        <form action="">
                            <div className="form-row align-items-center">
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend"></div>
                                            <input type="text" className="form-control fom-control-lg" placeholder="Cuenta de usuario"/>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"></div>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Contraseña"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="col-auto col-md-7">
                                    <button type="submit" className="btn btn-primary col-md-12">
                                        <i className="fas fa-unlock-alt"></i>
                                        <span>Iniciar Sesión</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                              
            </div>
        );   
    }
}

export default Login;

