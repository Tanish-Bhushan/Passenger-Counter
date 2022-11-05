let saveEl = document.getElementById("save")
let countEl = document.getElementById("entry")
let count = 0

function increment() {

    count += 1
    countEl.textContent = count
}

function decrement() {

    if (countEl.textContent > 0)
        countEl.textContent -= 1
}

function reload() {

    saveEl.textContent = "Previous Entries : "
    countEl.textContent=0
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
