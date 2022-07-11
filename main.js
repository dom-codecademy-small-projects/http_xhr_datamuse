// Information to reach API
const url = "https://api.datamuse.com/words?";
const queryParams = "rel_rhy="


// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
    event.preventDefault()
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild)
    };
    getSuggestions();
};

submit.addEventListener('click', displaySuggestions)