import React, { useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Choice = ({
	choice,
	handleChoiceChange,
	choices,
  setChoices
}) => {
	const [option, setOption] = useState(choice.name);

	useEffect(() => {
		let templist = choices;
		for (let i = 0; i < templist.length; i++) {
			if (templist[i]["id"] === choice.id) {
				templist[i]["name"] = option;
			}
		}
    setChoices(templist)
	}, [option]);

	return (
		<Box
			key={choice.id}
			sx={{
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				marginBottom: "1vh",
			}}
		>
			<Button
				variant="filled"
				onClick={() =>
					handleChoiceChange(
						choices.filter((a) => {
							return a.id !== choice.id;
						})
					)
				}
			>
				<RemoveCircleOutlineIcon />
			</Button>
			<TextField
				sx={{
					marginLeft: "1vw",
				}}
				value={option}
				onChange={(e) => setOption(e.target.value)}
			></TextField>
		</Box>
	);
};

export default Choice;
