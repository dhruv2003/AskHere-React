import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Question.module.css";
import Choices from "./Choices";

let nextID = 0;
const Question = ({ question, setResult }) => {
	const [answer,setAnswer]=useState("")

    const handleChange=(event)=>{
        setAnswer(event.target.value)
    }


	return (
		<motion.div
			key={nextID++}
			initial={{
				opacity:0
			}}
			whileInView={{
				opacity:1
			}}
			whileHover={{
				x: -10,
				boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
			}}
			className={styles.question}
		>
			<div className={styles.title}>{question.title}</div>
			{question.type === "answer" && (
				
					<input
						className={styles.answer}
						type="text"
                        value={answer}
                        onChange={handleChange}
					></input>
				
			)}

			{question.type === "choice" && (
				
					<Choices options={question.options} />
				
			)}
		</motion.div>
	);
};

export default Question;
