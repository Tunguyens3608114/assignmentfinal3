import React from 'react';

import{
  Route, Link
} from 'react-router-dom';




const Menudetail =[
{
  name : 'Home',
  to   : '/',
  exact: true
},
{
  name : 'Products',
  to   : '/Productpage',
  exact: false
},

{
  name : 'Contacts',
  to   : '/Contact',
  exact: false
},
{
  name : 'Administrator',
  to   : '/Adminhome',
  exact: false
},
]

const MenuLink = ({label, to , activeOnlyWhenExact}) => {
  return(
      <Route path ={to} exact= {activeOnlyWhenExact} children={({match})=>{
        var active = match ? 'active noneactive' : '';
         return(
          <li className={`my-li ${active}`}>
          <Link to ={to} className="my-link">
             {label}
          </Link>
        </li>
         )
      }}
       />
  )
}
class Header extends React.Component {
  render() {
    return (
      
      <header className='navbar navbar-inverse bg-dark fixed-top navbar-expand-md user-header'>
        Shopping Online
      
        <nav className='collapse navbar-collapse'>
           <ul className='nav navbar-nav'>
              {this.showmenus(Menudetail)}  
             </ul> 
           </nav>
        
      </header>   
     
    );
  }
  showmenus = (Menudetail) => {
   var result = null;
   if(Menudetail.length >0){
     result = Menudetail.map ((menu,index) =>{
       return (
        <MenuLink 
        key = {index} 
        label={menu.name}
        to ={menu.to} 
        activeOnlyWhenExact={menu.exact}/>
        )
     });
   }
   return result;

  }
}

export default Header;

