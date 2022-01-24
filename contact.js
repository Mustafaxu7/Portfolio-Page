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