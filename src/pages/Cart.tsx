import { useState } from "react";
import OrderSummary from "../components/cart/OrderSummary";
import coffee from "../assets/images/images (1).jpg"
import pizza from "../assets/images/images.jpg"
import CartItem from "../components/cart/CartItem";

interface CartItemType{
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export default function Cart() {
    const [cart, setCart] = useState<CartItemType[]>([
        {
            id: 1,
            name: "Cappuccino",
            price: 180,
            image: coffee,
            quantity: 2,
        },
         {
            id: 2,
            name: "Margherita Pizza",
            price: 220,
            image: pizza,
            quantity: 1,
         },
    ]);

    function increase(id: number) {
        setCart((prev) => 
        prev.map((item) =>
        item.id === id
            ? {...item, quantity: item.quantity + 1 }
            : item 
    )
);
} 

function decrease(id: number) {
        setCart((prev) => {
            const item = prev.find((entry) => entry.id === id);

            if (!item) return prev;

            if (item.quantity <= 1) {
                return prev.filter((entry) => entry.id !== id);
            }

            return prev.map((entry) =>
                entry.id === id ? { ...entry, quantity: entry.quantity - 1 } : entry
            );
        });
    }

const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

return(
    <main className="cart-page">
        <h1>Your Cart</h1>

        <div className="cart-layout">
            <div className="items">
                {cart.map((item) => (
                    <CartItem
                    key={item.id}
                    {...item}
                    onIncrease={increase}
                    onDecrease={decrease}
                    />                    
                ))}
            </div>

            <OrderSummary subtotal={subtotal} />
        </div>
    </main>
);
}