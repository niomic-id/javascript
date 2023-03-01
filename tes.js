function checkCashRegister(price, cash, cid) {
  const unitMap = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };
  let totalCID = 0;
  for (let money of cid) {
    totalCID += money[1];
  }

  totalCID = totalCID.toFixed(2);
  let changeToGive = cash - price;
  const changeArray = [];

  if (changeToGive > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeToGive.toFixed(2) === totalCID) {
    return {
      status: "CLOSED",
      change: cid,
    };
  } else {
    cid = cid.reverse();
    for (let money of cid) {
      const [unit, value] = money;
      const addition = [unit, 0];

      while (changeToGive >= unitMap[unit] && value > 0) {
        addition[1] += unitMap[unit];
        value -= unitMap[unit];
        changeToGive -= unitMap[unit];
        changeToGive = changeToGive.toFixed(2);
      }
      if (addition[1] > 0) {
        changeArray.push(addition);
      }
    }
  }

  if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return {
    status: "OPEN",
    change: changeArray,
  };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
