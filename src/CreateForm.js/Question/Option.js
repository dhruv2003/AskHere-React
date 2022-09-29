import { Box, TextField, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React, { useState, useEffect } from "react";

const Option = ({ choices, handleChoiceChange }) => {



	return (
		<>
			{choices.map((choice) => {
				return (
					<Box key={choice.id}
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							marginBottom: "1vh",
						}}
					>
						<Button variant="filled" onClick={() => handleChoiceChange(choices.filter(a=>{
							return a.id!==choice.id
						}))}>
							<RemoveCircleOutlineIcon />
						</Button>
						<TextField
							sx={{
								marginLeft: "1vw",
							}}
							defaultValue={choice.name}
						></TextField>
					</Box>
				);
			})}
		</>
	);
};

export default Option;

// [
//   "vedantika",
//   "pranay"
// ]
