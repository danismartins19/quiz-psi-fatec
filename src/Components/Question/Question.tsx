import * as React from 'react';
import QuestionCardType from "../../Types/QuestionCardType";
//import styles from "./styles.modules.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Question = ({id, answers, question, onSetAnswer}: QuestionCardType) => {

  const [answered, setAnswered] = React.useState(false);
  const [value,setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSetAnswer((event.target as HTMLInputElement).value);
    setValue(event.target.value);
    setAnswered(true)
  };

  return (
    <>
      <FormControl style={{color:"white"}} disabled= {answered}>
        <FormLabel style={{color:"white"}} id="demo-controlled-radio-buttons-group">{id} - {question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="a" control={<Radio color='success'/>} label={`a - ${answers.a}`} />
          <FormControlLabel value="b" control={<Radio color='success'/>} label={`b - ${answers.b}`} />
          <FormControlLabel value="c" control={<Radio color='success'/>} label={`c - ${answers.c}`} />
          <FormControlLabel value="d" control={<Radio color='success'/>} label={`d - ${answers.d}`} />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Question;
