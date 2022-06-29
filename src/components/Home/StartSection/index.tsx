import { motion } from "framer-motion";
import React from "react";
import s from "./StartSection.module.scss";
import { ArrowLeft } from "../../../assets/icons";
import card1 from "../../../assets/card1.png";
import card2 from "../../../assets/card2.png";
import card3 from "../../../assets/card3.png";
import StartButton from "../../UI/StartButton";

const cardsVars = {
  hidden: { x: 0, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
};

const StartSection = () => {
  return (
    <section className={s.section}>
      <div className={s.textBlock}>
        <h1 className={s.title}>We make crypto clear and simple</h1>
        <p className={s.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At distinctio consequatur, dolor
          doloremque ipsum voluptas molestias illo molestiae? Voluptatem, facilis!
        </p>
        <StartButton className={s.btn} />
      </div>

      <motion.div
        className={s.cards}
        whileInView="visible"
        initial="hidden"
        viewport={{ amount: 0.2, once: true }}
        variants={cardsVars}
      >
        <div className={s.card}>
          <img src={card1} alt="card" />
          <div className={s.cardTitle}>Trade Desk</div>
          <p>Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform</p>
          <button className={s.cardBtn}>
            Get Started <ArrowLeft className={s.btnIcon} />
          </button>
        </div>

        <div className={s.card}>
          <img src={card2} alt="card" />
          <div className={s.cardTitle}>CoinFlip Wallet</div>
          <p>We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto</p>
          <button className={s.cardBtn}>
            Get Started <ArrowLeft className={s.btnIcon} />
          </button>
        </div>

        <div className={s.card}>
          <img src={card3} alt="card" />
          <div className={s.cardTitle}>CoinFlip ATMs</div>
          <p>
            Store your growing investments in our non-custodial wallet that gives you access to a full suite
            of DeFi services in one place
          </p>
          <button className={s.cardBtn}>
            Get Started <ArrowLeft className={s.btnIcon} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default StartSection;
