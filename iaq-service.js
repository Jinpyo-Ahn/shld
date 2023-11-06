const fetchUri = "http://localhost:13000/iaqData";

function post(message) {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: message.toString(),
    };

    return fetch(fetchUri, fetchOptions)
        .then((res) => res.json())
        .then(() => true)
        .catch((err) => {
            console.error(err);
            return false;
        });
}

export { post };
