// 1. Name
// 2. description
// 3. created
// 4. number of responses

import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";


const FormList = ({ item }) => {
	console.log(item);
	return (
		<Card key={item.id} className="formItem">
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{item.name}
				</Typography>
				{item.description.length <= 25 ? (
					<Typography>{item.description}</Typography>
				) : (
					<Typography>{item.description.slice(0, 25) + "..."}</Typography>
				)}

				<Box
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<span className="itemspan">
						<DateRangeIcon></DateRangeIcon>
						<Typography variant="bold" sx={{ marginLeft: 2, marginRight: 2 }}>
							{item.created}
						</Typography>
					</span>
					<span className="itemspan">
						<QuestionAnswerIcon />
						<Typography sx={{ marginLeft: 2, marginRight: 2 }}>
							{item.NumberOfResponse}
						</Typography>
					</span>
				</Box>
			</CardContent>
		</Card>
	);
};

export default FormList;
