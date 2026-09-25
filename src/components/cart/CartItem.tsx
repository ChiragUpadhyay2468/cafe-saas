type CartItemProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
};

export default function CartItem({
    id,
    name,
    price,
    image,
    quantity,
    onIncrease,
    onDecrease,
}: CartItemProps) {
    return(
        <div className="cart-item">
            <img src={image} alt={name} className="cart-img" />

            <div className="cart-info">
                <h3>{name}</h3>
                <p>&#8377;{price}</p>
            </div>

            <div className="quantity">
                <button type="button" onClick={() => onDecrease(id)}>-</button>
                <span>{quantity}</span>
                <button type="button" onClick={() => onIncrease(id)}>+</button>
            </div>

            <h4>&#8377;{price * quantity}</h4>
        </div>
    );
}