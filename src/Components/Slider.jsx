
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {/* Slide 1 */}
            <div>
                <img src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000" alt="Slider 1" className="w-full" />
            </div>
            {/* Slide 2 */}
            <div >
                <img src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000" alt="Slider 2" className="w-full" />
            </div>
            {/* Slide 3 */}
            <div>
                <img src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000" alt="Slider 3" className="w-full" />
            </div>
        </Slider>
    );
};

export default SliderComponent;
