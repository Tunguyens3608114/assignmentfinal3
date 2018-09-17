import React from 'react';
import{
  Link
} from 'react-router-dom';

class  Adminnavbar extends React.Component {
  render(){
  return (
    
     <div className='container-fluid' >
      <div className="col-sm-9">
       <br/>
       <br/>
       
       
          
       </div>
       <nav className='col-sm-3 hidden-xs-down bg-faded sidebar'>
       
       <ul className='nav flex-column'>
            <li className='nav-item active'>
              <Link to ="/Adminhome" className="nav-link active" >Home</Link>
            </li>
            <li className='nav-item'>
            <Link to ="/Adminproductlistpage" className="nav-link" >Products</Link>
         
            </li>
            <li className='nav-item'>
            <Link to ="/Admincategorylistpage" className="nav-link" >Categories</Link>
            </li>
           
        </ul>
        </nav>
     
    </div> 
  );
}
}

export default Adminnavbar;

