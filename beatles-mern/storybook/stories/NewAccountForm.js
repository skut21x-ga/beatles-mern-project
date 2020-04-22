import React from "react";
import "./NewAccountForm.css";

<link
  href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
  rel="stylesheet"
></link>;

const NewAccountForm = (props) => {
  let heart = "";
  let cart = "";
  let product = "";
  let rating = "";
  let cost = "";
  let prices = "";
  let text = "";
  let line = "";
  let line2 = "Line2";
  let thumbnail = "";
  let classList = "";
  let minicontainer = "";
  let oldcost = "";
  let ratingbox = "";
  let productImage = "";
  let textbox = "";
  let imagebox = "";
  let reviewcount = "ReviewCount";
  let submitreview = "SubmitReview";
  let producttext = "ProductText";
  let inlineicons = "Icons";
  let hotornot = "HotOrNot";
  let icon = "";

  let types = ["vertical", "horizontal", "small", "inline"];

  if (props.icon == "clear") {
    heart =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/heart.png?raw=true";
    cart =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/cart.png?raw=true";
  }
  if (props.icon == "solid") {
    heart =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/solidheart.png?raw=true";
    cart =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/solidcart.png?raw=true";
  }
  if (props.label == "Apple Macbook Pro") {
    product =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/laptop.png?raw=true";
  }
  if (
    props.label == "Beats Solo 2 On Ear Headphones - Black" &&
    props.type !== "inline"
  ) {
    product =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/beats.png?raw=true";
  }
  if (props.rating == "4") {
    rating =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/rate.png?raw=true";
  }

  if (
    props.label == "Beats Solo 2 On Ear Headphones - Black" &&
    props.type == "inline"
  ) {
    product =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/laptop.png?raw=true";
  }

  if (props.icon == "cart") {
    icon =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/smallcart.png?raw=true";
  }
  if (props.icon == "favorite") {
    icon =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/smallheart.png?raw=true";
  }
  if (props.label == "") {
    classList += ` container-${props.label}`;
  }

  if (props.type == "inline") {
    reviewcount += ` ReviewCount-${props.type}`;
    submitreview += ` SubmitReview-${props.type}`;
    producttext += ` ProductText-${props.type}`;
    hotornot += ` HotOrNot-${props.type}`;
    line2 = ` Line2-${props.type}`;
    inlineicons = ` Icons-${props.type}`;
  }

  if (types.includes(props.type)) {
    classList += ` container-${props.type}`;
    line += ` Line-${props.type}`;
    prices += ` Prices-${props.type}`;
    text += ` Text-${props.type}`;
    cost += ` Cost-${props.type}`;
    oldcost += ` Oldcost-${props.type}`;
    ratingbox += ` RatingBox-${props.type}`;
    thumbnail += ` Thumbnail-${props.type}`;
    productImage += ` Product-${props.type}`;
    minicontainer += ` MiniContainer-${props.type}`;
    textbox += ` TextBox-${props.type}`;
    imagebox += ` ImageBox-${props.type}`;
  }

  return (
    <div className="Container">
      <div className={classList}>
        <div className={thumbnail}>
          <div className="Icons">
            <img className="Icon1" src={heart}></img>
            <img className="Icon2" src={cart}></img>
          </div>
          <div className={imagebox}>
            <div className={hotornot}>HOT</div>
            <img className={productImage} src={product}></img>
          </div>
        </div>
        <div className={line}></div>
        <div className={minicontainer}>
          <div className={textbox}>
            <a className={text}>{props.label}</a>
          </div>
          <div className={ratingbox}>
            <img className="Rating" src={rating}></img>
            <div className={reviewcount}>
              <a>{props.reviewcount} reviews</a>
            </div>
            <div className={submitreview}>
              <a>Submit a review</a>
            </div>{" "}
            <div className={line2}></div>
          </div>
          <div className={prices}>
            <div className={cost}>{props.cost}</div>
            <div className={oldcost}>{props.oldcost}</div>
          </div>
          <div className={producttext}>{props.producttext}</div>
          <div className={inlineicons}>
            <div className="LeftButton">
              <div className="CartIcon">
                <img
                  className="CartIcon"
                  src="https://github.com/skut21x-ga/component-library-project/blob/master/stories/smallcart.png?raw=true"
                ></img>
              </div>
              <div className="AddtoCartText">
                <a className="IconText">Add to Cart</a>
              </div>
            </div>
            <div className="RightButton">
              <img
                className="HeartIcon"
                src="https://github.com/skut21x-ga/component-library-project/blob/master/stories/smallheart.png?raw=true"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAccountForm;
