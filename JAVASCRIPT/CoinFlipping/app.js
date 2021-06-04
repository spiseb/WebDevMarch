let coin = document.querySelector('#coin')

coin.addEventListener('click', function () {
    var flipRandom = Math.random();
    console.log('hello coin')
    coin.classList.remove('yazi')
    coin.classList.remove('tura')
    setTimeout(function () {
        if (flipRandom <= 0.5) {
            coin.classList.add('tura')
        } else {
            coin.classList.add('yazi')
        }
    }, 300)
})