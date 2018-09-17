import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Adminnavbar from '../navbar/Adminnavbar';
import Productpaging from '../../reducers/paging/Productpaging';
import {
   actFetchProductsRequest, actDeleteProductRequest, actGetProductRequest
} from './../../action/productsAction';

import {
    actFetchCategoriesRequest,
     } from './../../action/categoriesaction';
   

class Adminproductlistpage extends React.Component {
    constructor(props) {
        super(props);
        this.getProduct = this.getProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.state = {
            search: '',
        }
    }

 
    updatesearch(e){
       this.setState({search: e.target.value})
    }

    getProduct(_id){
        this.props.getProduct(_id); 
    }
    deleteProduct (_id){
        if (confirm('Do you want to delete ?')) { //eslint-disable-line
            this.props.deleteProduct(_id);
        }
    }
     componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategories();

        
     }
   
    render() {
        let find =this.props.products.filter(
            (product)  => {
                return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            } 
          );
        return (
            <div className='row'>
               <div className='col-sm-2'>
                    <Adminnavbar />
                </div>
 
                 <div className='col-sm-3'>
                 <br/>
                 <br/>
                 <div className='btn-group'>
                    <Link
                        to ='/Adminproductactionform/add' 
                        className='btn btn-primary mr-2'>
                       
                        <span className='fa fa-plus'></span> Add Product
                    </Link>
                    &nbsp;
                    <input type="text"
                    name="search"
                    placeholder='Search Name'
                    value = {this.state.search}
                    onChange = {this.updatesearch.bind(this)}/>
                                   
                </div>
                <div className='panel-body'>
                <table className='table table-striped table-hover table-sm'>
                    <thead className='thead-dark text-center'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Producer</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                 {find.map((product,index) =>
                <tr className='text-center' key={index}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.brand}</td>
                    <td>{product.producer}</td>
                    <td> <img className='img2 img-responsive' src={product.imageUrl} alt ='' /></td>
                    <td>{product.productType}</td>
                    <td>
                        <Link
                            to='/Adminhome'
                            className='btn btn-danger'
                            onClick={() => this.deleteProduct(product._id)}>
                            <span className='fa fa-trash-o'></span> Delete
                        </Link>

                        &nbsp;
                        &nbsp;
                        <Link 
                            to={`/Adminproductactionform/${product._id}/edit`} 
                            className='btn btn-info'
                            onClick={() =>this.getProduct(product._id)}>
                            <span className='fa fa-pencil-square-o'></span> Edit
                        </Link>
                    </td>
                 </tr>
               
                          )
                           }
                       </tbody>
                </table>
                 {
                    this.props.pages > 1 && <Productpaging pages={this.props.pages} currentPage={this.props.currentPage}/>
                 }
            </div>
                        
                </div>
                <div className='col-sm-1'></div>
        </div>
        );
    }
}

function getNumberPage(products, pageNo) {
    // I assumed showing 10 merchants per page
    const perPage = 10;
    if (products.length) {
        // Filter 10 merchants by page number
        return products.filter((product, i) => {
            return i >= perPage*(pageNo-1) && i < perPage*pageNo;
        });
    }
    return [];
}

const mapStateToProps = (state, ownProps) => {
    let pageNo = ownProps.match.params.pageNo || 1;
    let products = getNumberPage(state.products, pageNo);
    return {
        //product states

        products:products,
        pages: Math.ceil(state.products.length / 10), // Determine number of pages for pagination
        currentPage: pageNo,
        editProducts: state.editProducts,
        

   
    };
};

const mapDispatchToProps = (dispatch) => {
    //dispatch actions by using imported action methods
    return {
        //dispatch actions for products and categories
        fetchProducts: () => { dispatch(actFetchProductsRequest()) },
        getProduct: (_id) => { dispatch(actGetProductRequest(_id)); },
        deleteProduct: (_id)=> {dispatch(actDeleteProductRequest(_id))},
        fetchCategories: () => { dispatch(actFetchCategoriesRequest()) },
     


    
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Adminproductlistpage);