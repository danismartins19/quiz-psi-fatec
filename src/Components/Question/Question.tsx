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

const Question = ({id, answers, question, onSetAnswer, value}: QuestionCardType) => {

  const [answered, setAnswered] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSetAnswer((event.target as HTMLInputElement).value);
    setAnswered(true)
  };

  return (
    <>
      <FormControl disabled= {answered}>
        <FormLabel id="demo-controlled-radio-buttons-group">{id} - {question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="a" control={<Radio />} label={`a - ${answers.a}`} />
          <FormControlLabel value="b" control={<Radio />} label={`b - ${answers.b}`} />
          <FormControlLabel value="c" control={<Radio />} label={`c - ${answers.c}`} />
          <FormControlLabel value="d" control={<Radio />} label={`d - ${answers.d}`} />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Question;
