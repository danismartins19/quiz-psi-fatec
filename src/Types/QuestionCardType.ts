type QuestionCardType = {
  id: number,
  question: string,
  value: string,
  onSetAnswer: (value: string) => void  ,
  answers: {
    a: string,
    b: string,
    c: string,
    d: string
  }
  
}
export default QuestionCardType;