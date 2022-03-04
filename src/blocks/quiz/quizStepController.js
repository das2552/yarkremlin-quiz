import quizStepConstructor from './quizStepConstructor';
import quizStepRenderView from './quizStepRenderView';
import { getCorrectAnswerIndex } from './helpres';

export default (element, elementIndex, quizInstaceMediator) => {
  const quizStepInstace = quizStepConstructor(element);
  const { state, elements: { answers, fields, stepNav } } = quizStepInstace;

  state.correctAnswerIndex = getCorrectAnswerIndex(answers);

  const stepFieldChangeHandler = (index) => {
    if (state.selectedAnswerIndex !== null) return;

    state.selectedAnswerIndex = index;
    state.disablingStepNavState = 'enabled';

    if (state.selectedAnswerIndex === state.correctAnswerIndex) {
      state.selectedAnswerState = 'correct';
      quizInstaceMediator.updateScore();
    } else {
      state.selectedAnswerState = 'incorrect';
    }

    quizStepRenderView.renderAnswer(quizStepInstace);
    quizStepRenderView.renderStepNav(quizStepInstace);
  };

  const stepNavClickHandler = () => {
    quizInstaceMediator.updateActiveStep();

    if (quizInstaceMediator.isLastStep()) quizInstaceMediator.showSubmitButton();
  };

  stepNav.addEventListener('click', stepNavClickHandler);

  fields.forEach((field, fieldIndex) => {
    field.addEventListener('change', () => stepFieldChangeHandler(fieldIndex));
  });

  if (elementIndex === quizInstaceMediator.getLastStepIndex()) {
    state.visibilityStepNavState = 'hidden';
    quizStepRenderView.renderStepNav(quizStepInstace);
  }
};
