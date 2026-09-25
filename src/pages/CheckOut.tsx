import { useState } from "react";
import CustomerForm from "../components/checkout/CustomerForm";
import PaymentMethod from "../components/checkout/PaymentMethod";
import OrderReview from "../components/checkout/OrderReview";

export default function Checkout() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [payment, setPayment] = useState("UPI");

    // Later this comes from Cart API
    const subtotal = 500;

    return(
        <main className="checkout-page">
            <h1>Checkout</h1>

            <div className="checkout-layout">
                <div className="left">
                    <CustomerForm
                        name={name}
                        phone={phone}
                        address={address}
                        setName={setName}
                        setPhone={setPhone}
                        setAddress={setAddress}
                    />

                    <PaymentMethod
                        payment={payment}
                        setPayment={setPayment} 
                    />
                </div>

                <OrderReview subtotal = {subtotal} />
            </div>
        </main>
    );
}