
const btn = document.getElementById("colorChange");

const changeBackground = () => {
    let val = "1234567890ABCDEF";
    let hashColor = "#";
    for (let i = 0; i < 6; i++) {
        hashColor = hashColor + val[Math.floor(Math.random() * 16)];
    }
    return hashColor
}
btn.addEventListener('click', triggerBackground)
function triggerBackground() {
    document.body.style.backgroundColor = changeBackground();
}

