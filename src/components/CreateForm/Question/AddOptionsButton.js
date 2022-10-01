import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddOPtionsButton= (props) => {
	return (
		<Button onClick={props.handleAddOption}
			variant="contained"
			sx={{
				height: "40px",
				width: "10px",
				margin: "4px",
				position: "absolute",
			}}
		>
			<AddIcon />
		</Button>
	);
};

export default AddOPtionsButton;
