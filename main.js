const slot1 = document.querySelector('.slot1')
const slot2= document.querySelector('.slot2')
const slot3 = document.querySelector('.slot3')
const button = document.querySelector('.spin')
const moneyShow = document.querySelector('.money')
const select = document.querySelector('select')

const resoult = ['J', 'Q', 'K', 'A', '🧧', '🎁', '💵']


const handle = () => {
    let money = +moneyShow.textContent

    const load = setInterval(() => {
        const random1 = Math.floor(Math.random() * resoult.length)
        const random2 = Math.floor(Math.random() * resoult.length)
        const random3 = Math.floor(Math.random() * resoult.length)

        slot1.innerHTML = resoult[random1]
        slot2.innerHTML = resoult[random2]
        slot3.innerHTML = resoult[random3]
    }, 50)
    
    


    setTimeout(() => {
        clearInterval(load)

        const random1 = Math.floor(Math.random() * resoult.length)
        const random2 = Math.floor(Math.random() * resoult.length)
        const random3 = Math.floor(Math.random() * resoult.length)

        slot1.innerHTML = resoult[random1]
        slot2.innerHTML = resoult[random2]
        slot3.innerHTML = resoult[random3]

        if (slot1.textContent === 'J'
            && slot2.textContent === 'J'
            && slot3.textContent === 'J') {
            money += select.value * 1.5
            moneyShow.innerHTML = money
        }
        if (slot1.textContent === 'Q'
            && slot2.textContent === 'Q'
            && slot3.textContent === 'Q') {
            money += select.value * 2
            moneyShow.innerHTML = money
        }
        if (slot1.textContent === 'K'
            && slot2.textContent === 'K'
            && slot3.textContent === 'K') {
            money += select.value * 2.5
            moneyShow.innerHTML = money
        }
        if (slot1.textContent === 'A'
            && slot2.textContent === 'A'
            && slot3.textContent === 'A') {
            money += select.value * 3.5
            moneyShow.innerHTML = money
        }
        if (slot1.textContent === 'J'
            && slot2.textContent === 'Q'
            && slot3.textContent === 'K') {
            money += select.value * 4
            moneyShow.innerHTML = money
            console.log(`Thắng Lớn Sảnh JQK +${select.value * 4}`);
        }
        if (slot1.textContent === 'Q'
            && slot2.textContent === 'K'
            && slot3.textContent === 'A') {
            money += select.value * 8
            moneyShow.innerHTML = money
            console.log(`Thắng Lớn Sảnh QKA +${select.value * 8}`);
        }
        if (slot1.textContent === '🎁'
            && slot2.textContent === '🎁'
            && slot3.textContent === '🎁') {
            money += select.value * 15
            console.log(`Thắng Lớn Hũ 🎁 +${select.value * 15}`);
            moneyShow.innerHTML = money
        }
        if (slot1.textContent === '💵'
            && slot2.textContent === '💵'
            && slot3.textContent === '💵') {
            money += select.value * 20
            moneyShow.innerHTML = money
            console.log(`Thắng Lớn Hũ 💵 +${select.value * 20}`);
        }
        if (slot1.textContent === '🧧'
            && slot2.textContent === '🧧'
            && slot3.textContent === '🧧') {
            money += select.value * 50
            moneyShow.innerHTML = money
            console.log(`Thắng Lớn Hũ 🧧 +${select.value * 50}`);
        }
        else {
            money -= select.value
            moneyShow.innerHTML = money
        }
        if (money - select.value < 0) {
            button.removeEventListener('click', handle, false)
            console.log("Hết Tiền Rồi Nạp Đi");
        }
},1000)

}

button.addEventListener('click', handle)
