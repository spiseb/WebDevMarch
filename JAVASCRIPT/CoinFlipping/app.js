let coin = document.querySelector('#oneEuro')

coin.addEventListener('click', function () {
    var random = Math.random();
    console.log('hello coin')
    coin.classList.remove('yazi')
    coin.classList.remove('tura')
    setTimeout(function () {
        if (random <= 0.5) {
            coin.classList.add('heads')
        } else {
            coin.classList.add('tails')
        }
    }, 300)
})