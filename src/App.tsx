import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import "./App.css";
import LogoFatec from "./Components/LogoFatec";
import { useState } from "react";
import Question from "./Components/Question/Question";
import Questions from "./Resources/Questions";

function App() {

  const [option, setOption] = useState('')

  const handleOption = (e: string)  =>{
      alert(e)
  } 

  return (
    <div className="mainContainer">
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <LogoFatec width="200px" />
        <Typography variant="h5" color={"white"} align="center">
          Teste vocacional - Psicologia 5º Semestre / 2023
        </Typography>
        <hr style={{ width: "100%", margin: "20px 0" }}></hr>
        <Typography
          variant="body1"
          align="center"
          width={"80%"}
          color={"white"}
        >
          O teste a seguir consiste em ler as perguntas, e responder de acordo
          com os seus princípios, ou o que mais você acha estar certo.{" "}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          width={"80%"}
          color={"white"}
          marginTop={2}
        >
          {" "}
          Lembrando que não há apenas uma resposta correta; Todas são válidas.{" "}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          width={"80%"}
          color={"white"}
          marginTop={2}
        >
          {" "}
          No final, você terá o total das respostas baseado em cada opção.{" "}
        </Typography>
        <hr style={{ width: "100%", margin: "20px 0" }}></hr>
      </Container>

      <Container
        maxWidth="md"
        style={{ backgroundColor: "#6da1d1", padding: 40, marginTop: "40px", borderRadius:'10px' }}
      >
        <Question id={Questions[0].id} answers={Questions[0].answers} question={Questions[0].question} key={Questions[0].id} onSetAnswer={handleOption} value={option}/>
      </Container>
    </div>
  );
}

export default App;
