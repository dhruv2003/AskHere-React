import {
  Card,
  TextField,
  useTheme,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  choice,
} from "@mui/material";
import React, { useState } from "react";
import Option from "./Option";
import AddOptionsButton from "./AddOptionsButton";
import { Add } from "@mui/icons-material";
import { flexbox } from "@mui/system";
import ShortAnswer from "./ShortAnswer";

const Question = (props) => {
  const theme = useTheme();
  const [type, setType] = useState("choice");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleAddOption = () => {};

  return (
    <Card
      sx={{
        padding: 5,
        backgroundColor: theme.palette.primary.main,
        marginTop: 10,
        // borderRadius="20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          variant="standard"
          fullWidth
          multiline
          label="Question Title"
          sx={{ margin: 2 }}
        />
        <Select
          sx={{ margin: 2 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"choice"}>Multiple Choice</MenuItem>
          <MenuItem value={"string"}>Short Answer</MenuItem>
        </Select>
      {(type=="choice")?<Option/>:<CustomAnswer/>}
      </Box>
      {/* <FormControl fullWidth sx={{marginBottom:2}}>
        <InputLabel >Input Type</InputLabel>
        <Select>
          <MenuItem >Multiple Choices</MenuItem>
          <MenuItem >Paragraph</MenuItem>
        </Select>
      </FormControl>
      <Option/>
      <AddOptionsButton handleAddOption={handleAddOption}/> */}
    </Card>
  );
};

export default Question;

// {
//   title,
//   description,
//   questions:[
//       {
//           question:"",
//           type:"",
//           choices:[],
//           answer:""
//       }
//   ]
// }
