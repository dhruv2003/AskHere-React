import Header from "./Header";
import { Box } from "@mui/material";
import AddQuestionButton from "./addQuestionButton";
import { useState, useEffect } from "react";
import Question from "./Question/Question.js";

const CreateForm = () => {
	const [header, setHeader] = useState({
		title: "",
		description: "",
	});

	const [questions, setQuestions] = useState([]);
	
	useEffect(()=>{
		console.log(questions)
	},[questions])


	const handleAdd = () => {
		setQuestions([
			...questions,
			{
				
				title: "Untitled 1",
				type: "choice",
				choices: [""],
			},
		]);
	};

	return (
		<Box className="createform-container">
			<Header header={header} setHeader={setHeader} />
			<AddQuestionButton handleAdd={handleAdd} />
			{questions.map((question,index) => {
				return <Question ques={question} key={index}/>;
			})}
		</Box>
	);
};

export default CreateForm;

// {
//     title,
//     description,
//     questions:{
//         {
//             question:"",
//             type:"",
//             choices:[],
//         }
//     }
// }
