let coin = document.querySelector('#oneEuro')

coin.addEventListener('click', function () {
    var flipRandom = Math.random();
    console.log('hello coin')
    coin.classList.remove('heads')
    coin.classList.remove('tails')
    setTimeout(function () {
        if (flipRandom <= 5) {
            coin.classList.add('heads')
        } else {
            coin.classList.add('tails')
        }
    }, 300)
})