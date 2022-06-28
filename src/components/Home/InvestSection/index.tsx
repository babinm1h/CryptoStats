import React from "react";
import StartButton from "../../UI/StartButton";
import s from "./InvestSection.module.scss";
import investBg from "../../../assets/investbg.png";
import { motion } from "framer-motion";

const blockVars = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, x: -500 },
};

const InvestSection = () => {
  return (
    <section className={s.section}>
      <motion.div
        className={s.infoBlock}
        whileInView="visible"
        initial="hidden"
        viewport={{ amount: 0.1, once: true }}
        variants={blockVars}
      >
        <div className={s.infoContainer}>
          <h2 className={s.title}>Take your first step into safe, secure crypto investing</h2>
          <p className={s.text}>
            Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean
            Separated they live in Bookmarks right at the coast.
          </p>
          <StartButton />
        </div>
      </motion.div>
      <div className={s.imgContainer}>
        <img src={investBg} alt="invest" />
      </div>
    </section>
  );
};

export default InvestSection;
