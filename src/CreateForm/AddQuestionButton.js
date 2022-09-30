import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const addQuestionButton = (props) => {


	
	return (
		<Button onClick={()=>props.handleAdd()}
			variant="contained"
			sx={{
				margin:1
			}}
		>
			<AddIcon />
		</Button>
	);
};

export default addQuestionButton;
