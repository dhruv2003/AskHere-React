// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./UserForm.module.css";
import Question from "./Question";

let data = {
	name: "FY Rep Forms",
	description: "Give your best",
	questions: [
		{
			id:0,
			type: "answer",
			title: "What is your name",
		},
		{
			id:1,
			type: "answer",
			title: "Why do you want to join Codecell",
		},
		{
			id:2,
			type: "answer",
			title: "Describe yourself in 100 words",
		},
		{
			id:3,
			type: "choice",
			title: "Position ",
			options: [
				{
					id: 0,
					name: "Tech Team",
				},
				{
					id: 1,
					name: "Marketing Team",
				},
				{
					id: 2,
					name: "Creative Team",
				},
			],
		},
	],
};

// let nextID = 0;

const UserForm = () => {
	// const { id } = useParams();
	// const [result,setResult]=useState()


	return (
		<div className={styles.container}>
			<motion.div
				initial={{
					scale: 0.5,
					opacity: 0.7,
				}}
				animate={{
					scale: 1,
					opacity: 1,
				}}
			>
				<motion.div
					className={styles.header}
					whileHover={{
						x: -10,
						boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
					}}
				>
					<div className={styles.headerName}>{data.name}</div>
					<div className={styles.headerDesc}>{data.description}</div>
				</motion.div>
			</motion.div>

			{data.questions.map((question) => {
				return (
					<Question question={question} key={question.id} />
				);
			})}
		</div>
	);
};

export default UserForm;

// {
//   name,
//   description,
//   questions:[
//     {
//       type:"choice",
//       title,
//       options:[
//         {
//           id:0,
//           name:""
//         }
//       ]
//     }
//   ]
// }

