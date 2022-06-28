import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.column1}>
          <p className={s.text1}>
            CoinFlip, the world’s leading bitcoin ATM operator, makes it so flippin’ easy to buy and sell
            bitcoin via cash, card, or bank transfer.
          </p>
          <p className={s.text2}>Sign up to get the latest in CoinFlip news, discounts, and more.</p>
          <span className="">© 2022 Babin Mihail</span>
        </div>

        <div className={s.column}>
          <div className={s.columnWrapper}>
            <span className={s.columnTitle}>Company</span>
            <ul className={s.list}>
              <li className={s.item}>About</li>
              <li className={s.item}>Careers</li>
              <li className={s.item}>About</li>
              <li className={s.item}>Press</li>
            </ul>
          </div>
        </div>

        <div className={s.column}>
          <div className={s.columnWrapper}>
            <span className={s.columnTitle}>Privacy Policy and Terms of Service</span>
            <ul className={s.list}>
              <li className={s.item}>CoinFlip Privacy Policy</li>
              <li className={s.item}>CoinFlip Biometrics Privacy Policy</li>
              <li className={s.item}>CoinFlip Terms of Service</li>
              <li className={s.item}>CoinFlip Financial Privacy Notice</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
