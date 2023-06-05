import { Container, Typography } from "@mui/material";
import "./App.css";
import LogoFatec from "./Components/LogoFatec";
import { useState } from "react";
import Question from "./Components/Question/Question";
import Questions from "./Resources/Questions";
import { ResultCard } from "./Components/ResultCard/ResultCard";
import Results from "./Resources/Results";

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [countD, setCountD] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const handleOption = (e: string) => {
    setTotalCount(totalCount + 1);
    switch (e) {
      case "a":
        setCountA(countA + 1);
        break;
      case "b":
        setCountB(countB + 1);
        break;
      case "c":
        setCountC(countC + 1);
        break;
      case "d":
        setCountD(countD + 1);
        break;
    }
  };

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
        style={{
          backgroundColor: "#6da1d1",
          padding: 40,
          marginTop: "40px",
          borderRadius: "10px",
        }}
      >
        {Questions.map((item, i) => (
          <>
            <Question
              id={item.id}
              answers={item.answers}
              question={item.question}
              key={i}
              onSetAnswer={handleOption}
            />
            <hr style={{ width: "100%", margin: "20px 0" }}></hr>
          </>
        ))}

        {totalCount == 20 && (
          <>
            <Typography variant="body1" color={"white"} align="center">
              Total de opções A selecionadas: {countA}
            </Typography>
            <hr style={{ width: "100%", margin: "10px 0" }}></hr>
            <Typography variant="body1" color={"white"} align="center">
              Total de opções B selecionadas: {countB}
            </Typography>
            <hr style={{ width: "100%", margin: "10px 0" }}></hr>
            <Typography variant="body1" color={"white"} align="center">
              Total de opções C selecionadas: {countC}
            </Typography>
            <hr style={{ width: "100%", margin: "10px 0" }}></hr>
            <Typography variant="body1" color={"white"} align="center">
              Total de opções D selecionadas: {countD}
            </Typography>

            <Typography
              variant="body1"
              style={{ margin: "40px 0" }}
              color={"white"}
              align="center"
            >
              De acordo com a opção mais assinalada, identifique o quadro de
              sua vocação.
            </Typography>
            {Results.map((item, i) => (
              <ResultCard
                key={i}
                title={item.title}
                description={item.description}
                careerTitle={item.careerTitle}
                careers={item.careers}
              />
            ))}
          </>
        )}
      </Container>
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <Typography variant="body1" color={"white"} align="center" marginTop={"20px"}>
          Uma realização dos acadêmicos da turma de Psicologia
        </Typography>
        <hr style={{ width: "100%", margin: "10px 0" }}></hr>
        <Typography
          variant="body1"
          align="center"
          width={"80%"}
          color={"white"}
        >
          Ana Jardim, João Andrade, Bruna Hey, Maria Gabriela Costanski, Thayane
          Zegulhan, Sabrina Raimundo
        </Typography>
      </Container>
    </div>
  );
}

export default App;
