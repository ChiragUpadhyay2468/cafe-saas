import { useState } from "react";
import cappuccinoImage from "../assets/images/images (1).jpg";
import lateeImage from "../assets/images/images (2).jpg";
import margheritapizzaImage from "../assets/images/images.jpg";
import chocolatecakeImage from "../assets/images/DoubleDhocolateLayerCake_RECIPE_012622_26397.webp";
import coldcoffeeImage from "../assets/images/images (3).jpg";

type Category = "All" | "Coffee" | "Pizza" | "Dessert" | "Drinks";

interface MenuItem {
    id: number;
    name: string;
    category: Category;
    price: number;
    image: string;
}

const menuData: MenuItem[] = [
    {
        id: 1,
        name: "Cappuccino",
        category: "Coffee",
        price: 180,
        image: cappuccinoImage,
    },
    {
        id: 2,
        name: "Latte",
        category: "Coffee",
        price: 200,
        image: lateeImage,
    },
    {
        id: 3,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 220,
        image: margheritapizzaImage,
    },
    {
        id: 4,
        name: "Chocolate Cake",
        category: "Dessert",
        price: 220,
        image: chocolatecakeImage,
    },
    {
        id: 5,
        name: "Cold Coffee",
        category: "Drinks",
        price: 170,
        image: coldcoffeeImage,
    },
];

export default function MenuPage() {
    const [category , setCategory] = useState<Category>("All");
    const [search, setSearch] = useState("");

    const filteredItems = menuData.filter((item) => {
        const matchCategory =
        category === "All" || item.category === category;

        const matchSearch = item.name 
        .toLowerCase()
        .includes(search.toLowerCase());

        return matchCategory && matchSearch;
    });

    return(
        <main className="menu-page">

            <section className="menu-hero">
                <p className="menu-kicker">Cafe favorites</p>
                <h1>Made for slow mornings.</h1>
                <p>Fresh coffee, comforting food, and a little something sweet.</p>
            </section>

            <div className="menu-controls">
                <div className="search-field">
                    <span aria-hidden="true">⌕</span>
                    <input
                        type="search"
                        aria-label="Search the menu"
                        placeholder="Search the menu"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="categories">
                    {["All", "Coffee", "Pizza", "Dessert", "Drinks"].map((cat) => (
                        <button
                            type="button"
                            key={cat}
                            className={category === cat ? "active" : ""}
                            onClick={() => setCategory(cat as Category)} 
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="menu-summary">
                <h2>{category === "All" ? "All favorites" : category}</h2>
                <p>{filteredItems.length} {filteredItems.length === 1 ? "item" : "items"} to choose from</p>
            </div>

            <section className="menu-grid">
                {filteredItems.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.image} alt={item.name}/>

                        <div className="card-body">
                            <h3>{item.name}</h3>
                            <p className="item-category">{item.category}</p>

                            <div className="price-row">
                                <span>&#x20B9;{item.price}</span>

                                <button type="button" aria-label={`Add ${item.name} to cart`}>Add</button>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredItems.length === 0 && (
                    <p className="empty-menu">No menu items match your search.</p>
                )}
            </section>
        </main>
    );
}
