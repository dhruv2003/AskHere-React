import React from 'react'
import {motion} from 'framer-motion'
import styles from './Question.module.css'
import Choices from './Choices'
let nextID=0
const Question = ({question}) => {
  return (
    <motion.div
						key={nextID++}
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
						}}
						transition={{
							delay: 1,
						}}
					>
						{question.type === "answer" && (
							<div className={styles.question}>
								<div className={styles.title}>{question.title}</div>
								<input className={styles.answer} type="text" required></input>
							</div>
						)}

						{question.type === "choice" && (
							<>
								<div> wow</div>
								<Choices options={question.options} />
							</>
						)}
					</motion.div>
  )
}

export default Question