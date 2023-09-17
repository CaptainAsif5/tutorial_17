var counter = document.getElementById("counter");
function like() {
    var num = counter.innerText;
    counter.innerText = ++num;
}
function dislike() {
    var num = counter.innerText;
    if (num > 0) {
        counter.innerText = --num;
    }
}
