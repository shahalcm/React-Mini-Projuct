import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import "./productCard.css"
import Skeleton from './Skeleton'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [tryagain, setTryagain] = useState(false)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.escuelajs.co/api/v1/products")

        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }

        const data = await response.json()
        setProducts(data)

      } catch (err) {
        setError(err.message)

      } finally {
        setTryagain(false)
        // setTimeout(()=>{
        //   setLoading(false)
        // },2000)
        setLoading(false)
        
      }
    }

    console.log("fetch worked");

    fetchProducts()
  }, [tryagain])

  if (loading) {
    return (
      <section className="product-grid">
        {Array(8)
          .fill()
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </section>
    );
  }
  if (error) {
    return (
      <div className="error-container">
        <h2>⚠ {error}</h2>
        <button onClick={() => setTryagain(true)}>tryagain</button>
      </div>

    )
  }

  return (
    <section className='product-grid'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.images[0]}
        />
      ))}
    </section>
  )
}

export default ProductList