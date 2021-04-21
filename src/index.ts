import Portfolio from "./portfolio"
import Stock from "./stock"

(function main() {
  const portfolio = new Portfolio([
    new Stock("AAPLE", [])
  ]);
  const profit = portfolio.calculateProfit(new Date(), new Date());
  console.log("Total profit : ", profit);
})()