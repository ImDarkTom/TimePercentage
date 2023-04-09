const goButton = document.querySelector('#go-btn');

const fromDateElement = document.querySelector('#from-date');
const toDateElement = document.querySelector('#to-date');
const fromTextElement = document.querySelector('#from-text');
const toTextElement = document.querySelector('#to-text');

fromDateElement.value = null;
toDateElement.value = null;
fromTextElement.value = null;
toTextElement.value = null;

goButton.addEventListener("click", () => {
    const fromDatetime = new Date(fromDateElement.value).getTime();
    const toDatetime = new Date(toDateElement.value).getTime();

    const fromText =fromTextElement.value;
    const toText = toTextElement.value;

    const q = btoa(JSON.stringify({starttime: fromDatetime, endtime: toDatetime, from:fromText, to:toText}));
    window.location = `${location.protocol}//${location.host}/${location.pathname}?q=${q}`;
});