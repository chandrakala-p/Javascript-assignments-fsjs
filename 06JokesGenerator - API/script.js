const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn")


jokeBtn.addEventListener("click", () => {
    fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319"
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            joke.innerHTML = data.joke;
        });
})

