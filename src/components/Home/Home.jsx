import './Home.css';
import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext';

export const Home = () => {
    const { cart } = useContext(CartContext)

    const [products, setProducts] = useState([
        { id: 1, title: "Obi-wan Kenobi", description: "Figurine d'Obi-wan Kenobi de 30 cm", price: 45},
        { id: 2, title: "Anakin Skywalker", description: "Figurine d'Anakin Skywalker Kenobi de 30 cm", price: 115},
        { id: 3, title: "Mace Windu", description: "Figurine de Mace Windu de 30 cm", price: 35},
        { id: 4, title: "Maître Yoda", description: "Figurine de Maître Yoda de 30 cm", price: 75},
        { id: 5, title: "Qui-Gon Jinn", description: "Figurine de Qui-Gon Jinn de 30 cm", price: 30}
    ])

    function addCartItem(product) {
        cart.push(product)
    }

    return (
        <div className='catalog'>
            <h1 className='catalog-title'>Bienvenue sur notre E-commerce</h1>
            { products.map((product, index) => {
                return (
                    <article  key={index} className="col-4 cart-item">
                        <h4 className='cart-item-title'>{product.title}</h4>
                        <p className='cart-item-description'>{product.description}</p>
                        <div className='cart-item-add'>
                            <button className="btn btn-info" onClick={() => addCartItem(product)}>Ajouter au panier</button>
                            <span>{product.price} €</span>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}