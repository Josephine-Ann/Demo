function hover() {
    const arrow = document.getElementsByClassName('fas')
    // arrow.forEach(element => {
    //     element.classList.remove('non-hover-hide')
    // });
    arrow[0].classList.remove('non-hover-hide')
    arrow[1].classList.remove('non-hover-hide')
}

function hoverout() {
    const arrow = document.getElementsByClassName('fas')
    // arrow.forEach(element => {
    //     element.classList.remove('non-hover-hide')
    // });
    arrow[0].classList.add('non-hover-hide')
    arrow[1].classList.add('non-hover-hide')
}