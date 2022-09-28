import { Card, TextField, useTheme,MenuItem,FormControl,InputLabel,Select } from "@mui/material";
import React from "react";
import Option from "./Option";
import AddOptionsButton from "./AddOptionsButton";
import { Add } from "@mui/icons-material";

const Question = (props) => {
  const theme = useTheme();
  const [options, setOptions] = React.useState([
		<Option/>
	]);

  const handleAddOption = () => {
		setOptions([
			...options,
			<Option/>
		]);
	};


  return (
    <Card
      sx={{
        padding: 5,
        backgroundColor: theme.palette.primary.main,
        // borderRadius="20px",
      }}
    >
      <TextField
        variant="standard"
        fullWidth
        multiline
        label="Question Title"
        sx={{ marginBottom: 2 }}
      />
      <FormControl fullWidth sx={{marginBottom:2}}>
        <InputLabel >Input Type</InputLabel>
        <Select>
          <MenuItem >Multiple Choices</MenuItem>
          <MenuItem >Paragraph</MenuItem>
        </Select>
      </FormControl>
      <Option/>
      <AddOptionsButton handleAddOption={handleAddOption}/>
    </Card>
  );
};

export default Question;
