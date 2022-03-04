export default (element) => {
  const state = {
    correctAnswerIndex: null,
    selectedAnswerIndex: null,
    selectedAnswerState: 'idle',
    disablingStepNavState: 'disabled',
    visibilityStepNavState: 'shown',
  };

  const elements = {
    answersBox: element.querySelector('.quiz__items'),
    answers: Array.from(element.querySelectorAll('.quiz__item')),
    fields: Array.from(element.querySelectorAll('.quiz__field')),
    stepNav: element.querySelector('.quiz__step-nav'),
  };

  return {
    state,
    elements,
  };
};
