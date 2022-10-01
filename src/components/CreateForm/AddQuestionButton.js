import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const addQuestionButton = (props) => {


	
	return (
		<Button onClick={()=>props.handleAdd()}
			variant="contained"
			sx={{
				width:"40px",
				height:"60px",
				
				margin:1,
				borderRadius:"50%"
			}}
		>
			<AddIcon />
		</Button>
	);
};

export default addQuestionButton;
