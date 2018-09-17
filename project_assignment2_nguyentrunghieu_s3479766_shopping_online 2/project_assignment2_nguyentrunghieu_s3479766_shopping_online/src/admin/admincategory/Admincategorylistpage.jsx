import React from 'react';
import { connect } from 'react-redux';

import Admincategorylist from '../admincategory/Admincategorylist';

import  Adminnavbar  from '../navbar/Adminnavbar';
import { Link } from 'react-router-dom';


import {
 actFetchCategoriesRequest, actDeleteCategoryRequest,actGetCategoryRequest
  } from './../../action/categoriesaction';


 class Admincategorylistpage extends React.Component {
    constructor(props) {
        super(props);
        this.getCategory = this.getCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this); 
    }
   

    componentDidMount() {
      
        this.props.fetchCategories();
       
     }
   getCategory(_id){
        this.props.getCategory(_id); 
    }
    deleteCategory (_id){
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.deleteCategory(_id);
        }
    }

    render() {
       
        return (
            <div className='row'>
                <div className='col-sm-3'>
                    <Adminnavbar />
                </div>
                  <div>
                    <Link
                       to ="/Admincategoryactionform/add"
                       className='btn btn-primary mr-2'>
                        
                        <span className='fa fa-plus'></span> Add Category
                       
                    </Link>

                    <Admincategorylist
                    pages={this.props.pages}
                    currentPage={this.props.currentPage}
                    categories = {this.props.categories}
                    getCategory = {this.getCategory}
                    deleteCategory = {this.deleteCategory}
                    />
                </div>
               
            </div>
        );
    }

 
    
}
function getNumberPage(categories, pageNo) {
    // I assumed showing 10 merchants per page
    const perPage = 5;
    if (categories.length) {
        // Filter 10 merchants by page number
        return categories.filter((category, i) => {
            return i >= perPage*(pageNo-1) && i < perPage*pageNo;
        });
    }
    return [];
}




function mapStateToProps (state, ownProps) {
    
    let pageNo = ownProps.match.params.pageNo || 1;
    let categories = getNumberPage(state.categories, pageNo);
    return {
    
         //category states
         categories:categories,
          pages: Math.ceil(state.categories.length / 5), // Determine number of pages for pagination
          currentPage: pageNo,
        //  categories: state.categories,
          editCategories: state.editCategories,


    }
}
function mapDispatchToProps (dispatch) {
    //dispatch actions by using imported action methods
    return {

        //dispatch actions for categories
        fetchCategories: () => { dispatch(actFetchCategoriesRequest()) },

        deleteCategory: (_id) => {dispatch(actDeleteCategoryRequest(_id))},
        getCategory: (_id) => { dispatch(actGetCategoryRequest(_id));},
       
       
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Admincategorylistpage);

