!function(){"use strict";var e=function(e){var t=e.state,s=e.elements;"shown"===t.visibilitySubmitButtonState&&s.submitButton.classList.remove("button_hidden"),"enabled"===t.disablingStepNavState&&(s.submitButton.disabled=!1),"processing"===t.gettingResultProcessState&&(s.submitButton.disabled=!0),"finished"===t.gettingResultProcessState&&(s.submitButton.disabled=!1),"failed"===t.gettingResultProcessState&&(s.submitButton.disabled=!0)},t=function(e){var t,s,n=e.state,i=e.elements,a=(t=n.activeStepIndex,s=n.stepsCount,"".concat(t+1," из ").concat(s," вопросов"));i.stepsInfo.textContent=a},s=function(e){var t=e.state,s=e.elements;"enabled"===t.disablingStepNavState&&(s.stepNav.disabled=!1),"hidden"===t.visibilityStepNavState&&s.stepNav.classList.add("button_hidden")},n=function(n){var i=function(e){return{state:{score:0,activeStepIndex:0,stepsCount:8,visibilitySubmitButtonState:"hidden",disablingSubmitButtonState:"disabled",gettingResultProcessState:"idle"},elements:{submitButton:e.querySelector(".quiz__submit"),stepsInfo:e.querySelector(".quiz__steps-info"),steps:Array.from(e.querySelectorAll(".quiz__step")),resultsDataElement:e.querySelector(".quiz__results-data")}}}(n),a=function(s){var n=s.state;return{updateScore:function(){n.score+=1,function(e){var t=e.state;e.elements.resultsDataElement.value=t.score}(s)},updateActiveStep:function(){n.activeStepIndex+=1,t(s),function(e){var t=e.state,s=e.elements,n=s.steps[t.activeStepIndex-1],i=s.steps[t.activeStepIndex];n.classList.remove("quiz__step_shown"),i.classList.add("quiz__step_shown")}(s)},showSubmitButton:function(){n.visibilitySubmitButtonState="shown",e(s)},enableSubmitButton:function(){n.disablingStepNavState="enabled",e(s)},getLastStepIndex:function(){return n.stepsCount-1},isLastStep:function(){return n.activeStepIndex===n.stepsCount-1}}}(i),r=i.state,c=i.elements;r.stepsCount=c.steps.length,t(i),n.addEventListener("submit",(function(e){e.preventDefault()})),c.steps.forEach((function(e,t){!function(e,t,n){var i=function(e){return{state:{correctAnswerIndex:null,selectedAnswerIndex:null,selectedAnswerState:"idle",disablingStepNavState:"disabled",visibilityStepNavState:"shown"},elements:{answersBox:e.querySelector(".quiz__items"),answers:Array.from(e.querySelectorAll(".quiz__item")),fields:Array.from(e.querySelectorAll(".quiz__field")),stepNav:e.querySelector(".quiz__step-nav")}}}(e),a=i.state,r=i.elements,c=r.answers,o=r.fields,u=r.stepNav;a.correctAnswerIndex=function(e){var t;return e.forEach((function(e,s){void 0!==e.dataset.correctAnswer&&(t=s)})),t}(c),u.addEventListener("click",(function(){n.updateActiveStep(),n.isLastStep()&&n.showSubmitButton()})),o.forEach((function(e,t){e.addEventListener("change",(function(){return e=t,void(null===a.selectedAnswerIndex&&(a.selectedAnswerIndex=e,a.disablingStepNavState="enabled",a.selectedAnswerIndex===a.correctAnswerIndex?(a.selectedAnswerState="correct",n.updateScore()):a.selectedAnswerState="incorrect",function(e){var t=e.state,s=e.elements,n=s.answers[t.correctAnswerIndex],i=n.querySelector(".quiz__answer"),a=n.querySelector(".quiz__icon");if("correct"===t.selectedAnswerState&&(n.classList.add("quiz__item_correct"),i.classList.remove("quiz__answer_hidden")),"incorrect"===t.selectedAnswerState){var r=s.answers[t.selectedAnswerIndex],c=r.querySelector(".quiz__answer"),o=r.querySelector(".quiz__icon");r.classList.add("quiz__item_incorrect"),o.classList.add("icon_incorrect"),o.classList.remove("icon_hidden"),c.classList.remove("quiz__answer_hidden")}a.classList.add("icon_correct"),a.classList.remove("icon_hidden"),s.fields.forEach((function(e){e.classList.add("quiz__field_hidden")})),s.answers.forEach((function(e){e.classList.add("quiz__item_disabled"),e.classList.remove("quiz__item_hover")}))}(i),s(i),n.isLastStep()&&n.enableSubmitButton()));var e}))})),t===n.getLastStepIndex()&&(a.visibilityStepNavState="hidden",s(i))}(e,t,a)}))};Array.from(document.querySelectorAll(".quiz")).forEach((function(e){n(e)}))}();
//# sourceMappingURL=index.js.map