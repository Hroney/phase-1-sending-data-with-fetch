// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        })
    })
        .then((response) => response.json())
        .then((data) => {
            const body = document.querySelector("body");
            body.innerHTML = `<p>${data.id}</p>`;
        })
        .catch((error) => {
            const body = document.querySelector("body");
            body.innerHTML = `<p>${error}</p>`;
        })
};
