import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const TotalAmount = ({
  oldTotal,
  dis,
  redirectLink,
  totalQty,
  btnText,
  btn,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <p>PRICE DETAILS ({totalQty} items)</p>
      </div>
      <div class="order_summary" id="priceBlock">
        <div class="base_price_detail price_details">
          <span>Total MRP</span>
          <span>
            <i class="bx bx-rupee"></i>
            {Intl.NumberFormat("en-IN").format(oldTotal)}
          </span>
        </div>
        <div class="discount_price price_details">
          <span>Discount On MRP</span>
          <span className="text_color_green">
            -<i class="bx bx-rupee"></i>
            {Intl.NumberFormat("en-IN").format(dis)}
          </span>
        </div>
        {/* <div class="priceDetail-base-row">
                <span>Coupon Discount</span>
                <span class="priceDetail-base-value priceDetail-base-action">
                  Apply Coupon
                </span>
              </div> */}
        <div class="convenience_fee price_details">
          <span>Convenience Fee</span>
          <span>
            <span style={{ textDecoration: "line-through" }}>
              <i class="bx bx-rupee"></i>69
            </span>
            <span className="text_color_green"> FREE</span>
          </span>
        </div>
        <div class="total_amount price_details">
          <span>Total Amount</span>
          <span>
            <i class="bx bx-rupee"></i>
            {Intl.NumberFormat("en-IN").format(oldTotal - dis)}
          </span>
        </div>
      </div>
      {btn ? (
        <div className="place_order_btn">
          <button
            onClick={() => {
              navigate(redirectLink);
            }}
          >
            {btnText}
          </button>
        </div>
      ) : null}
    </div>
  );
};