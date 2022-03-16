// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const currentPollContainer = document.querySelector('#current-poll-container');
const pastPollsContainer = document.querySelector('#past-polls-container');

const pollNameInput = document.querySelector('#poll-name-input');
const optionOneInput = document.querySelector('#option-one-input');
const optionTwoInput = document.querySelector('#option-two-input');
const makePollButton = document.querySelector('#make-poll-button');

const pollLabel = document.querySelector('#poll-name');
const optionOneLabel = document.querySelector('#option-one-name');
const optionTwoLabel = document.querySelector('#option-two-name');

const optionOneAddButton = document.querySelector('#option-one-add-button');
const optionOneSubtractButton = document.querySelector('#option-one-subtract-button');
const optionTwoAddButton = document.querySelector('#option-two-add-button');
const optionTwoSubtractButton = document.querySelector('#option-two-subtract-button');
const resetPollButton = document.querySelector('#reset-poll-button');

let title = '';
let name1 = '';
let name2 = ''; 
let score1 = 0;
let score2 = 0;
let pastPolls = [];

// set event listeners 
makePollButton.addEventListener('click', () => {
    title = pollNameInput.value;
    name1 = optionOneInput.value;
    name2 = optionTwoInput.value;

    pollNameInput.value = '';
    optionOneInput.value = '';
    optionTwoInput.value = '';

    refreshCurrentPoll();

    // refresh the current game element with new data by calling the appropriate function
    //refreshCurrentGameEl();
});

optionOneAddButton.addEventListener('click', () => {
  // increment the current state for team one's score
    score1++;

    refreshCurrentPoll();
});

optionTwoAddButton.addEventListener('click', () => {
  // increment the current state for team one's score
    score2++;

    refreshCurrentPoll();

  // refresh the current game element with new data by calling the appropriate function
  //refreshCurrentGameEl();
});

optionOneSubtractButton.addEventListener('click', () => {
  // increment the current state for team one's score
    score1--;

    refreshCurrentPoll();

  // refresh the current game element with new data by calling the appropriate function
  //refreshCurrentGameEl();
});

optionTwoSubtractButton.addEventListener('click', () => {
  // increment the current state for team one's score
    score2--;

    refreshCurrentPoll();

  // refresh the current game element with new data by calling the appropriate function
  //refreshCurrentGameEl();
});

resetPollButton.addEventListener('click', () => {

    const currentPoll = {

        title: title,
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2
    };

    pastPolls.push(currentPoll);


});




function refreshCurrentPoll() {
    currentPollContainer.textContent = '';

    pollLabel.textContent = title;
    optionOneLabel.textContent = name1;
    optionTwoLabel.textContent = name2;

    const pollEl = renderPoll(title, name1, name2, score1, score2);

    currentPollContainer.append(pollEl);
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
