export function renderPoll(aTitle, aName1, aName2, aScore1, aScore2) {
    const pollDiv = document.createElement('div');
    const titleEl = document.createElement('h3');
    const optionOneEl = document.createElement('h4');
    const optionTwoEl = document.createElement('h4');
    const scoreOneEl = document.createElement('p');
    const scoreTwoEl = document.createElement('p');

    titleEl.textContent = aTitle;
    optionOneEl.textContent = aName1;
    optionTwoEl.textContent = aName2;
    scoreOneEl.textContent = aScore1;
    scoreTwoEl.textContent = aScore2;

    pollDiv.append(titleEl, optionOneEl, optionTwoEl, scoreOneEl, scoreTwoEl);

    return pollDiv;

}