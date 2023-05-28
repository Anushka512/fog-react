import React, { useEffect, useState } from "react";
import rowIMG from "../../Assets/Images/div.row.png";
import Card from "../../Components/Card/Card.js";
import CardImg from "../../Assets/Images/3.jpg.png";
import "./Shop.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllProducts,
} from "../../Redux/slices/productSlice";

function Shop() {
  const [activeFilter, setActiveFilter] = useState("All");

  const dispatch = useDispatch();
  const { products, categories } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

  const categoryChangeHandler = (filterName) => {
    setActiveFilter(filterName);
    dispatch(getAllProducts({ category: filterName }));
  };

  const handleAllProduct = () => {
    dispatch(getAllProducts());
    setActiveFilter("All");
  };

  return (
    <div>
      <div className="div__row-img">
        <img src={rowIMG} alt="ROW__IMG" />
      </div>

      <main>
        <div className="Menu">
          <div className="container menu__container">
            <h2 className="menu__head-sec">Fresh from Free of Gluten</h2>
            <h2 className="menu__head">OUR SPECIAL MENU</h2>

            {/* <div className="menu__items flex__center">
              <div
                onClick={handleAllProduct}
                className={`menu__item-filter-item flex__center p-text ${
                  activeFilter === "All" ? "item-active" : ""
                }`}
              >
                All
              </div>
              {categories.map((category, id) => (
                <div
                  onClick={() => categoryChangeHandler(category.name)}
                  className={`menu__item-filter-item flex__center p-text ${
                    activeFilter === category.name ? "item-active" : ""
                  }`}
                  key={category - id}
                >
                  {category.name}
                </div>
              ))}
            </div> */}

            <div className="app__work-filter">
              <div
                onClick={handleAllProduct}
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === "All" ? "item-active" : ""
                }`}
              >
                All
              </div>
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => categoryChangeHandler(category.name)}
                  className={`app__work-filter-item app__flex p-text ${
                    activeFilter === category.name ? "item-active" : ""
                  }`}
                >
                  {category.name}
                </div>
              ))}
            </div>

            <div className="menu__cards-container flex__center">
              {products.map((item, index) => (
                <Card
                  key={item.name + index}
                  imgUrl={item?.images[0]?.url}
                  name={item.name}
                  price={item.price}
                  salePrice={item.price - "20"}
                  category={"Breads"}
                  id={item._id}
                />
              ))}
              {/* <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Shop;
