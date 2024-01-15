import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopByCatrgory = () => {
  const context = useContext(myContext);
  const { mode } = context;

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container lg:px-20 px-5  py-8 md:py-16 mx-auto">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1
              class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Explore Categories
            </h1>
            <div class="h-1 w-20 bg-pink-600 rounded"></div>
          </div>
          <div className="">
            <Slider {...settings}>
              <div className="">
                <Link to="/category/phone">
                  <div className="shadow-lg flex items-center justify-center flex-col gap-4 py-5 hover:shadow-md border-2 rounded-lg cursor-pointer">
                    <img
                      className="w-48 hover:scale-110"
                      src="https://cdn.pixabay.com/photo/2016/12/26/06/16/i-phone-1931557_1280.jpg"
                    />
                    <div>
                      <h1
                        className="text-center text-black font-bold  text-xl"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        Phone
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/category/headphone">
                  <div className="shadow-lg flex items-center justify-center flex-col gap-4 py-5 hover:shadow-md border-2 rounded-lg cursor-pointer">
                    <img
                      className="w-48 hover:scale-110"
                      src="https://m.media-amazon.com/images/I/71BrtUGEvvL._SX679_.jpg"
                    />
                    <div>
                      <h1
                        className="text-center text-black font-bold  text-xl"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        Headphone
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/category/laptop">
                  <div className="shadow-lg flex items-center justify-center flex-col gap-4 py-5 hover:shadow-md border-2 rounded-lg cursor-pointer">
                    <img
                      className="w-48 hover:scale-110"
                      src="https://m.media-amazon.com/images/I/41YhYmWwsNL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <div>
                      <h1
                        className="text-center text-black font-bold  text-xl"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        Laptop
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/category/watch">
                  <div className="shadow-lg flex items-center justify-center flex-col gap-4 py-5 hover:shadow-md border-2 rounded-lg cursor-pointer">
                    <img
                      className="w-48 hover:scale-110"
                      src="https://m.media-amazon.com/images/I/61JtVmcxb0L._SX679_.jpg"
                    />
                    <div>
                      <h1
                        className="text-center text-black font-bold  text-xl"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        Watch
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/category/earphone">
                  <div className="shadow-lg flex items-center justify-center flex-col gap-4 py-5 hover:shadow-md border-2 rounded-lg cursor-pointer">
                    <img
                      className="w-48 hover:scale-110"
                      src="https://m.media-amazon.com/images/I/41cTomA4G1L._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <div>
                      <h1
                        className="text-center text-black font-bold  text-xl"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        Earphones
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCatrgory;
