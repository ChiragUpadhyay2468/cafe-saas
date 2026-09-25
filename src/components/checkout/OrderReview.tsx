type Props = {
    subtotal: number;
};

export default function OrderReview({ subtotal }: Props) {
    const delivery = 40;
    const gst = subtotal * 0.05;
    const total = subtotal + delivery + gst;

    return(
        <div className="checkout-card">
            <h2>Order Review</h2>

            <div className="bill-row">
                <span>Subtotal</span>
                <span>&#8377;{subtotal}</span>
            </div>

             <div className="bill-row">
                <span>Delivery</span>
                <span>&#8377;{delivery}</span>
            </div>

             <div className="bill-row">
                <span>GST</span>
                <span>&#8377;{gst.toFixed(0)}</span>
            </div>

            <hr />

             <div className="bill-row">
                <span>Subtotal</span>
                <span>&#8377;{total.toFixed(0)}</span>
            </div>

            <button className="place-holder">
                Place Order
            </button>
        </div>
    );
}