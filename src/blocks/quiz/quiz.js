import quizController from './quizController';

export default () => {
  const quizElements = Array.from(document.querySelectorAll('.quiz'));

  quizElements.forEach((quizElement) => {
    quizController(quizElement);
  });
};
