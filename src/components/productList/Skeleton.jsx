import React from 'react'
import "./productCard.css"

const Skeleton = () => {
    return (

        <div className="product-card skeleton">
            <div className="skeleton-img"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
            <div className="skeleton-btn"></div>
        </div>
    )
}

export default Skeleton