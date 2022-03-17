export function renderPoll(aTitle, aName1, aScore1, aName2, aScore2) {
    const pollDiv = document.createElement('div');
    const titleEl = document.createElement('h3');
    const optionOneEl = document.createElement('h4');
    const optionTwoEl = document.createElement('h4');
    const scoreOneEl = document.createElement('p');
    const scoreTwoEl = document.createElement('p');

    titleEl.textContent = aTitle;
    optionOneEl.textContent = aName1;
    scoreOneEl.textContent = aScore1;
    optionTwoEl.textContent = aName2;
    scoreTwoEl.textContent = aScore2;

    pollDiv.append(titleEl, optionOneEl, scoreOneEl, optionTwoEl, scoreTwoEl);

    pollDiv.classList.add('.poll');

    return pollDiv;

}