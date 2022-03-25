import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <nav className="navbar navbar-expand bg-info navbar-dark px-4 mb-5">
            <Link to="/" className="navbar-brand">
                Mini E-Commerce
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Catalogue
                    </Link>
                </li>
                <li className="nav-item my-2 my-lg-0">
                    <Link to="cart" className="nav-link">
                        Panier
                    </Link>
                </li>
            </ul>
        </nav>
    )
}