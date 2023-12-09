import { Link, Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>
                Shopping Cart
            </h1>

            <nav>
                <Link to='/view'>View Product Details</Link>
                <br />
                <Link to='/add'>Add Product</Link>
            </nav>

            <Outlet />

        </div>
    )
}
