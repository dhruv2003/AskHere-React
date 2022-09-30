import React, { useEffect, useState } from "react";
import classes from "./Choices.module.css";

const Choices = ({ options: choices }) => {
	const [res, setRes] = useState([]);
	const [options, setOptions] = useState(choices);


	return (
		<>
			{options.map((option) => {
				return (
					<div key={option.id} onClick={()=>setRes(option.name)}>
						{res === option.name ? (
							<div className={classes.selected}>{option.name}</div>
						):<div>{option.name}</div>}
                        
					</div>
				);
			})}
		</>
	);
};

export default Choices;
