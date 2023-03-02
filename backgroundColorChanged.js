
const btn = document.getElementById("colorChange");
let hashColor
const changeBackground = () => {
    let val = "1234567890ABCDEF";
    hashColor = "#";
    for (let i = 0; i < 6; i++) {
        hashColor = hashColor + val[Math.floor(Math.random() * 16)];
    }
    return hashColor
}
btn.addEventListener('click', triggerBackground)
function triggerBackground() {
    document.body.style.backgroundColor = changeBackground();
    console.log(hashColor)
    console.log(this)
}

