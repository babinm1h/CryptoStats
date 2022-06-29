export interface ICurrency {
  "24hVolume": string;
  iconUrl: string;
  change: string;
  color: string;
  name: string;
  marketCap: string;
  price: string;
  rank: string;
  uuid: string;
  symbol: string;
  numberOfMarkets: string;
}

export interface ISingleCurrency {
  "24hVolume": string;
  btcPrice: string;
  change: string;
  description: string;
  iconUrl: string;
  listedAt: number;
  marketCap: string;
  name: string;
  numberOfExchanges: number;
  numberOfMarkets: number;
  price: string;
  uuid: string;
  websiteUrl: string;
  symbol: string;
  sparkline: string[];
  rank: number;
  links: ICurrencyLink[];
  allTimeHigh: { price: string };
}

export interface ICurrencyLink {
  type: string;
  url: string;
  name: string;
}

export interface ICurrencyHistory {
  price: string;
  timestamp: number;
}
