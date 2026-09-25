type Props = {
    name: string;
    phone: string;
    address: string;
    setName: (value: string) => void;
    setPhone: (value: string) => void;
    setAddress: (value: string) => void;
};

export default function CustomerForm({
    name,
    phone,
    address,
    setName,
    setPhone,
    setAddress,
}: Props) {
    return(
        <div className="checkout-card">
            <h2>Delivery Details</h2>

            <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />

            <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)} 
            />
        </div>
    );
}