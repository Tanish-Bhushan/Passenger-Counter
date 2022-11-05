let count=0
function increment() {
    let countEl = document.getElementById("entry")
    count=Number(countEl.textContent)
    count+=1
    countEl.textContent = count
}

function decrement() {
    let countEl = document.getElementById("entry")
    if (countEl.textContent > 0)
        countEl.textContent -= 1
}

function reload() {
    let saveEl = document.getElementById("save")
    let countEl = document.getElementById("entry")
    saveEl.textContent = "Previous Entries : "
    countEl.textContent = 0
}

function save() {
    let saveEl = document.getElementById("save")
    let countEl = document.getElementById("entry")
    let countStr = countEl.textContent + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
