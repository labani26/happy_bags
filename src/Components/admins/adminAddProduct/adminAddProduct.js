import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminAddProduct = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [material, setMaterial] = useState('');
    const [number_of_pocket , setNumberOfPocket] = useState('');
    const [country_of_origin, setCountryOfOrigin] = useState('');
    const [count, setCount] = useState('');
    const [image, setImage] = useState('');


    const navigate = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://localhost:4000/admin/addProduct',{
                name, description, category, price, image, material, number_of_pocket, country_of_origin, count 
            });

            console.log('Admin Add Product:', response);
            alert('Admin Add Product.');

            navigate('/');

        } catch (error) {
            console.error('Admin Add Product Error:', error);
            alert('Admin Add Product failed, please try again.');
        }
    };

    return (
        <div className='container mb-5'>
            
            <h2 className='my-4'><u>Admin Add Product</u></h2>
            
            <form className="row g-3" onSubmit={onSubmit}>

                <div className="col-md-6">
                    <label htmlFor="productImage" className="form-label">Product Image URL</label>
                    <input type="text" 
                           className="form-control" 
                           id="productImage" 
                           placeholder="Enter image URL" 
                           name="image"
                           value={image}
                           onChange={(e) => setImage(e.target.value)}
                           required
                      />
                    </div>

                <div className="col-md-6">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" 
                           className="form-control" 
                           id="productName" 
                           placeholder="Product name" 
                           name="name" 
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="productCategory" className="form-label">Category</label>
                    <input type="text" 
                           className="form-control" 
                           id="productCategory"
                           placeholder="Category"
                           name='category'
                           value={category}
                           onChange={(e)=> setCategory(e.target.value)}
                           required
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <textarea className="form-control" 
                              id="productDescription" 
                              placeholder="Description" 
                              rows="3"
                              name='description'
                              value={description}
                              onChange={(e)=> setDescription(e.target.value)}
                              required
                    ></textarea>
                </div>
                <div className="col-md-6">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="text" 
                           className="form-control" 
                           id="productPrice"
                           placeholder="Price"
                           name='price'
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                           required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="productMaterial" className="form-label">Material</label>
                    <input type="text" 
                           className="form-control" 
                           id="productMaterial"
                           placeholder='Material'
                           name='material'
                           value={material}
                           onChange={(e)=> setMaterial(e.target.value)} 
                           required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="numberOfPocket" className="form-label">Number of Pockets</label>
                    <input type="text" 
                           className="form-control" 
                           id="numberOfPocket"
                           placeholder='Number of Pockets'
                           name='number_of_pocket'
                           value={number_of_pocket}
                           onChange={(e)=> setNumberOfPocket(e.target.value)}
                           required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="countryOfOrigin" className="form-label">Country of Origin</label>
                    <input type="text" 
                           className="form-control" 
                           id="countryOfOrigin"
                           placeholder='Country of Origin'
                           name='country_of_origin'
                           value={country_of_origin} 
                           onChange={(e)=> setCountryOfOrigin(e.target.value)}
                           required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="numberOfBags" className="form-label">Number of Bags</label>
                    <input type="text" 
                           className="form-control" 
                           id="numberOfBags"
                           placeholder='Number of Bags' 
                           name='count'
                           value={count}
                           onChange={(e)=> setCount(e.target.value)}
                           required
                    />
                </div>
                <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AdminAddProduct;

