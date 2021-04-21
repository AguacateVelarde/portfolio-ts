import { IStock, StockPrices } from "./interfaces";

class Stock implements IStock{
  priceByDate: StockPrices[];
  symbol: string;

  constructor(symbol: string, priceByDate: StockPrices[]) {
    this.symbol = symbol;
    this.priceByDate = priceByDate; 
  }
  
  getPrice(date: Date): number {
    // TODO: send price based in the date
    return 25; 
  }
  
}


export default Stock; 