const urlParams = new URL(window.location).searchParams;

const q = JSON.parse(atob(urlParams.get("q")));
const startTime = q.starttime;
const endTime = q.endtime;
const from = q.from;
const to = q.to;

let totalMilliseconds = endTime - startTime;
let elapsedMilliseconds = Date.now() - startTime;
let percentElapsed = (elapsedMilliseconds / totalMilliseconds * 100).toFixed(8);

window.addEventListener("DOMContentLoaded", () => {
    const percentageText = document.querySelector('#percentage-passed');
    const fromText = document.querySelector('#from-text');
    const toText = document.querySelector('#to-text');

    document.title = `Time passed from ${from} to ${to} in %`;
    fromText.textContent = from;
    toText.textContent = to;

    document.body.style.setProperty('--percentage', percentElapsed + '%');

    percentageText.textContent = percentElapsed + '%';

    setInterval(() => { updatePercentage() }, 100);

    function updatePercentage() {
        let elapsedMilliseconds = Date.now() - startTime;
        let percentElapsed = (elapsedMilliseconds / totalMilliseconds * 100).toFixed(6);

        document.body.style.setProperty('--percentage', percentElapsed + '%');
        percentageText.textContent = percentElapsed + '%';
    }
});