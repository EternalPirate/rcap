
var slider = document.getElementById('slider');
const maxValue = 100;

noUiSlider.create(slider, {
    start: [0, maxValue],
    connect: true,
    range: {
        'min': 0,
        'max': maxValue
    }
});

var nodes = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
];

// Display the slider value and how far the handle moved
// from the left edge of the slider.
slider.noUiSlider.on('update', function (values, handle) {
    nodes[handle].innerHTML = maxValue === parseInt(values[handle]) ?
        '$' + values[handle] + '+' :
        '$' + values[handle];
});






// handle view 3 bids btn click
document.querySelector('#carsList').addEventListener('click', (event) => {
    if (event.target.classList.contains('rcap-BtnFill')) {

        // toggle card button
        if (event.target.classList.contains('is-active')) {
            event.target.classList.remove('is-active')
        } else {
            event.target.classList.add('is-active')
        }

        // toggle bids list
        if (event.target.nextElementSibling.classList.contains('is-active')) {
            event.target.nextElementSibling.classList.remove('is-active')
        } else {
            event.target.nextElementSibling.classList.add('is-active')
        }
    }
});
