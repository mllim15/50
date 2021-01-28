const progress = document.getElementById('progress')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    // console.log(currentActive)
    update()
})

previous.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    // console.log(currentActive)
    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // progress line moves forward
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100) + '%'

    // if user is at step 1 then previous button is disabled
    if (currentActive === 1) {
        previous.disabled = true

        // if user is at last step then next button is disabled
    } else if (currentActive === circles.length) {
        next.disabled = true

        // if user is not at first or last step then both buttons are available
    } else {
        previous.disabled = false
        next.disabled = false
    }
}