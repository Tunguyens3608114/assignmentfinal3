import React from 'react';
import Productlistview from '../userproduct/Productlistview.jsx';
import Productgridview from '../userproduct/Productgridview.jsx';

import { connect } from 'react-redux';


import {
 actGetProductRequest, actFetchProductsRequest,
   } from './../../action/productsAction';

   import {
    actFetchCategoriesRequest,
    } from './../../action/categoriesaction';  


 class Productpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showItems: props.products, 
            showfilter: 'gridview' 
        
    }

    }
    componentDidMount(){
        this.props.fetchCategories()
        this.props.fetchProducts()
        
    }

    componentWillReceiveProps(nextprops) {
        this.setState({ showItems: nextprops.products });
    }


    filterbycategory(id) {
        let getidcategory = this.props.products.filter((product) => product.productType === id);
        this.setState({ showItems: getidcategory });
    }


    filterprice(filter) {
        if (filter === 'LOW_PRICE') {
            let lowprice = this.props.products.sort(function (price_a, price_b) {
                return parseFloat(price_a.price) - parseFloat(price_b.price);
            });
            this.setState({ showItems: lowprice });
        }
        else if (filter === 'HIGH_PRICE') {
            let highprice = this.props.products.sort(function (price_a, price_b) {
                return parseFloat(price_b.price) - parseFloat(price_a.price);
            });
            this.setState({ showItems: highprice });
        }
    }


    filterview(filter) {
        if (filter === 'gridview') {
            this.setState({ showfilter: 'gridview' })
        }
        else {
            this.setState({showfilter: 'listview'})
        }
    }

    render() { 
       
        return ( 
            <div className='container-fluid'>
               <div className='col-sm -6'>
                  <br/> 
               </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <div className='card filter-card'>
                            <div className='card-header bg-light text-black'>
                                <h4 className='title'>Filter By</h4>
                            </div>
                            <div className='card-body'>
                                <div className='card-header'>
                                    <h5 className='card-title'>
                                        <a data-toggle='collapse' href='#myCategory'>
                                            Category
							            </a>
                                    </h5>
                                </div>
                                <div id='myCategory'
                                 className='collapse in' >
                                    <ul className='list-group'>
                                        {this.props.categories.map((category, index) =>
                                            <li key={index} className='list-group-item'>
                                                <href className='btn-link' onClick={() => this.filterbycategory(category._id)}>
                                                    {category.name}
                                                </href>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className='card-header'>
                                    <h5 className='card-title'>
                                        <a data-toggle='collapse' href='#myPrice'>
                                         Price
							            </a>
                                    </h5>
                                </div>
                                <div id='myPrice' className='collapse in' >
                                    <ul className='list-group'>
                                        <li className='list-group-item'>
                                            <href className='btn-link' onClick={() => this.filterprice('LOW_PRICE')}>
                                                Low Price
                                            </href>
                                        </li>
                                        <li className='list-group-item'>
                                            <href className='btn-link' onClick={() => this.filterprice('HIGH_PRICE')}>
                                                High Price
                                            </href>
                                        </li>
                                    </ul>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-10'>
                            <div className='btn-group'>
                                <button
                                    type='button' 
                                    className='btn btn-primary' 
                                    onClick={() => this.filterview('gridview')}>
                                    GridView 
                                </button>
                                &nbsp;
                                <button
                                    type='button'
                                    className='btn btn-success'
                                    onClick={() => this.filterview('listview')}>
                                    ListView 
                                </button>
                                   
                            </div>
                        <div>
                            {this.state.showfilter === 'listview' ? 
                            <Productlistview 
                                
                            showItems={this.state.showItems}
                            categories={this.props.categories}
                            products = {this.props.products}/>
                             
                                    
                            :
                            <Productgridview 
                            categories={this.props.categories}
                            showItems={this.state.showItems}
                            products = {this.props.products}/>
                                  
                           }
                           
                        </div>
                       <div>                        
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {

        categories: state.categories,
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    //dispatch actions by using imported action methods
    return {
        //dispatch actions for products and categories
        getProduct: (_id) => { dispatch(actGetProductRequest(_id)); },
        fetchCategories: () => { dispatch(actFetchCategoriesRequest()) },
        fetchProducts: () => { dispatch(actFetchProductsRequest()) },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Productpage);