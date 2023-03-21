import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imageData from '../../../data/imagaData'
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';



export default function Slide() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 3.5,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 3.5,
                    arrows: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1.9,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                },
            },
        ],
    };



    return (
        <div className="w-full flex-col gap-3 py-6 shadow-2xl flex">
            <h1 className="text-[14px] px-3 font-extrabold text-center truncate whitespace-normal text-gray-500">Each of the seasons presents us with a world full of its own beauties.</h1>
            <div className="w-full p-4 overflow-hidden">
                <Slider {...settings}>
                    {imageData?.map((item, index) => (
                        <div key={index} className=" flex items-center justify-center flex-col">
                            <Jump>
                                <div className="w-[90%] flex p-2  shadow-lg rounded-md  gap-2  items-center justify-center  flex-col">
                                    <Zoom>
                                        <img
                                            alt={item.img}
                                            src={item.img}
                                            className="shadow-2xl h-[150px] w-[150px] object-cover rounded-full border border-gray-300"
                                        />
                                    </Zoom>
                                </div>
                            </Jump>
                        </div>
                    ))}


                </Slider>
            </div>
        </div>
    );
}