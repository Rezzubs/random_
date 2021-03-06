const buttons = document.querySelectorAll(".button");

const coinflip = document.querySelector(".middle");

const leftContent = document.querySelector('.leftContent')
const rightContent = document.querySelector('.rightContent')
const middleContent = document.querySelector('.middleContent')
const content = document.querySelectorAll(".content");

const backButton = document.querySelector(".backButton")
const cover = document.querySelector('.cover');


let playAnimation = 1

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        // checks if the buttons have already been pressed
        for (i = 0; i < buttons.length; i++) { 
            if (buttons[i].classList.contains('toggleMargin') || buttons[i].classList.contains('extended')) {
                playAnimation = 0
                break
            } else {
                playAnimation = 1
            }
            
        }
        
        //main code
        if (playAnimation) {
            coinflip.classList.add('toggleMargin');

            if (button.classList.contains('left')) {
                leftContent.classList.remove('invisible');
                leftContent.classList.add('extended');
                rightContent.classList.add('invisible')
            } 
            else if (button.classList.contains('middle')) {
                middleContent.classList.remove('invisible');
                middleContent.classList.add('extended');
                rightContent.classList.add('invisible');
                leftContent.classList.add('invisible');
            } 
            else if (button.classList.contains('right')) {
                rightContent.classList.remove('invisible');
                rightContent.classList.add('extended')
                leftContent.classList.add('invisible')
            }
        }

        backButton.classList.add('setPointer')
    })
})

content.forEach(cnt => {
    cnt.addEventListener('click', () => {
        cover.classList.toggle('coverUncovered')
    })
})


backButton.addEventListener('click', () => {
    if (cover.classList.contains('coverUncovered')) {
        cover.classList.remove('coverUncovered')
        setTimeout(() => {
            coinflip.classList.remove('toggleMargin');
            content.forEach(cnt => {
                cnt.classList.remove('extended');
            })
        }, 600)
    } else {
        coinflip.classList.remove('toggleMargin');
        content.forEach(cnt => {
            console.log(cnt);
            
            cnt.classList.remove('extended');
        })
    }

    backButton.classList.remove('setPointer')
})