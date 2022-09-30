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
	return <div>{id}</div>;
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
