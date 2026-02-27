import React, { useState } from 'react'
import "./productCard.css"

const ProductCard = ({ title, price, image }) => {
    const [liked, setLiked] = useState(false);
    return (
        <section className="product-card">
            <button
                className={`wishlist-btn ${liked ? "active" : ""}`}
                onClick={() => setLiked(!liked)}
            >
                ♥
            </button>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>₹ {price}/-</p>
            <button className="add-cart-btn">Add to Cart</button>
        </section>
    )
}

export default ProductCard