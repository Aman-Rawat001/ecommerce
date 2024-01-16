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
                      src="https://i.ibb.co/fSxpRyV/i-phone-1931557-1280-prev-ui.png"
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
                      src="https://i.ibb.co/hRrYhf1/71-Brt-UGEvv-L-SX679-prev-ui.png"
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
                      src="https://i.ibb.co/BrpNWRx/41-Yh-Ym-Wws-NL-SX300-SY300-QL70-FMwebp-prev-ui.png"
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
                      src="https://i.ibb.co/3F0yNHY/61-Jt-Vmcxb0-L-SX679-prev-ui.png"
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
                      src="https://i.ibb.co/3rxpYSB/41c-Tom-A4-G1-L-SX300-SY300-QL70-FMwebp-prev-ui.png"
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
