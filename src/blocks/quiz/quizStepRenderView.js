export default {
  renderAnswer: (props) => {
    const { state, elements } = props;
    const correctAnswerElement = elements.answers[state.correctAnswerIndex];
    const correctAnswerDescriptionElement = correctAnswerElement.querySelector('.quiz__answer');
    const correntAnswerIconElement = correctAnswerElement.querySelector('.quiz__icon');

    if (state.selectedAnswerState === 'correct') {
      correctAnswerElement.classList.add('quiz__item_correct');
      correctAnswerDescriptionElement.classList.remove('quiz__answer_hidden');
    }

    if (state.selectedAnswerState === 'incorrect') {
      const selectedAnswerElement = elements.answers[state.selectedAnswerIndex];
      const selectedAnswerDescriptionElement = selectedAnswerElement.querySelector('.quiz__answer');
      const selectedAnswerIconElement = selectedAnswerElement.querySelector('.quiz__icon');

      selectedAnswerElement.classList.add('quiz__item_incorrect');
      selectedAnswerIconElement.classList.add('icon_incorrect');
      selectedAnswerIconElement.classList.remove('icon_hidden');
      selectedAnswerDescriptionElement.classList.remove('quiz__answer_hidden');
    }

    correntAnswerIconElement.classList.add('icon_correct');
    correntAnswerIconElement.classList.remove('icon_hidden');

    elements.fields.forEach((answerField) => {
      answerField.classList.add('quiz__field_hidden');
    });

    elements.answers.forEach((answer) => {
      answer.classList.add('quiz__item_disabled');
      answer.classList.remove('quiz__item_hover');
    });
  },

  renderStepNav: (props) => {
    const { state, elements } = props;

    if (state.disablingStepNavState === 'enabled') {
      elements.stepNav.disabled = false;
    }

    if (state.visibilityStepNavState === 'hidden') {
      elements.stepNav.classList.add('button_hidden');
    }
  },
};
