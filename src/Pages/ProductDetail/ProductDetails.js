import React, { Fragment, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Redux/slices/productSlice";
import Loader from "../../Components/Loader/Loader";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ProductDetails() {
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);
  const { product } = useSelector((state) => state.products);
  const images = product?.images;

  //Carousel Code
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    dispatch(getProductDetail({ id }));
  }, [dispatch, id]);

  const addToCart = () => {
    dispatch({
      type: "ProductSlice/addToCart",
      payload: { id: product._id },
    });
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="ProductDetail">
          <div className="container product__detail-container">
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images?.map((step, index) => (
                  <div key={step._id}>
                    {console.log(step)}
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 255,
                          display: "block",
                          maxWidth: 400,
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.url}
                        alt={step._id}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Box>

            <div className="product__details">
              <p>{product?.category}</p>
              <h3>{product?.name}</h3>
              <div className="product__sm-desc">
                <p className="p-text">{product?.description}</p>
              </div>

              <div className="weight__badge">
              <span className="active-badge">{product.weight}g</span>
                {/* <span>150g</span>
                <span>250g</span> */}
              </div>

              <div className="prize">
                <h5>₹{product?.price}</h5>
              </div>

              <div className="submit__btn">
                <button onClick={() => addToCart()} className="btn">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="product__About-container">
            <div className="product__desc">
              <h3>Product Description</h3>
              <p className="p-text">{product?.longDescription}</p>
            </div>

            <div className="manu__detail">
              <h3>Manufacturer Details</h3>
              <p className="p-text">
                small note about the product small note about the product small
                note about the product small note about the product small note
                about the product small note about the product small note about
                the product small note about the product small note about the
                product small note about the product small note about the
                product small note about the product small note about the
                product small note about the product small note about the
                product small note about the product
              </p>
            </div>
            <div className="product__About-container">
              <div className="product__desc">
                <h3>Product Description</h3>
                <p className="p-text">{product.longDescription}</p>
              </div>
              <div className="manu__detail">
                <h3>Manufacturer Details</h3>
                <p className="p-text">
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                </p>
              </div>

              <div className="disclaimer">
                <h3>Disclaimer</h3>
                <p className="p-text">
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ProductDetails;
