let b_save = document.getElementById("b_save")
let b_delete = document.getElementById("b_delete")
let word = document.getElementById("word")

function save() {
  let dates = word.value
  localStorage.datesNP = dates
}

b_save.addEventListener("click",save)

function deleta() {
  word.value = ""
}

b_delete.addEventListener("click",deleta)

function mostrar() {
  if (localStorage.datesNP) {
    let date = localStorage.datesNP
    word.value = date
  } else {
    word.value = "SEM DADOS"
  }
}

window.addEventListener("load",mostrar)

