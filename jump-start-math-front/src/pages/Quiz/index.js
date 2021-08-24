import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import FormGroup from "../../components/UI/FormGroup";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Label from "../../components/UI/Label";
import Titles from "../../components/UI/Titles";
import { sendQuestion, sendAttempt } from "../../services/requests/quiz";
import { StyledForm } from "../../components/Forms/ContactForm/styles";
import { Container, FooterContainer, Text } from "./styles";

import QuestionsGenerator from "../../services/questions/generation";

const Quiz = () => {
  const { user } = useSelector((state) => state.User);
  const [questionStartTime, setQuestionStartTime] = useState(new Date());
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    (() => {
      const genQuestions = new QuestionsGenerator();
      setCurrent(genQuestions[0]);
      setQuestions(genQuestions);
      setIsLoading(false);
    })();
  }, []);

  const handleSubmit = async () => {
    if (current.id < questions.length - 1) {
      setIsLoading(true);

      questions[current.id].time = Math.abs(new Date() - questionStartTime);

      const { data } = await sendQuestion({
        enunciado: current.text,
        nivel: current.nivel,
        resposta: parseFloat(answer.replace(',', '.')),
        valores: current.values,
        tempoGasto: (questions[current.id].time/60000),
      });

      questions[current.id].dbId = data.id;
      console.log(data);

      setAnswer("");
      setCurrent(questions[current.id + 1]);
      setQuestionStartTime(new Date());
      setIsLoading(false);
    } else {
      questions[current.id].time = Math.abs(new Date() - questionStartTime);

      const { data } = await sendQuestion({
        enunciado: current.text,
        nivel: current.nivel,
        resposta: parseFloat(answer.replace(',', '.')),
        valores: current.values,
        tempoGasto: (questions[current.id].time/60000),
      });

      questions[current.id].dbId = data.id;

      setIsFinished(true);
    }
  };

  const finishTry = () => {
    let fullTime = 0;

    for (let i = 0; i < questions.length; i++) {
      fullTime += questions[i].time;
      console.log(fullTime, questions[i].time);
    }

    console.log(fullTime);
  };

  return (
    <>
      <Header />
      <Titles
        titleName={isLoading ? "Carregando..." : `Pergunta ${current.id + 1}`}
      />
      <Container>
        {isLoading ? (
          "Carregando..."
        ) : isFinished ? (
          <>
            <h2>Você finalizou sua tentativa</h2>
          </>
        ) : (
          <>
            <Text>
              {current.text}
              <br />
              Não se esqueça de sempre usar números com, no máximo, duas casas
              decimais.
            </Text>

            <StyledForm
              onSubmit={() => {
                handleSubmit();
              }}
            >
              <FormGroup>
                <Label htmlFor={`answer1-${current.id}`}>Resposta</Label>
                <Input
                  id={`answer1-${current.id}`}
                  value={answer}
                  name="answer"
                  type="number"
                  step="0.01"
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Button type="submit">Responder</Button>
              </FormGroup>
            </StyledForm>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Quiz;
