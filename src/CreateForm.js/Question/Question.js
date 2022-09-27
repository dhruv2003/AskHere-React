import { Card, TextField, useTheme } from "@mui/material";
import React from "react";

const Question = (props) => {
	const theme = useTheme();
	return (
		<Card
			sx={{
				padding: 5,
				backgroundColor: theme.palette.primary.main,
				// borderRadius="20px",
			}}
		>
			<TextField variant="standard" fullWidth multiline label="Question Title" />
            <TextField select label="Select"/>
            helperText="Please select your currency"
            
            
		</Card>
	);
};

export default Question;
