
import React from 'react';
import{
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';
import './Assets/css/default.min.css';
 import Header from './components/Header';


//document for user
import Home from './components/Home';
import Productpage from './user/userproduct/Productpage';
import Contact from './components/Contact';
import Notfound from './components/Notfound';
 
 
 // document for admin
 import Adminhome from './admin/home/Adminhome'

 import Adminproductlistpage from './admin/adminproduct/Adminproductlistpage';
 import Adminproductactionform from './admin/adminproduct/Adminproductactionform';
 import Admincategorylistpage from './admin/admincategory/Admincategorylistpage';
 import Admincategoryactionform from './admin/admincategory/Admincategoryactionform';
import Productdetail from './user/userproduct/Productdetail';




class App extends React.Component {
  
    render() {
      
      return (
    <Router>
        <div className="App">
        {/* Menu bar */}
          <div className='btn btn-primary outline mr-12'>
            <Header/>
            </div>
          <br/>
          <br/>
          {/* </nav>  */}
             {/* content menubar */}
             <div className='form-group'>
             <Switch>
                
             
             <Route path="/" exact component={Home}/>
             <Route path="/Contact" component={Contact}/>
             <Route path="/Productpage" component={Productpage}/>
             <Route path="/Productdetail/:id/detail" component={Productdetail}/> 
             <Route path="/Adminhome" component={Adminhome}/>
             

             
                <Route path="/Admincategorylistpage/1" component={Admincategorylistpage}/>
                <Route path="/Admincategorylistpage/:pageNo?" component={Admincategorylistpage}/>
                <Route path="/Admincategoryactionform/add" component={Admincategoryactionform}/>
                <Route path="/Admincategoryactionform/:id/edit" component={Admincategoryactionform}/>

                <Route path="/Adminproductlistpage/1" component={Adminproductlistpage}/>
                <Route path="/Adminproductlistpage/:pageNo?" component={Adminproductlistpage}/>
                <Route path="/Adminproductactionform/add" component={Adminproductactionform}/>
                <Route path="/Adminproductactionform/:id/edit" component={Adminproductactionform}/> 

                <Route path="" component={Notfound}/>
             </Switch>
             </div>
  
                </div>
                </Router>

         
    );
}


}



export default App;

