const coinflip = document.getElementById('coinflip')
let rotateCount = 0

function changeContent() {
    let result = Math.round(Math.random())
    

    if (result == coinflip.innerHTML) {
        rotateCount += 20
        coinflip.style.filter = "hue-rotate(" + rotateCount.toString() +  "deg)";
    } else {
        rotateCount = 0
        coinflip.style.filter = "hue-rotate(0deg)"
    }
    
    console.log(rotateCount);
    
    coinflip.innerHTML = result
};

coinflip.onclick = changeContent