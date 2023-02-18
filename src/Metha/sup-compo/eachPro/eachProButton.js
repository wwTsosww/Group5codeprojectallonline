import React, {  } from "react";
import addToCshop from "../../function/addToshop";
import eachprofrom from "./eachProForm";

export const Product = ({
  product,
  index,
  CartItem,
  addToCart,
  decreaseQty,
}) => {

  let productPay;
  try {
    productPay = product.product_pay.split(",");
  } catch (error) {
    console.error(error);
    productPay = [];
  }

  const data = [
    {
      cateImg:
        "https://www.allonline.7eleven.co.th//media/i/Free_Delivery_7_11-13273-1.png",
      cateName: "จัดส่งออนไลน์",
    },
    {
      cateImg:
        "https://www.allonline.7eleven.co.th//media/i/logo7-11-63537-1.jpg",
      cateName: "7-ELEVEN",
    },
  ];



  return (
    <div className=" gap-3 card-text">
      <div className="">
        <h1 className="price col">{product.product_price}</h1>
      </div>
      <div className="">
        <h1 className="promotion col price">{product.product_promotion}</h1>
      </div>
      <div className="">
        <e></e>
        <button type="button" class="btn btn-danger ">
          <a href="/cart" className="text-white">
            ใส่ตะกร้า
          </a>
        </button>
        <button type="button" class="btn btn-success " onClick={addToCshop}>
          ซื้อ
        </button>
      </div>
      <div>
        <hr />
        <p>การจัดส่ง</p>
        {data.map((value) => {
          return (
            <>
              <img src={value.cateImg} alt="" style={{ margin: "10px" }} />
                  <span>{value.cateName}</span>
                <div className="col">
              <div className="" key={index}>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
