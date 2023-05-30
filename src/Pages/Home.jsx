import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard"
import Slider from "../Components/Slider"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from "react";
const categories = [
    {
        id: 1,
        name: 'Category 1',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 2,
        name: 'Category 2',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },]
const deals = [
    {
        id: 1,
        name: 'Deal 1',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        discount: '20% Off',
    },
    {
        id: 2,
        name: 'Deal 2',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        discount: '50% Off',
    },
    // Add more deals or promotions as needed
];
const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tortor at neque rutrum ultricies.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        content: 'Ut eleifend orci non hendrerit congue. Aliquam erat volutpat. Sed elementum nunc eu turpis feugiat.',
    },
    {
        id: 3,
        name: 'Jane Smith',
        content: 'Ut eleifend orci non hendrerit congue. Aliquam erat volutpat. Sed elementum nunc eu turpis feugiat.',
    },
    {
        id: 4,
        name: 'Jane Smith',
        content: 'Ut eleifend orci non hendrerit congue. Aliquam erat volutpat. Sed elementum nunc eu turpis feugiat.',
    },
    {
        id: 5,
        name: 'Jane Smith',
        content: 'Ut eleifend orci non hendrerit congue. Aliquam erat volutpat. Sed elementum nunc eu turpis feugiat.',
    },
    // Add more testimonials or reviews as needed
];

const Home = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to only run the effect once
    console.log(windowWidth)
    return (
        <>
            <Slider />
            <section className=" p-5 lg:p-0 lg:my-10">
                <h2 className="text-2xl title font-bold text-center mb-4 text-white bg-gray-800 w-[fit-content] m-auto p-4">
                    Featured Products
                </h2>
                <div className="grid   md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>

            {/* category section  */}
            <section className=" p-5 lg:p-0 lg:my-10">
                <h2 className="text-2xl title font-bold text-center mb-4 text-white bg-gray-800 w-[fit-content] m-auto p-4">Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <Link to={`/category/${category.id}`} key={category.id}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{category.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>


            {/* deals and promotion  */}
            <section className="p-5 lg:p-0 lg:my-10">
                <h2 className="text-2xl title font-bold text-center mb-4 text-white bg-gray-800 w-[fit-content] m-auto p-4">Deals and Promotions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {deals.map((deal) => (
                        <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={deal.image} alt={deal.name} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{deal.name}</h3>
                                <p className="text-gray-700">{deal.discount}</p>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* testimonial */}


            <section className="py-5 lg:p-0 lg:my-10">
                <h2 className="text-2xl title font-bold text-center mb-4 text-white bg-gray-800 w-[fit-content] m-auto p-4">Testimonials</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={windowWidth < 550 ? 1 : 3}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <SwiperSlide className="bg-white  rounded-lg shadow-md p-6">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="user" className="rounded-full w-[60px] mx-auto mb-3" />
                                <p className="text-gray-800 mb-4">{testimonial.content}</p>
                                <p className="text-gray-600">- {testimonial.name}</p>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </section>
        </>




    )
}

export default Home