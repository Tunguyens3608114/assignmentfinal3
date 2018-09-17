import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
 actAddCategoryRequest, actGetCategoryRequest, actUpdateCategoryRequest,
  } from './../../action/categoriesaction';

 class Admincategoryactionform extends React.Component {
    constructor() {
        super();
       
        this.state = {
            id :'',
            name: '',
            nameError:'',
           
           
        };
    }
  
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.editCategories){
            var {editCategories} = nextProps;
           
            this.setState({
                
                id : editCategories._id,
                
                name : editCategories.name  
             
 
            });
        }
    }

    

    handleChange = (e)=> {
      
        let change = {};
        change[e.target.name] =e.target.value;
        this.setState(change);
    }


validation = () =>{
    let isError = false;
    const errors = {
        nameError:'',
        idError:''
    };
    if (this.state.name === ''){
        isError = true;
        errors.nameError = "Name of category is not null";
    }

        this.setState({
             ...this.state,
             ...errors
        });
   
    return isError
}
    handleSave = (e) => {
        e.preventDefault();
        const err = this.validation();
       if (!err)
       {
        var {history} = this.props;
    
       
        if(this.state._id === undefined || this.state._id === null) {

         this.props.addCategory(this.state);
          history.goBack();

        }
        else{
           
         
            this.props.updateCategory(this.state);
            history.goBack();
           
        }

       }  
      
    }

    render() {
       var { name, id } = this.state;
        return (
                <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                    <form>
                        <div className='form-group'>
                            <label>ID</label>
                            <input
                             type='text'
                              name ='id'
                              disabled
                              className='form-control' 
                              placeholder='Category ID'
                              value={id} onChange={this.handleChange.bind(this)} 
                              
                              /> 
                              <div className="errorMsg">{this.state.idError}</div>  
                        </div>

                        <div className='form-group'>
                            <label>Category Name</label>
                            <input
                             type='text'
                             name='name'
                             className='form-control'
                             placeholder='Category Name'
                             value={name}
                             onChange={this.handleChange.bind(this)} 
                             />
                             <div className="errorMsg">{this.state.nameError}</div>
                        </div>


                        <br />

                        <button className='btn btn-primary inline mr-1'
                            onClick={this.handleSave.bind(this)}>
                            Save
                        </button>
                      

                        <Link
                        to = "/Admincategorylistpage"
                         className='btn btn-primary mr-1'>
                            Close
                        </Link>

                    </form>
                </div>
           
        );
    }
}
const mapStateToProps = (state) => {
    return {
  

         //category states
        categories: state.categories,
        editCategories: state.editCategories,

      
    }
}

const mapDispatchToProps = (dispatch) => {
    //dispatch actions by using imported action methods
    return {
     
      
        addCategory: (category) => { dispatch(actAddCategoryRequest(category)) },
   
        getCategory: (_id) => { dispatch(actGetCategoryRequest(_id));},
        updateCategory: (category) => { dispatch(actUpdateCategoryRequest(category));},

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admincategoryactionform);
