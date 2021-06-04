let coin = document.querySelector('#oneEuro')

coin.addEventListener('click', function () {
    console.log('hello coin')
    coin.classList.remove('heads')
    coin.classList.remove('tails')
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    setTimeout(function () {
        if (result) {
            coin.classList.add('heads')
        } else {
            coin.classList.add('tails')
        }
    }, 300)
})