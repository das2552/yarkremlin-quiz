import quizRenderView from './quizRenderView';

export default (quizInstace) => {
  const { state } = quizInstace;

  const updateScore = () => {
    state.score += 1;
    quizRenderView.renderResultsData(quizInstace);
  };

  const updateActiveStep = () => {
    state.activeStepIndex += 1;
    quizRenderView.renderStepsInfo(quizInstace);
    quizRenderView.renderSteps(quizInstace);
  };

  const showSubmitButton = () => {
    state.visibilitySubmitButtonState = 'shown';
    quizRenderView.renderSubmitButton(quizInstace);
  };

  const getLastStepIndex = () => state.stepsCount - 1;

  const isLastStep = () => state.activeStepIndex === state.stepsCount - 1;

  return {
    updateScore,
    updateActiveStep,
    showSubmitButton,
    getLastStepIndex,
    isLastStep,
  };
};
