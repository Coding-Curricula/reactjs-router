import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add({ handlerAddProduct }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [discount, setDiscount] = useState('')
  const navigate = useNavigate()

  const handleSubmitForm = (e) => {
    e.preventDefault()
    const product = {
      id: Math.random().toString(18).substring(2, 10),
      name,
      price,
      quantity,
      discount
    }
    handlerAddProduct(product)
    navigate('/view')
  }

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor='price'>Price: </label>
        <input type='number' id='price' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <br />
        <label htmlFor='quantity'>Quantity: </label>
        <input type='number' id='quantity' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <br />
        <label htmlFor='discount'>Discount: </label>
        <input type='number' id='discount' name='discount' value={discount} onChange={(e) => setDiscount(e.target.value)} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
