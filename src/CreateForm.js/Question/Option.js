import { Card,useTheme,FormControlLabel,RadioGroup,FormControl,FormLabel,Radio, TextField} from "@mui/material";
import React from "react";

const Option = (props) => {
  const theme = useTheme();
  return (
    <Card>
     <FormControl>
     <FormLabel sx={{marginBottom:2,marginLeft:2}}>Add option</FormLabel>
     <RadioGroup sx={{marginBottom:2}}>
    <FormControlLabel  
        control={<Radio />} 
        label={<TextField multiline rows={1}/>}
      />
    </RadioGroup>
    </FormControl>
    </Card>
  );
};

export default Option;