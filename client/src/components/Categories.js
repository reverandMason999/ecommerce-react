import React from "react";
import './Categories.css';


const Categories = () =>{
    return(
        <div className="categoryboxes">
            <div className="categorybox-1">
            <h3>Furniture</h3>   
            </div>
            <div className="categorybox-2">
            <h3>Tech</h3>   
            </div>
            <div className="categorybox-3">
            <h3>Clothing</h3>   
            </div>
            <div className="categorybox-4">
            <h3>Jewelry</h3>   
            </div>
        </div>
    )
}

export default Categories;