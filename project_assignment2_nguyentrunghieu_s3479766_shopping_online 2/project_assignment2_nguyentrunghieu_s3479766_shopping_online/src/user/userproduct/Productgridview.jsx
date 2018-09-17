import React from 'react';
import {Link} from 'react-router-dom';


class Productgridview extends React.Component {
  
  
  render(){
    return (
        <div>
            <div className='row'>
           
                {this.props.showItems.map((product, index) =>
                    <div className='col-sm-4' key={index}>
                        <div className='card card-cascade product-card'>
                            <div className='view hm-white-slight waves-light'>
                                <img className='img1 img-responsive imd-fluid' 
                                     src={product.imageUrl} 
                                     alt={product.name} />
                        
                            </div>
                            <div className='card-body'>
                                
                                <hr />
                                <p className='card-text'>{product.name}</p>
                                <p className='card-text'>${product.price}</p>
                                <p className='card-text'><b>Brand:</b> {product.brand}</p>
                                <p className='card-text'><b>Producer:</b> {product.producer}</p>
                                
                            </div>
                            <div>
                            <Link 
                                 to={`/Productdetail/${product._id}/view`} 
                                 className='btn btn-info'
                                 onClick={() =>this.getProduct(product._id)}>
                                <span className='fa fa-pencil-square-o'></span> view
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

}


export default (Productgridview);

