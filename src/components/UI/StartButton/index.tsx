import React, { FC } from "react"
import s from "./StartButton.module.scss"
import cn from "classnames"

interface IStartButtonProps {
  className?: string
}

const StartButton: FC<IStartButtonProps> = ({ className }) => {
  return <button className={s.btn + ` ${className}`}>Get started!</button>
}

export default StartButton
