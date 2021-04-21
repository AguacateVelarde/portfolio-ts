export type StockPrices = { date: Date; price: number; };

export interface IStock {
  priceByDate: StockPrices[];
  symbol: string;
  getPrice(date: Date): number; 
}

export interface IPortfolio { 
  calculateProfit(startDate: Date, endDate: Date): number;
}