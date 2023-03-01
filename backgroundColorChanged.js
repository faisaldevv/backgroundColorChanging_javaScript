
const btn = document.getElementById("colorChange");

let combineColor;
const changeBackground = () => {
    let val = "1234567890ABCDEF";
    let hashColor = "#";
    for (let i = 0; i < 6; i++) {
        combineColor = hashColor + val[Math.floor(Math.random() * 16)];
    }
    return combineColor
    console.log(combineColor);
}
btn.addEventListener('click', triggerBackground)
function triggerBackground() {
    document.body.style.backgroundColor = combineColor

}

