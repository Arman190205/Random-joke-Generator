const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('joke');

jokeButton.addEventListener('click', fetchJoke);

async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single');
        const data = await response.json();
        if (data.joke) {
            jokeDisplay.textContent = data.joke;
        } else {
            jokeDisplay.textContent = 'No joke found. Please try again.';
        }
    } catch (error) {
        jokeDisplay.textContent = 'Oops! Something went wrong. Please try again.';
        console.error('Error fetching joke:', error);
    }
}