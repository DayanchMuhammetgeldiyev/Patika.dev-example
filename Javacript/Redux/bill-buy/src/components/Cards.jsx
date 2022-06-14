import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeOrder } from "../redux/cardsSlice";

function Cards() {
  const dispatch = useDispatch();
  const myitems = useSelector((state) => state.cards.items);

  const handleChange = (item, targetvalue) => {
    const id = item.id;
    const price = item.price;
    const innerHTML = targetvalue.innerHTML;

    if (targetvalue > 9999) {
      return;
    }

    if (innerHTML === "Buy") {
      targetvalue = Number(item.quantity) + 1;
    } else if (innerHTML === "Sell") {
      targetvalue = Number(item.quantity) - 1;
    } else {
      targetvalue = Number(targetvalue);
    }
    dispatch(changeOrder({ id, price, targetvalue }));
  };

  return (
    <div className="gridContainer">
      {myitems.map((item, index) => (
        <div className="carddiv" key={index}>
          <img src={item.img} alt={item.titlei} />
          <p className="cardTitle">{item.title}</p>
          <p className="cardPrice">
            $ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </p>
          <div className="buyOptionsDiv">
            <button
              className="sellBtn"
              disabled={!item.anyBuyed}
              onClick={(e) => handleChange(item, e.target)}
            >
              Sell
            </button>
            <input
              className="priceInput"
              type="number"
              min="0"
              value={item.quantity}
              onChange={(e) => handleChange(item, e.target.value)}
            />
            <button
              className="buyBtn"
              disabled={!item.canBuyMore}
              onClick={(e) => handleChange(item, e.target)}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
