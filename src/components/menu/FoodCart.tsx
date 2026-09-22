type FoodProps = {
    name: string;
    price: number;
    image: string;
};

export default function FoodCard({
    name,
    price,
    image
}: FoodProps) {
    return(

        <div className="food-card">
            <img src={image} alt={name} />

            <div className="food-info">
                <h3>{name}</h3>
                <p> &#8377; {price}</p>

                <button>Add to Cart</button>
            </div>
        </div>
    );
}