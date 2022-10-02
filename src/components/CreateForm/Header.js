import { TextField, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";

const Header = ({ setHeader ,header}) => {
	const [title, setTitle] = useState(header.title);
	const [description, setDescription] = useState(header.description);

	useEffect(() => {
		setHeader({
			title,
			description,
		});
	}, [title, description, setHeader]);

	return (
		<Paper
			sx={{
				padding: 5,
			}}
			elevation={6}
		>
			<TextField
				variant="standard"
				fullWidth
				label="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<TextField
				variant="standard"
				fullWidth
				label="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
		</Paper>
	);
};

export default Header;
