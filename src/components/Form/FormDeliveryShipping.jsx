import './FormDeliveryShipping.css';
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DeliveryShippingContext } from "../../contexts/DeliveryShippingContext"


export const FormDeliveryShipping = () => {

    const deliveryShippingContext = useContext(DeliveryShippingContext)
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        comment: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e) {
        const {name, email, phone, address, comment} = form
        e.preventDefault()

        if( name.length > 0 && email.length > 0 && phone.length > 0 && address.length > 0 ){
            deliveryShippingContext.setDelivery({...form})
            navigate("/order")
        } else {
            alert("Merci de remplir les champs d'information de livraison.")
        }
    }

    return (
        <div className="form-delivery-shipping">
            <h2 className="text-info">Information de livraison</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control mt-3" name="name" placeholder="Nom" value={ form.name } onChange={ handleChange } />
                <input type="text" className="form-control mt-3" name="email" placeholder="Email" value={ form.email } onChange={ handleChange } />
                <input type="text" className="form-control mt-3" name="phone" placeholder="Numéro de téléphone" value={ form.phone } onChange={ handleChange } />
                <input type="text" className="form-control mt-3" name="address" placeholder="Adresse" value={ form.address } onChange={ handleChange } />
                <textarea type="text" className="form-control mt-3" name="comment" placeholder="Commentaire" value={ form.comment } onChange={ handleChange } />
                <input type="submit" className="btn btn-primary mt-3" value="Valider le paiement" />
            </form>
        </div>
    )
}