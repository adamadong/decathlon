var diceElements = document.querySelectorAll('.dice');
var dotImages = document.querySelectorAll('.dot');
var resultElement = document.getElementById('result');
let numDom = document.querySelector('.number')
var num = 6
var numtext =['You are ready to begin','You can try five more times','You can try four more times','You can try three more times', 'You can try two more times', 'You can try only one more time', 'You can not try again']
numDom.innerHTML = numtext[6-num]
function startRoll() {
    if(num==0){
        alert(numtext[6])
        return
    }
    num--
    numDom.innerHTML = numtext[6 - num]
    const dice = document.getElementById('dice1');
    diceElements.forEach(item=>{
        const randomNumber = Math.floor(Math.random() * 4) + 2;
        item.style.transition = `${randomNumber}s all ease`
        item.style.transform = 'rotateX(3600deg)';
    })
    dotImages.forEach(item => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        item.src = `dot${randomNumber}.jpg`;
    })
    setTimeout(function () {
        
        diceElements.forEach(item => {
            item.style.transition = 'none'
            item.style.transform = 'rotateX(0deg)';
        })
        dotImages.forEach(item=>{
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            item.src= `dot${randomNumber}.jpg`;
            item.setAttribute('data-id', randomNumber)
        })
        // 计算骰子的和
        var sum = Array.from(dotImages).reduce(function (total, dotImage) {
            // 解析图片的数字
            var number = parseInt(dotImage.getAttribute('data-id'));
            return total + number;
        }, 0);

        // 显示结果
        resultElement.textContent = `Votre score: ${sum}`;
    }, 2000);
}
