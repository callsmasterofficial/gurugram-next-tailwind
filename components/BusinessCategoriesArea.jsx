import React from "react";

function BusinessCategoriesArea() {
  return (
    <>
      <div className="Categories-post border-gray categories-gap">
        <div className="section-title flex justify-between align-items-center border-solid border-b-2 sm:mr-6">
          <h3 className="ml-1 text-xl relative font-semibold  mb-4 md:text-lg">Categories</h3>
          <a className="ml-1 text-xl relative   mb-4 md:text-lg " href="#">ALL SEE</a>
        </div>
        <div className="Categories-item mt-3 sm:mr-6">
          <div className="item">
            <img src="assets/images/categories-1.jpg" alt="categories" />
            <div className="Categories-content">
              <a href="#">
                <span>Restaurant</span>
                <img src="assets/images/arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/categories-2.jpg" alt="categories" />
            <div className="Categories-content">
              <a href="#">
                <span>Entertainment</span>
                <img src="assets/images/arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/categories-3.jpg" alt="categories" />
            <div className="Categories-content">
              <a href="#">
                <span>Financial</span>
                <img src="assets/images/arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/categories-4.jpg" alt="categories" />
            <div className="Categories-content">
              <a href="#">
                <span>Business</span>
                <img src="assets/images/arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/categories-5.jpg" alt="categories" />
            <div className="Categories-content">
              <a href="#">
                <span>Scientists</span>
                <img src="assets/images/arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/categories-6.jpg" alt="categories" />
            <div className="Categories-content">
              <a href="#">
                <span>International’s</span>
                <img src="assets/images/arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default BusinessCategoriesArea;
