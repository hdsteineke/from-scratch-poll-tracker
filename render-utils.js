export function renderPoll(aTitle, aName1, aName2, aScore1, aScore2) {
    const pollDiv = document.createElement('div');
    const titleEl = document.createElement('h3');
    const optionOneEl = document.createElement('h4');
    const optionTwoEl = document.createElement('h4');
    const scoreOneEl = document.createElement('p');
    const scoreTwoEl = document.createElement('p');

    titleEl = aTitle.value;
    optionOneEl = aName1.textContent;
    optionTwoEl = aName2.textContent;
    scoreOneEl = aScore1.value;
    scoreTwoEl = aScore2.value;

    pollDiv.append(titleEl, optionOneEl, optionTwoEl, scoreOneEl, scoreTwoEl);

    return pollDiv;

}