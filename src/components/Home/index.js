import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ListElement from "./ListElement";
const listItems = [
	{
		id: 0,
		name: "Survey Form",
		description: "Java or C++ survey ",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},

	{
		id: 1,
		name: "Feedback Form",
		description: "Feedback of Hackathon",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},

	{
		id: 2,
		name: "Event Registration",
		description: "STL workshop",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},
];

const Home = () => {
	return (
		<>
			<Typography variant="h6"> Your Forms </Typography>
			<Grid container spacing={4}
				sx={{
					marginTop: "1vh",
					marginBottom:"1vh"
				}}
			>
				{listItems.map((item) => {
					return (
						<Grid item xs={3} key={item.id}>
							<ListElement item={item} />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default Home;
