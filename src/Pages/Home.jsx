import ProductCard from "../Components/ProductCard"
import Slider from "../Components/Slider"
const featuredProducts = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Product 1 Description',
        price: 49.99,
        image: 'product1.jpg',
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Product 2 Description',
        price: 39.99,
        image: 'product2.jpg',
        rating: 4.2,
    },
    // Add more featured products as needed
];

const Home = () => {
    return (
        <>
            <Slider />
            <section className=" p-5 lg:p-0 lg:my-10">
                <h2 className="text-2xl title font-bold text-center mb-8 text-white bg-gray-800 w-[fit-content] m-auto rounded p-4">
                    Featured Products
                </h2>
                <div className="grid   md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            </section>
        </>
    )
}

export default Home