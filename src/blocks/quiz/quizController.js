import quizConstructor from './quizConstructor';
import quizRenderView from './quizRenderView';
import quizStepController from './quizStepController';
import quizMediator from './quizMediator';

export default (element) => {
  const quizInstace = quizConstructor(element);
  const quizInstaceMediator = quizMediator(quizInstace);

  const { state, elements } = quizInstace;
  state.stepsCount = elements.steps.length;

  quizRenderView.renderStepsInfo(quizInstace);

  element.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  elements.steps.forEach((step, index) => {
    quizStepController(step, index, quizInstaceMediator);
  });
};
