import React from 'react'
import bannerPic from "../../../assets/Learning Online.svg";
export default function Banner() {
    return (
           <div className="banner">
            <div className="left-banner">
                <h1>Product Design Course</h1>
                <h2>Product Factory</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam rerum maxime veritatis soluta laudantium quae, dolor cumque voluptas culpa quidem voluptates commodi debitis alias tempore quas similique, eaque consectetur! Numquam.</p>
                <button>Start Register</button>
            </div>
            <div className="right-banner">
                <img src={bannerPic} alt="banner"/>
            </div>
        </div>
    )
}
