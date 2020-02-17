import React , {Component} from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import Login         from './components/login';
import Loadcv        from './components/loadcv';
import Header        from './components/header';
import Menu          from './components/menu';
import Detailcv      from './components/detailcv';
import Detailsrubro  from './components/detailsrubro';
import Listcv        from './components/listcv';
import Listrubros    from './components/listrubros';
import Newcv         from './components/newcv';
import newCategory   from './components/newCategory';
import Updaterubro   from './components/updaterubro';
import Newproduct    from './components/newproduct';
import ProductList   from './components/productlist';

class App extends Component {
  
  
  render(){

    return (       
          <BrowserRouter>
              <Header></Header>
              <div className="row col-md-12">
                  <Menu></Menu>
                      <Switch>
                          <Route exact path="/login"          component={Login}/>  
                          <Route exact path="/productlist"    component={ProductList}/>
                          <Route exact path="/load"           component={Loadcv}/>
                          <Route exact path="/detailcv"       component={Detailcv}/>
                          <Route exact path="/detailrubro"    component={Detailsrubro}/>
                          <Route exact path="/listcv"         component={Listcv}/>
                          <Route exact path="/listrubros"     component={Listrubros}/>
                          <Route exact path="/newcv"          component={Newcv}/>
                          <Route exact path="/newCategory"    component={newCategory}/> 
                          <Route exact path="/updaterubro"    component={Updaterubro}/>
                          <Route exact path="/Newproduct"     component={Newproduct}/>
                      </Switch>   
              </div>              
          </BrowserRouter>  
    );
  }
}

export default App;
