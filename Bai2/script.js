let createArrBtn = document.getElementById('createArrBtn')
let arr = document.getElementById('arr')
let arrSorted = document.getElementById('arrSorted')
let asc = document.getElementById('asc')
let desc = document.getElementById('desc')
let index = document.getElementById('index')
let value = document.getElementById('value')
let addBtn = document.getElementById('addBtn')

var a = []
function tao_mang() {
    a = []
    for (let i = 0; i < Math.floor(Math.random() * 10) + 10; i++) {
        a.push(Math.floor(Math.random() * 90) + 10)
    }
    arr.innerHTML = a
    arrSorted.innerHTML = ''
    index.value = ''
    value.value = ''
    asc.checked = false
    desc.checked = false
}

function sap_tang() {
    arrSorted.innerHTML = a.sort()
}
function sap_giam() {
    arrSorted.innerHTML = a.sort(function(a, b){return b - a})
}

function sap_xep() {
    asc.onchange = sap_tang
    desc.onchange = sap_giam
}
sap_xep()

addBtn.onclick = function() {
    let i = index.value
    let v = value.value
    if (i !== '' && v !== '') {
        a.splice(i, 0, v)
        arrSorted.innerHTML = a
    }
}


