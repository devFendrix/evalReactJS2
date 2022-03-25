import './Cart.css';
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { FormDeliveryShipping } from "../Form/FormDeliveryShipping"


export const Cart = () => {
    const cartContext = useContext(CartContext)

    function deleteItem(id) {
        cartContext.setCart(cartContext.cart.filter((item) => item.id !== id))
    }
    
    return (
        <div>
            <h1 className="text-info mb-5">Contenu de votre panier</h1>
            <table className="table table-light mb-5 table-cart">
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Nom de produit</th>
                        <th>Description</th>
                        <th>Prix</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { cartContext.cart.map((cart , index) => {
                        return (
                            <tr key={index} id={cart.id}>
                                <td>{cart.id}</td>
                                <td>{cart.title}</td>
                                <td>{cart.description}</td>
                                <td>{cart.price} €</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteItem(cart.id)}>supprimer</button>
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
            <hr />
            <FormDeliveryShipping />
        </div>
    )
}

