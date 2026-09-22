import FoodCard from "../menu/FoodCart";
import burgerImage from "../../assets/images/chicken-burgers-index-667b185b5f528.avif";
import cappuccinoImage from "../../assets/images/images (1).jpg";
import margheritapizzaImage from "../../assets/images/images.jpg"

export default function FeaturedMenu() {
    const items = [
        {
            name: "Cappuccino",
            price: 180,
            image:cappuccinoImage , alt:"coffee",
        },
        {
            name: "Margherita Pizza",
            price: 320,
            image:margheritapizzaImage , alt:"Margherita Pizza",   
        },
        {
            name: "Chicken Burger",
            price: 250,
            image:burgerImage  , alt:"Chicken Burger",
        },
    ];
    return(
        <section className="featured">
            <h2>Popular This Week</h2>
            <p>Mosst loved dishes by our customers</p>

            <div className="menu-grid">
                {items.map((item) => (
                    <FoodCard
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </section>

    )
}