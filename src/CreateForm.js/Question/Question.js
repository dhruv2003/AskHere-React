import {
	Card,
	TextField,
	useTheme,
	MenuItem,
	Select,
	Box,
	Button,
	Grid,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Option from "./Option";
import ShortAnswer from "./ShortAnswer";

let nextID = 0;

const Question = ({ ques }) => {
	const theme = useTheme();
	const [type, setType] = useState(ques.type);
	const [title, setTitle] = useState(ques.title);
	const [choices, setChoices] = useState(ques.choices);

	const [question, setQuestion] = useState({
		title: "",
		type: "",
		choices: [],
	});

	useEffect(() => {
		setQuestion({
			title,
			type,
			choices,
		});
	}, [title, type, choices]);

	const handleChange = (event) => {
		setType(event.target.value);
	};
	const AddChoice = () => {
		let list = choices.concat({ id: nextID++, name: "untitled" });
		setChoices(list);
	};

	// const removeChoice=(choice)=>{
	// 	let templist=choices
	// 	templist.splice(choice,1)
	// 	console.log(templist)
	// 	setChoices([...templist])
	// }

	return (
		<Card
			sx={{
				padding: 5,
				backgroundColor: theme.palette.primary.main,
				marginTop: 10,
			}}
		>
			<Box sx={{ display: "flex", flexDirection: "row" }}>
				<TextField
					variant="standard"
					fullWidth
					multiline
					label="Question Title"
					sx={{ margin: 2 }}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Select
					sx={{ margin: 2 }}
					id="demo-simple-select"
					value={type}
					label="Type"
					onChange={handleChange}
				>
					<MenuItem value={"choice"}>Multiple Choice</MenuItem>
					<MenuItem value={"string"}>Short Answer</MenuItem>
				</Select>
			</Box>
			{type === "choice" ? (
				<>
					<Option choices={choices} handleChoiceChange={setChoices} AddChoice={AddChoice}/>
					
				</>
			) : (
				<ShortAnswer />
			)}
		</Card>
	);
};

export default Question;

// {
//   title,
//   description,
//   questions:[
//       {
//           question:"",
//           type:"",
//           choices:[],
//           answer:""
//       }
//   ]
// }
