import {
	Card,
	TextField,
	useTheme,
	MenuItem,
	Select,
	Box,
	Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Option from "./Option";

let nextID = 0;

const Question = ({ ques, setQuestions, questions }) => {
	const theme = useTheme();
	const [type, setType] = useState(ques.type);
	const [title, setTitle] = useState(ques.title);
	const [choices, setChoices] = useState(ques.options);


	const handleChange = (event) => {
		setType(event.target.value);
	};
	const AddChoice = () => {
		let list = choices.concat({ id: nextID++, name: "" });
		setChoices(list);
	};

	const handleSave = () => {	

		let templist = questions;
		for (let i = 0; i < templist.length; i++) {
			if (templist[i]["id"] === ques.id) {
				templist[i]["title"] = title;
				templist[i]["type"] = type;
				templist[i]["options"] = choices;
			}
		}
		setQuestions(templist)
	};

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
					<Option
						choices={choices}
						handleChoiceChange={setChoices}
						AddChoice={AddChoice}
						setChoices={setChoices}
					/>
				</>
			) : (
				<></>
			)}
			<Box>
				{type === "choice" ? (
					<Button
						variant="contained"
						onClick={AddChoice}
						sx={{ marginLeft: 10, height: "53px" }}
					>
						Add choice
					</Button>
				) : (
					<></>
				)}

				<Button
					variant="contained"
					sx={{
						height: "53px",
						marginLeft: 2,
					}}
					onClick={handleSave}
				>
					Save
				</Button>
			</Box>
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
//           choices:[]
//       }
//   ]
// }
