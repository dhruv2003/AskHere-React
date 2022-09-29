import Choice from "./Choice";
import React, { useState } from "react";

const Option = ({ choices, handleChoiceChange, AddChoice, setChoices }) => {
	const [last, setLast] = useState(choices.length - 1);

	return (
		<>
			{choices.map((choice, index) => {
				return (
					<Choice
						choice={choice}
						handleChoiceChange={handleChoiceChange}
						AddChoice={AddChoice}
						last={last}
						choices={choices}
						index={index}
						setChoices={setChoices}
					/>
				);
			})}
			
		</>
	);
};

export default Option;

// [
//   "vedantika",
//   "pranay"
// ]
