import React from "react";
import StartButton from "../../UI/StartButton";
import s from "./SupportSection.module.scss";
import supportBg from "../../../assets/supportbg.png";
import { motion } from "framer-motion";

const blockVars = {
  visible: { opacity: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0 },
};

const SupportSection = () => {
  return (
    <section className={s.section}>
      <div className={s.textBlock}>
        <h2 className={s.title}>A crypto investment platform that invests in you</h2>
        <p className={s.text}>
          We invest more resources than any other platrom in making sure great support from real people is a
          click away, whenever you need it.
        </p>
        <StartButton />
      </div>

      <div className={s.support}>
        <img src={supportBg} alt="support" />
        <motion.div
          className={s.infoBlock}
          whileInView="visible"
          initial="hidden"
          viewport={{ amount: 0.2, once: true }}
          variants={blockVars}
        >
          <h2 className={s.title}>24/7 access to full service customer support</h2>
          <p className={s.text}>
            We invest more resources than any other platform in making sure great support from real people is
            a click away, whenever you need it.
          </p>
          <StartButton />
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
