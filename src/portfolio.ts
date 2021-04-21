import assert from "assert";
import { IPortfolio, IStock } from "./interfaces";

class Portfolio implements IPortfolio {
  private stocks: IStock[];
  constructor(stocks: IStock[]) {
    this.stocks = stocks; 
  }
  
  
  calculateProfit = (startDate: Date, endDate: Date): number => {
    this._verifyGuardValidations(startDate, endDate);

    let actualSum = 0; 
    for (const stock of this.stocks) {
      const diference = this._getDiferenceInStockPrice(stock, startDate, endDate);
      actualSum += diference;
    }

    return actualSum;     
  }
  
  private _verifyGuardValidations(startDate: Date, endDate: Date) {
    assert(startDate, "startDate is not define");
    assert(endDate, "endDate is not define");

    assert(startDate instanceof Date, "startDate is not a date");
    assert(endDate instanceof Date, "endDate is not a date");
  }

  private _getDiferenceInStockPrice(stock: IStock, startDate: Date, endDate: Date) {
    const startPrice = stock.getPrice(startDate);
    const endPrice = stock.getPrice(endDate);
    const diferencePrice = startPrice - endPrice;
    return diferencePrice; 
  }
}


export default Portfolio; 