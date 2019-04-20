const API_URL = "https://football-players-b31f2.firebaseio.com/players.json";


export function getPlayers() {
    return fetch(`${API_URL}`)
    .then((response) => Promise.resolve(response.json()))
    .catch(err => {
        alert('Algo salió mal. Intenta nuevamente más tarde.');
        return Promise.reject(err);
    })
}

