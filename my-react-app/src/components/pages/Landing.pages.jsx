import React, { useCallback } from "react";
import Navbar from "../molecules/Navbar.molecules";
import Footer from "../organism/Footer.organism";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import Image from "./assets/hero-img.svg";

const Landing = () => {
  const navigateCreateProduct = useNavigate();
  const navigateCreateAccount = useNavigate();

  const handleNavigateProduct = useCallback(() => {
    navigateCreateProduct("/Create Product");
  }, []);
  const handleNavigateAccount = useCallback(() => {
    navigateCreateAccount("/Create Account");
  }, []);

  return (
    <div>
      <Navbar />
      <div className="landing-container">
        <section className="hero-container">
          <div>
            <h1>Better Solutions For Your Business</h1>
            <p>
              We are team of talented designers making websites with Bootstrap
            </p>
            <br />{" "}
            <button
              type="submit"
              className="start-button"
              onClick={handleNavigateAccount}
            >
              Get Started
            </button>
            <button
              className="watchVideo-button"
              onClick={handleNavigateProduct}
            >
              Create a Product!
            </button>
          </div>
          <img src={Image} alt="hero-img" />
        </section>
        <section className="productList-container">
          <h2>PRODUCT LIST</h2>
          <div className="cards-container">
            <div className="landing-card">
              <img src="" alt="" />
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button>Detail View</button>
            </div>
            <div className="landing-card">
              <img src=" " alt="" />
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button>Detail View</button>
            </div>
            <div className="landing-card">
              <img src="" alt="" />
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button>Detail View</button>
            </div>
          </div>
          <div className="load-button d-flex justify-content-end">
            <button>Load More</button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
