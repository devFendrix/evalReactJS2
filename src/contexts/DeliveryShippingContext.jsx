import { createContext, useState } from "react";


export const DeliveryShippingContext = createContext();

export const DeliveryShippingProvider = (props) => {
    const [delivery, setDelivery] = useState([])

    return (
        <DeliveryShippingContext.Provider value={{ delivery, setDelivery }}>
            {props.children}
        </DeliveryShippingContext.Provider>
    )
}