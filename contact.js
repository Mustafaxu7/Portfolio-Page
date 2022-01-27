"use strict"
const questions = document.querySelectorAll(".question")
questions.forEach((question) => {
    const btn = question.querySelector(".question-btn")
    console.log(btn)
    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })
})


const form = document.getElementById("my-form");
    async function handleSubmit(event) {
        event.preventDefault();
        let status = document.getElementById("status");
        let data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
        if (response.ok) {
            status.innerHTML = "You successfully submitted the form!";
            form.reset()
            status.classList.add("success")
        } 
        else {
            response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } 
            else {
                status.innerHTML = "Oops! There was a problem submitting your form"
                status.classList.add("error")
            }
            })
        }
        }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    form.addEventListener("submit", handleSubmit)

