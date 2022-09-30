import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ListElement from "./ListElement";
const listItems = [
	{
		id: 0,
		name: "Pranay",
		description: "Ghumta rehta hai kisi ke sath ",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},

	{
		id: 1,
		name: "Pranay",
		description: "Ghumta rehta hai kisi ke sath",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},

	{
		id: 2,
		name: "Pranay",
		description: "Ghumta rehta hai kisi ke sath",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},

	{
		id: 3,
		name: "Pranay",
		description: "Ghumta rehta hai kisi ke sath",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},

	{
		id: 4,
		name: "Pranay",
		description: "Ghumta rehta hai kisi ke sath",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},

	{
		id: 5,
		name: "Pranay",
		description: "Ghumta rehta hai kisi ke sath",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},
	{
		id: 6,
		name: "Pranay",
		description: "Ghumta rehta hai kisi ke sath",
		created: "20-12-2003",
		NumberOfResponse: 10,
	},
	{
		id: 7,
		name: "Pranay",
		description: "Ghumta rehta hai kisi ke sath",
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
