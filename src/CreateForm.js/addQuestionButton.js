import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const addQuestionButton = (props) => {


	
	return (
		<Button onClick={()=>props.handleAdd()}
			variant="contained"
			sx={{
				position: "fixed",
				bottom: "70px",
    			right: "10px",
			}}
		>
			<AddIcon sx={{padding:1}}/>
		</Button>
	);
};

export default addQuestionButton;
