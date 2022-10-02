import React, { useEffect, useState } from "react";
import classes from "./Choices.module.css";
import {motion} from 'framer-motion'
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const Choices = ({ options: choices, handleChange }) => {
	const [res, setRes] = useState();
	// const [options, setOptions] = useState(choices);
	useEffect(()=>{
		handleChange(res)
	},[res])
	
	return (
		<>
			{choices.map((option) => {
				let chosen=res===option.name
				return (
					<motion.div
						key={option.id}
						onClick={() => setRes(option.name)}
						className={`${classes.option} ${chosen && classes.selected}`}
						whileHover={{
							x:20
						}}
					>
						{chosen ? (
							<RadioButtonCheckedIcon />
						) : (
							<RadioButtonUncheckedIcon />
						)}
						<div>{option.name}</div>
					</motion.div>
				);
			})}
		</>
	);
};

export default Choices;
