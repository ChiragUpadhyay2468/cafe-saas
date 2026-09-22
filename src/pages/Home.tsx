import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedMenu from "../components/home/FeaturedMenu";
import Footer from "../components/layout/Footer";
export default function Home () {
    return(
        <>
            <Navbar />
            <Hero />
            <FeaturedMenu />
            <Footer />
        </>
    );
}