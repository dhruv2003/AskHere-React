import Choice from "./Choice";
import React from "react";

const Option = ({ choices, handleChoiceChange, AddChoice, setChoices }) => {
	

	return (
		<>
			{choices.map((choice, index) => {
				return (
					<Choice
						key={index}
						choice={choice}
						handleChoiceChange={handleChoiceChange}
						AddChoice={AddChoice}
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

