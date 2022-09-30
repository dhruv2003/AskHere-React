import Header from "./Header";
import { Box, Button } from "@mui/material";

import AddQuestionButton from "./AddQuestionButton";
import { useState, useEffect } from "react";
import Question from "./Question/Question.js";
let nextID=0;

const CreateForm = () => {
	const [header, setHeader] = useState({
		title: "",
		description: "",
	});

	const [questions, setQuestions] = useState([
		{
			id:nextID++,
			title: "Untitled",
			type: "choice",
			options: [],
		},
	]);


	const handleAdd = () => {
		setQuestions([
			...questions,
			{
				id:nextID++,
				title: "Untitled",
				type: "choice",
				options:[]
			},
		]);
	};

	return (
		<Box className="createform-container">
			<Header header={header} setHeader={setHeader} />
			<Box sx={{
				display:"flex",
				position: "fixed",
				bottom: "20px",
    			right: "10px",
				flexDirection:"column"
			}}>
			<AddQuestionButton handleAdd={handleAdd} />
			<Button variant="contained" onClick={()=>{console.log(questions)}}>
        	Save
      		</Button>
			</Box>
			
			{questions.map((question,index) => {
				return <Question ques={question} questions={questions} key={question.id} setQuestions={setQuestions}/>;
			})}
		</Box>
	);
};

export default CreateForm;

// {
//     title,
//     description,
//     questions:[
//         {
//             question:"",
//             type:"",
//             choices:[],
//         }
//     ]
// }
