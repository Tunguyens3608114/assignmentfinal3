import React from 'react';
import {Link} from 'react-router-dom';

 
class Productlistview extends React.Component {

    render(){
     return (
        <div className='table table-responsive col-sm-9'>
            <table className='table'>
                <thead className='thead-light text-center'>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.showItems.map((product, index) =>
                        <tr className='product-table' key={index}>
                            <td>
                                <img className='img1 img-responsive' 
                                 src={product.imageUrl} 
                                 alt={product.name} />
                            </td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.description}
                                <br/>
                                 <b>Brand:</b> 
                                 {product.brand} 
                                <br/> 
                                 <b>Producer:</b> 
                                     {product.producer}
                                <br/>
                            </td>
                            <td>
                                <br />
                                <Link 
                                 to={`/productdetail/${product._id}/view`} 
                                 className='btn btn-info'
                                onClick={() =>this.getproduct(product._id)}>
                                <span className='fa fa-pencil-square-o'></span> view
                                </Link>
                              
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
}

export default (Productlistview);

