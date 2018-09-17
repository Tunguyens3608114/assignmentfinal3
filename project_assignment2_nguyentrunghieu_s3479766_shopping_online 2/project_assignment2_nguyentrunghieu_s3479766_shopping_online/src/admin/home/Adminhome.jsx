import React from 'react';
import Adminnavbar from '../navbar/Adminnavbar';
import { connect } from 'react-redux';
import {
    actFetchCategoriesRequest,
    } from './../../action/categoriesaction';


class  Adminhome extends React.Component {
    componentDidMount(){
    this.props.fetchCategories();
   
}
    render(){
    return (
        <div className="row">

            <div className='col-sm-2'>
                <Adminnavbar />
            </div>
            <aside className='col-sm-6 text-left'>
                <div className='contact'>
                    <div className='container-fluid'>
                        <h1>Welcome to Admin Homepage</h1>
                        <p>Administrator can search, create, update, delete products and categories</p>
                        <p>Click <b>Products</b> for product system</p>
                        <p>Click <b>Categories</b> for category system</p>
                        
                    </div>
                </div>
            </aside>
        </div>
    );
}
}
const mapDispatchToProps = (dispatch) => {
    //dispatch actions by using imported action methods
    return {
        //dispatch actions for products
      //  fetchProducts: () => { dispatch(actFetchProductsRequest()) },
      //  getProduct: (_id) => { dispatch(actGetProductRequest(_id)); },
       // deleteProduct: (_id)=> {dispatch(actDeleteProductRequest(_id))},
      
        fetchCategories: () => { dispatch(actFetchCategoriesRequest()) },


    
    }
};
export default connect(null,mapDispatchToProps)(Adminhome);