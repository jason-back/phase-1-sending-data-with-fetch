function submitData(name, email) {
    const formData = {
        name: `${name}`,
        email: `${email}`,
    };
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((res) => res.json())
        .then((data) => {
            document.body.innerHTML = data.id;
        })
        .catch((error) => {
            document.body.innerHTML = error.message;
        });
}
submitData();
