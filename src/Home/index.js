import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ListElement from "./ListElement";
const listItems = [
	
];

const Home = () => {
	return (
		<>
			<Typography variant="h6"> Your Forms </Typography>
			<Grid container spacing={4}
				sx={{
					marginTop: "5vh",
				}}
			>
				{listItems.map((item) => {
					return (
						<Grid item xs={3}>
							<ListElement item={item} />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default Home;
