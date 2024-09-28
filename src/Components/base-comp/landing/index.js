import { useState, useEffect } from "react";
import React from 'react'
import Navbar from '../navigation/Navbar'
import Banner from '../banner'
import ProductItem from "../../customer/deal-item";
import axios from "axios";

const Landing = () => {
    const [allProductlist, setAllProductList] = useState([]);

    const fetchProducts = async () => {  //This asynchronous function fetches product data from a backend API
        try {
            const response = await axios.get('https://happy-bags.onrender.com/customer/getAllProduct')
            console.log("API Response:", response.data)  // Ensure this is an array, or adjust based on the structure
            return response.data;

        } catch (error) {
            console.log("Error fetchning products", error);
            return [];  // Return an empty array on error
        }
    }

    useEffect(() => {   // Defines an asynchronous function to load products

        const loadProducts = async () => {
            const products = await fetchProducts();

            if (Array.isArray(products)) {   // Check if the "products" variable is an array
                setAllProductList(products);  // Set all products

            } else {
                console.error("Products is not an array:", products);
                setAllProductList([]); // Set 'allProductlist' to an empty array as well // Handle cases where products isn't an array
            }
        };
        loadProducts();
    }, []);
    const onAddClicked = () => {
        alert("Please login to proceed")

    }
    return (
        // <div>
        //     <div className="header">
        //     <Navbar count="0" />
        //     <Banner />
        //     </div>
        //     <div className="product-selection">
        //         <ul className="product-row-list">
        //             {allProductlist.map((product) => (
        //                 <ProductItem
        //                     product={product}
        //                     key={product._id}
        //                     onAddClicked={onAddClicked}
        //                 />
        //             ))}
        //         </ul>
        //     </div>
        // </div>
        <>
        <div className="header">
        <Navbar count="0" />
        <Banner />
        </div>
        <div className="container mt-4"> {/* Bootstrap container */}
            <h2 className="deal text-center mb-4">All Products</h2>
            <div className="row"> {/* Bootstrap row */}
                {allProductlist.map((product) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product._id}> {/* Adjusted column classes */}
                        <ProductItem
                            product={product}
                            onAddClicked={() => onAddClicked(product._id)}  // Pass the product ID when clicked
                        />
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default Landing
