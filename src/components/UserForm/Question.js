import React, { useEffect,useState } from "react";
import { motion } from "framer-motion";
import styles from "./Question.module.css";
import Choices from "./Choices";

let nextID = 0;
const Question = ({ question}) => {
	const [answer,setAnswer]=useState("")

    const handleChange=(res)=>{
        setAnswer(res)
    }

	useEffect(()=>{
		console.log(answer)
	},[answer])


	return (
		<motion.div
			key={nextID++}
			initial={{
				opacity:0,
				x:-10,
				
			}}
			whileInView={{
				opacity:1,
				x:0,
				transition:{
					delay:0.2
				}
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
                        onChange={(event)=>handleChange(event.target.value)}
					></input>
				
			)}

			{question.type === "choice" && (
				
					<Choices options={question.options} handleChange={handleChange}/>
				
			)}
		</motion.div>
	);
};

export default Question;
