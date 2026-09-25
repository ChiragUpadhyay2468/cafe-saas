type SummaryProps = {
    subtotal: number;
};

export default function OrderSummary ({
    subtotal,
}: SummaryProps) {
    const delivery = 40;
    const gst = subtotal * 0.05;
    const total = subtotal + delivery + gst;

    return(
        <div className="summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
                <span>Subtotal</span>
                <span>&#8377;{subtotal}</span>
            </div>

            <div className="summary-row">
                <span>Delivery</span>
                <span>&#8377;{delivery}</span>
            </div>

            <div className="summary-row">
                <span>GST</span>
                <span>&#8377;{gst.toFixed(0)}</span>
            </div>

            <hr />

            <div className="summary-row total">
                <span>Total</span>
                <span>&#8377;{total.toFixed(0)}</span>
            </div>

            <button type="button" className="checkout-btn">
                Proceed to Checkout
            </button>
        </div>
    );
}