import { Box ,Paper, Typography} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

let data = {
	name: "FY Rep Forms",
	description: "Give your best",
	questions: [
    {
      type:"answer",
      title:"Name"
    },
		{
			type: "choice",
			title: "Position: ",
			options: [
				{
					id: 0,
					name: "Tech Team",
				},
				{
					id: 1,
					name: "Marketing Team",
				},
				{
					id: 2,
					name: "Creative",
				},
			],
		}
	],
};

const UserForm = () => {
	const { id } = useParams();
	return <Box sx={{
		 textAlign:"center",
		 
	}}>
		<Paper sx={{
			width:"50vw",
			padding:"4%",
			borderRadius:"5%"
						
		}} className="header">
			<div className="headerName">{data.name}</div>
			<div className="headerDesc">{data.description}</div>
		</Paper>
	</Box>;
};

export default UserForm;

// {
//   name,
//   description,
//   questions:[
//     {
//       type:"choice",
//       title,
//       options:[
//         {
//           id:0,
//           name:""
//         }
//       ]
//     }
//   ]
// }
