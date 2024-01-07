import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testinonial";
import Track from "../../components/track/Track";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Filter />
        <ProductCard />
        {/* *******see more button******** */}
        <div className="flex justify-center mb-10 font-medium">
          <Link to={`/allproducts`}>
            <button className="bg-gray-300 px-5 py-2 rounded-xl">
              See More
            </button>
          </Link>
        </div>

        <Track />
        <Testimonial />
      </Layout>
    </>
  );
};

export default Home;
