import '../Cart/Cart.css';
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { DeliveryShippingContext } from "../../contexts/DeliveryShippingContext"


export const Order = () => {
    const cartContext = useContext(CartContext)
    const deliveryShipping = useContext(DeliveryShippingContext)

    console.log(deliveryShipping)
    return (
        <div>
            <h3 className="text-success">Merci pour votre commande !</h3>
            <table className="table table-success mb-5 table-cart">
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Nom de produit</th>
                        <th>Description</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    { cartContext.cart.map((cart , index) => {
                        return (
                            <tr key={ index } id={ cart.id }>
                                <td>{ cart.id }</td>
                                <td>{ cart.title }</td>
                                <td>{ cart.description }</td>
                                <td>{ cart.price } €</td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
            <hr />
            <h2>Détail livraison</h2>
            <p>Nom : { deliveryShipping.delivery.name }</p>
            <p>Email : { deliveryShipping.delivery.email }</p>
            <p>Numéro de téléphone : { deliveryShipping.delivery.phone }</p>
            <p>Adresse : { deliveryShipping.delivery.address }</p>
            <p>Commentaire : { deliveryShipping.delivery.comment }</p>
        </div>
    )
}