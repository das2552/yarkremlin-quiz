export default (element) => {
  const initialState = {
    score: 0,
    scoreState: null,
    activeStepIndex: 0,
    stepsCount: 8,
    visibilitySubmitButtonState: 'hidden',
    disablingSubmitButtonState: 'disabled',
    visibilityResult: 'hidden',
    result: null,
    userActivityState: 'idle',
  };

  const state = {
    ...initialState,
  };

  const elements = {
    submitButton: element.querySelector('.quiz__submit'),
    stepsInfo: element.querySelector('.quiz__steps-info'),
    steps: Array.from(element.querySelectorAll('.quiz__step')),
    resultsDataElement: element.querySelector('.quiz__results-data'),
    form: element.querySelector('.quiz__form'),
    result: element.querySelector('.quiz__result'),
    resultScore: element.querySelector('.quiz__result-score'),
    resultCard: element.querySelector('.quiz__result-card'),
    resetButton: element.querySelector('.quiz__reset'),
  };

  return {
    state,
    elements,
    initialState,
  };
};
