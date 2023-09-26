import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const Cards = () => {
  return (
   <>
   
   <div className="sm:w-1/2 md:w-5/12 lg:w-1/3 xl:w-1/4 p-4">
      <div className="card mb-3 pop-packages-card shadow-2xl">
        <Link to="trek_description.html">
          <img src="/images/officelogo.png" alt="" className="card-img-top" />
        </Link>
        <span className="absolute end-0 bottom-2 sm:bottom-4 bg-primary rounded-l-md pl-2 pr-1 py-0.5 package-price text-white">
          55000<span className="package-price">$</span><span className="text-xs">/person</span>
        </span>
        <div className="card-body">
          <Link to="trek_description.html" className="card-title text-decoration-none font-bold">Everest Trek</Link>
          <Link to="trek_description.html" className="text-decoration-none">
            <p className="card-text">
              Special For mountains.<br />
              <span className="font-bold text-red-600">Read More....</span>
            </p>
          </Link>
          <div className="card-footer flex flex-col lg:flex-row mb-1">
            <div className="flex items-center space-x-1 star-icon">
           <FaStar/>
           <FaStar/>
           <FaStar/>
           <FaStar/>
           <FaStar/>
            </div>
            <div className="lg:ml-1 lg:mt-0 mt-2  text-center lg:text-left">
              <div className="time-icon">
                <i className="bx bx-time font-bold"></i>
              </div>
              <div className="time-descr">100D/99N</div>
            </div>
          </div>
          <div className="btns-books flex flex-wrap">
            <Link to="booknow2.html" className="btn bg-green-500 mx-auto my-2  p-3 lg:mt-0">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
   </>
  )
};

export default Cards;
