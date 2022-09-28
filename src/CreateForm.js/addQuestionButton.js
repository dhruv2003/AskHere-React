import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const addQuestionButton = (props) => {


	
	return (
		<Button onClick={()=>props.handleAdd()}
			variant="contained"
			sx={{
				height: "70px",
				width: "70px",
				borderRadius: "50%",
				margin: "4px",
				position: "absolute",
				bottom: "10vh",
				right: "7.5vh",
			}}
		>
			<AddIcon />
		</Button>
	);
};

export default addQuestionButton;
