import { useParams, useNavigate } from 'react-router-dom'

import styles from './Item.module.css'

export default function Item({ list, handlerDelete }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = list.find(item => item.id === id);
    return (
        <div className={styles.container}>
            <h3>Product ID: {id}</h3>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Discount: {product.discount}</p>
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>

            <button
                onClick={() => {
                    handlerDelete(id);
                    navigate('/view');
                }}
            >Delete</button>

        </div>
    )
}
