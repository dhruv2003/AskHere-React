import { Box, TextField, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React from "react";

const Option = ({ choices, handleChoiceChange, AddChoice }) => {
	const last = choices.length - 1;

	return (
		<>
			{choices.map((choice, index) => {
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
							defaultValue={choice.name}
						></TextField>
						{last === index ? (
							<Button
								variant="contained"
								onClick={AddChoice}
								sx={{ marginLeft: 2, height: "53px" }}
							>
								Add choice
							</Button>
						) : (
							<></>
						)}
						
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
