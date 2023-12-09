import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit({ list, handlerEditProduct }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = list.find((item) => item.id === id);

    const [name, setName] = useState(product.name);
    const [quantity, setQuantity] = useState(product.quantity);
    const [price, setPrice] = useState(product.price);
    const [discount, setDiscount] = useState(product.discount);

/* The `useEffect` hook is used to perform side effects in functional components. In this case, the
`useEffect` hook is used to update the state variables `name`, `quantity`, `price`, and `discount`
whenever the `product` variable changes. */
    useEffect(() => {
        if (product) {
            setName(product.name);
            setQuantity(product.quantity);
            setPrice(product.price);
            setDiscount(product.discount);
        }
    }, [product]);

    const submitForm = (e) => {
        e.preventDefault();
        handlerEditProduct({ id, name, quantity, price, discount });
        navigate('/view');
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={submitForm}>
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
