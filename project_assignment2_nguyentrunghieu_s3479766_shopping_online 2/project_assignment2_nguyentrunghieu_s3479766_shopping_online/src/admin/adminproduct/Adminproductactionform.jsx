import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
 actUpdateProductRequest, actAddProductRequest, actGetProductRequest
} from './../../action/productsAction';



class Adminproductactionform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            description: '',
            brand: '',
            producer: '',
            imageUrl: '',
            productType: '',
            
          
            nameError:'',
            priceError:'',
            descriptionError:'',
            brandError:'',
            producerError:'',
            imageUrlError:'',
          
         
        }
    }
 


componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.editProducts){
        var {editProducts} = nextProps;
       
        this.setState({
            
            id : editProducts._id,
            name : editProducts.name , 
            price: editProducts.price,
            description: editProducts.description,
            brand:  editProducts.brand,
            producer: editProducts.producer,
            imageUrl: editProducts.imageUrl,
            productType: editProducts.productType
         

        });
    }
}


handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
}

clear(){
    this.setState({
        id: '',
        name: '',
        price: '',
        description: '',
        brand: '',
        producer: '',
        imageUrl: '',
    })
}
validate = () =>{
    let isError = false;
    const errors = {
        nameError:'',
        priceError:'',
        descriptionError:'',
        brandError:'',
        producerError:'',
        imageUrlError:'',
        productTypeError: '',
        
      
    };
    if (this.state.name === ''){
        isError = true;
        errors.nameError = "Name of product is not null";
    }
    if (this.state.price === ''){
        isError = true;
        errors.priceError = "Price is not null";
    }
    if (this.state.description === ''){
        isError = true;
        errors.descriptionError = "Description is not null";
    }
   
    if (this.state.brand === ''){
        isError = true;
        errors.brandError = "Brand is not null";
    }
   
    if (this.state.producer === ''){
        isError = true;
        errors.producerError = "Producer is not null";
    }
   
    if (this.state.imageUrl === ''){
        isError = true;
        errors.imageUrlError = "ImageUrl is not null";
    }

        this.setState({
             ...this.state,
             ...errors
        });
   
    return isError
}

    handleSave = (e) => {
        e.preventDefault();
        const err = this.validate();
        if (!err && this.state.productType !== 'Choose here')
        {
            var {history} = this.props
            if(this.state._id === undefined || this.state._id === null) {
            

                console.log('fail')
                console.log(this.state._id)
                this.props.addProduct(this.state);
                history.goBack();
            
            }
            else {
                console.log('success')
                console.log(this.state._id)
                this.props.updateProduct(this.state);
                history.goBack();
            
            }
        // history.goBack();
        }
}

    reset(e){
        e.preventDefault();
        this.setState({
        name: '',
        price: '',
        description: '',
        brand: '',
        producer: '',
        imageUrl: '',
        productType: '',
        })  
    }

    render() {
        var {id, name,price,description,brand, producer, imageUrl, productType} = this.state;
        return (
            <div className='card'>
                
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <div className='form-row'>
                                <div className='col'>
                                    <label>ID</label>
                                    <input
                                     type='text' 
                                     name='id' 
                                     disabled 
                                     className='form-control' 
                                     placeholder='Product ID'
                                    
                                     value={id} onChange={this.handleChange.bind(this)}
                                    
                                      />
                                </div>

                                <div className='col'>
                                    <label>Product Name</label>
                                    <input
                                     type='text' 
                                     name='name' 
                                     className='form-control' 
                                     placeholder='Product Name'
                                     value={name} onChange={this.handleChange.bind(this)} 
                                     />
                                     <div className="errorMsg">{this.state.nameError}</div>
                                </div>
                            </div>
                        </div>

                        <div className='form-group'>
                            <label>Price</label>
                            <input
                             type='text'
                              name='price' 
                              className='form-control'
                              placeholder='Product Price'
                              value={price} onChange={this.handleChange.bind(this)} />
                              <div className="errorMsg">{this.state.priceError}</div>
                        </div>

                        <div className='form-group'>
                            <label>Description:</label>
                            <textarea 
                            className='form-control'
                            name='description' rows='3' col='2'
                            value={description} onChange={this.handleChange.bind(this)}>
                            </textarea>
                            <div className="errorMsg">{this.state.descriptionError}</div>
                        </div>
                        <div className='form-group'>
                            <div className='form-row'>
                                <div className='col'>
                                    <label>Brand</label>
                                    <input 
                                        type='text' 
                                        name='brand' 
                                        className='form-control' 
                                        placeholder='Product Brand'
                                        value={brand} onChange={this.handleChange.bind(this)} />
                                        <div className="errorMsg">{this.state.brandError}</div>
                                </div>
                                <div className='col'>
                                    <label>Producer</label>
                                    <input 
                                    type='text' 
                                    name='producer' 
                                    className='form-control' 
                                    placeholder='Product Producer'
                                    value={producer} onChange={this.handleChange.bind(this)} />
                                    <div className="errorMsg">{this.state.producerError}</div>
                                </div>
                            </div>
                            
                        </div>

                        <div className='form-group'>
                            <label>Image URL</label>
                            <input 
                            type='text' 
                            name='imageUrl' 
                            className='form-control' 
                            placeholder='Image URL'
                            value={imageUrl} onChange={this.handleChange.bind(this)} />
                            <div className="errorMsg">{this.state.imageUrlError}</div>
                        </div>
                       
                           <div className="form-group">
                            <label>Select Category:</label>
                            <select 
                            className="form-control" 
                            name='productType' onChange={this.handleChange.bind(this)}>
                            <option defaultValue selected>Choose here</option>
                                
                            {this.props.categories.map((c, index) => 
                                <option key={index} selected={productType === c._id} value={c._id}>
                                    {c.name}
                                </option>)}
                            </select>
                            
                        </div>
                        <br />
                        <button 
                            className='btn btn-primary inline mr-1'
                            onClick={this.handleSave.bind(this)}>
                                Save
                        </button>
                        <button 
                            className='btn btn-primary inline mr-1'
                            onClick={this.reset.bind(this)}>
                                Reset
                        </button>
                        <Link
                            to = "/Adminproductlistpage"
                            className='btn btn-primary mr-1'>
                            Close
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //product states
        products: state.products,
        editProducts: state.editProducts,

         //category states
        categories: state.categories,
   

      
    };
};

const mapDispatchToProps = (dispatch) => {
    //dispatch actions by using imported action methods
    return {
        //dispatch actions for products
      
        addProduct: (product) => { dispatch(actAddProductRequest(product)) },
       
       
        getProduct: (_id) => { dispatch(actGetProductRequest(_id)); },
        updateProduct: (product) => { dispatch(actUpdateProductRequest(product)); },
 
        

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Adminproductactionform);