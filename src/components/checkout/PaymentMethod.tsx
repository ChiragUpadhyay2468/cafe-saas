type Props = {
    payment: string;
    setPayment: (value: string) => void;
};

export default function PaymentMethod({
    payment,
    setPayment,
}: Props) {
    return (
        <div className="checkout-card">
            <h2>Payment Method</h2>

            <label>
                <input
                    type="radio"
                    checked={payment === "UPI"}
                    onChange={() => setPayment("UPI")} 
                />
                UPI
            </label>

            <label>
                <input
                    type="radio"
                    checked={payment === "Card"}
                    onChange={() => setPayment("Card")} 
                />
                Credit / Debit Card
            </label>

            <label>
                <input
                    type="radio"
                    checked={payment === "COD"}
                    onChange={() => setPayment("COD")} 
                />
                Cash on Delivery
            </label>
        </div>
    );
}