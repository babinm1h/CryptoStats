import axios from "axios";

const cryptoHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "4c76d54d82msh0a541de65e643d5p1c7443jsn47c598df9024",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const $currencyInstance = axios.create({
  baseURL: baseUrl,
  headers: cryptoHeaders,
});
