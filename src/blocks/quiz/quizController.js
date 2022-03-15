/* eslint-disable no-param-reassign */
import quizConstructor from './quizConstructor';
import quizRenderView from './quizRenderView';
import quizStepController from './quizStepController';
import quizMediator from './quizMediator';

import quizConstants from './quizConstants';
import quizStore from './quizStore';

import { formatQuizResultInfo } from './helpres';
import { debounce } from '../../helpers/helpers';

const buildResultCardTemplate = ({ result, descr }) => (
  `<div class="quiz__card-text">${result}</div><div class="quiz__card-descr">${descr}</div>`
);

const renderResult = (state, elements) => {
  if (state.visibilityResult === 'shown') {
    elements.form.classList.remove('quiz__section_shown');
    elements.result.classList.add('quiz__section_shown');
  }

  if (state.visibilityResult === 'hidden') {
    elements.form.classList.add('quiz__section_shown');
    elements.result.classList.remove('quiz__section_shown');
  }

  if (state.scoreState === 'low') {
    elements.resultScore.classList.add('quiz__result-score_low');
  }

  if (state.scoreState === 'medium') {
    elements.resultScore.classList.add('quiz__result-score_medium');
  }

  if (state.scoreState === 'hight') {
    elements.resultScore.classList.add('quiz__result-score_hight');
  }

  const resultCardTemplate = buildResultCardTemplate(state.result);
  elements.resultCard.innerHTML = resultCardTemplate;
  elements.resultScore.textContent = formatQuizResultInfo(state.score, state.stepsCount);
};

export default (element) => {
  const quizInstace = quizConstructor(element);
  const quizInstaceMediator = quizMediator(quizInstace);

  const { state, elements } = quizInstace;
  state.stepsCount = elements.steps.length;

  quizRenderView.renderStepsInfo(quizInstace);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const { score } = state;

    state.visibilityResult = 'shown';

    if (score < quizConstants.mediumRatingMinValue) {
      state.result = quizStore.lowRating;
      state.scoreState = 'low';
    }

    if (score > quizConstants.mediumRatingMinValue) {
      state.result = quizStore.hightRating;
      state.scoreState = 'hight';
    }

    if (score >= quizConstants.mediumRatingMinValue
      && score <= quizConstants.mediumRatingMaxValue) {
      state.result = quizStore.mediumRating;
      state.scoreState = 'medium';
    }

    renderResult(state, elements);
  };

  const windowReload = () => {
    window.location.reload();
  };

  const preventAutoReload = debounce(windowReload, quizConstants.userInactionDelay);

  elements.resetButton.addEventListener('click', () => windowReload);

  elements.form.addEventListener('submit', formSubmitHandler);

  elements.steps.forEach((step, index) => {
    quizStepController(step, index, quizInstaceMediator);
  });

  if (window.innerWidth >= quizConstants.userInactionObserverBreakpoint) {
    document.addEventListener('click', preventAutoReload);
  }
};
