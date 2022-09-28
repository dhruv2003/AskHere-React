// import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import AddQuestionButton from "./addQuestionButton";
import { useState } from "react";
import Question from "./Question/Question.js";

const CreateForm = () => {
	const [questions, setQuestions] = useState([
		{
			title: "Untitled 1",
			type: "checkbox",
			options: ["option 1"],
		},
	]);

	const handleAdd = () => {
		setQuestions([
			...questions,
			{
				title: "Untitled 1",
				type: "string",
			},
		]);
	};

	return (
		<Box className="header-element">
			<Header />
			<AddQuestionButton handleAdd={handleAdd} />
			{questions.map((question) => {
				return <div>hello</div>;
			})}
			<Question />
		</Box>
	);
};

export default CreateForm;

// {
// 	name,
//     FormName,
//     formDescription,
//     Questions:[
//         {
//             title,
//             type,

//         }
//     ]
// }
