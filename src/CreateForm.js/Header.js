import { Card, TextField, useTheme } from "@mui/material";
import React from "react";

const Header = () => {
	const theme = useTheme();
	return (
		<Card
			sx={{
				padding: 5,
				backgroundColor: theme.palette.primary.main,
			
				// borderRadius="20px",
			}}
		>
			<TextField variant="standard" fullWidth label="Title" />
			<TextField variant="standard" fullWidth label="Description" />
		</Card>
	);
};

export default Header;
