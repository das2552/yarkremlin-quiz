import { formatQuizStepsInfo } from './helpres';

export default {
  renderSubmitButton: (props) => {
    const { state, elements } = props;

    if (state.visibilitySubmitButtonState === 'shown') {
      elements.submitButton.classList.remove('button_hidden');
    }

    if (state.disablingStepNavState === 'enabled') {
      elements.submitButton.disabled = false;
    }

    if (state.gettingResultProcessState === 'processing') {
      elements.submitButton.disabled = true;
    }

    if (state.gettingResultProcessState === 'finished') {
      elements.submitButton.disabled = false;
    }

    if (state.gettingResultProcessState === 'failed') {
      elements.submitButton.disabled = true;
    }
  },

  renderStepsInfo: (props) => {
    const { state, elements } = props;

    const stepsInfoValue = formatQuizStepsInfo(state.activeStepIndex, state.stepsCount);
    elements.stepsInfo.textContent = stepsInfoValue;
  },

  renderSteps: (props) => {
    const { state, elements } = props;

    const prevStep = elements.steps[state.activeStepIndex - 1];
    const currentStep = elements.steps[state.activeStepIndex];
    prevStep.classList.remove('quiz__step_shown');
    currentStep.classList.add('quiz__step_shown');
  },

  renderResultsData: (props) => {
    const { state, elements } = props;

    elements.resultsDataElement.value = state.score;
  },
};
