export default (element) => {
  const state = {
    score: 0,
    activeStepIndex: 0,
    stepsCount: 8,
    visibilitySubmitButtonState: 'hidden',
    disablingSubmitButtonState: 'disabled',
    gettingResultProcessState: 'idle',
  };

  const elements = {
    submitButton: element.querySelector('.quiz__submit'),
    stepsInfo: element.querySelector('.quiz__steps-info'),
    steps: Array.from(element.querySelectorAll('.quiz__step')),
    resultsDataElement: element.querySelector('.quiz__results-data'),
  };

  return {
    state,
    elements,
  };
};
