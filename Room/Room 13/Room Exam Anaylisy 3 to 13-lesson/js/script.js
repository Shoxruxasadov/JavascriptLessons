let resDiv = document.getElementById('res_div')

function a(event) {
    let val = event.target.value 
    let count = +val
    draw(count)
}

function draw(num) {
    let s = ''
    for(i=1; i<=num; i++){
        s += `<br> <input placeholder='${i}' type='text'> <br>`
    }
    resDiv.innerHTML = s
}