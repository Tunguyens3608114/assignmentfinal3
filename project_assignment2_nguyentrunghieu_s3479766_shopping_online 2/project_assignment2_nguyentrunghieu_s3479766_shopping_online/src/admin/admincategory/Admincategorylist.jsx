import React from 'react';

import Categorypaging from '../../reducers/paging/Categorypaging';
import {Link} from 'react-router-dom';



const Admincategorylist  = ({categories,pages,currentPage, deleteCategory , getCategory}) =>{
  
    
        return (
                        <div className='table table-responsive'>
                            <table className='table table-borderd table-hover'>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th className='text-center'>ID</th>
                                        <th className='text-center'>Name</th>
                                        <th className='text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {categories.map((category, index) =>
                                    <tr className='text-center' key={index}>
                                            <td>{category._id}</td>
                                            <td>{category.name}</td>
                                            
                                        <td>
                                            <Link 
                                                to = "/Adminhome"
                                                className='btn btn-danger'
                                                onClick={() =>deleteCategory(category._id)}>
                                                
                                                <span className='fa fa-trash-o'></span>
                                                 Delete
                                            </Link>
                                            &nbsp;
                                            <Link 
                                                to={`/Admincategoryactionform/${category._id}/edit`} 
                                                className='btn btn-info'
                                                 onClick={() =>getCategory(category._id)}>
                                                <span className='fa fa-pencil-square-o'></span> Edit
                                            </Link>
                                        </td>
                                     </tr>
                                    )
                                }
                                </tbody>
                            
                            </table>
                                {pages> 1 && <Categorypaging pages={pages} currentPage={currentPage}/>
                            }
                        </div>
        );
    }
    

export default Admincategorylist;