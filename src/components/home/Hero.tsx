import heroImage from "../../assets/images/premium_photo-1674327105076-36c4419864cf.avif";
export default function Hero () {
    return(
        
        <section className="hero">
            <div className="hero-content">
                <p className="tag">
                    Smart Ordering &bull; Fast Service
                </p>

                <h1>
                    Fresh Coffee &
                    <br />
                    Delicious Food 
                </h1>

                <p className="subtitle">
                    Order online, reserve tables, and track your food in real time.
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn">Explore Menu</button>
                    <button className="secondary-btn">Reserve Table</button>
                </div>
            </div>

            <div className="hero-image">
                <img src={heroImage} alt="coffee"/>
            </div>
        </section>
    );
}