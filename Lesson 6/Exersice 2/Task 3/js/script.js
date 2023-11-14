let inp = document.getElementById("inp");
let text = document.getElementById("text");

function draw() {
    if (inp.value.search('Salom')==0 || inp.value.search('salom')==0) {
            text.innerText += ' ' + inp.value
    }else{
            text.innerText += ' Salom ' + inp.value
    }
}