import React from "react";
import { useSelector } from "react-redux";

import CountUp from "react-countup";

function Money() {
  const moneyvalue = useSelector((state) => state.cards.billsMoney);
  const oldvalue = useSelector((state) => state.cards.moneyValueArr[0]);

  return (
    <div className="moneyContainer">
      <CountUp
        start={oldvalue}
        end={moneyvalue}
        duration={1}
        prefix="$"
        separator=" "
      />
    </div>
  );
}

export default Money;
