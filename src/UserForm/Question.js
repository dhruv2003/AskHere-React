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
		<div
			key={nextID++}
			// transition={{
			// 	delay: 1,
			// }}
			// whileHover={{
			// 	x: -10,
			// 	boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
			// }}
			className={styles.question}
		>
			{question.type === "answer" && (
				<div>
					<div className={styles.title}>{question.title}</div>
					<input
						className={styles.answer}
						type="text"
                        value={answer}
                        onChange={handleChange}
					></input>
				</div>
			)}

			{question.type === "choice" && (
				<>
					<div className={styles.title}>{question.title}</div>
					<Choices options={question.options} />
				</>
			)}
		</div>
	);
};

export default Question;
