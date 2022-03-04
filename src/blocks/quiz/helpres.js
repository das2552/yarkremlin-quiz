export const formatQuizStepsInfo = (currentPointIndex, pointsCount) => {
  const currentPoint = currentPointIndex + 1;
  return `${currentPoint} из ${pointsCount} вопросов`;
};

export const getCorrectAnswerIndex = (answers) => {
  let answerIndex;

  answers.forEach((answer, index) => {
    if (answer.dataset.correctAnswer !== undefined) {
      answerIndex = index;
    }
  });

  return answerIndex;
};
