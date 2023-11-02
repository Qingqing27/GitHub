function stopSliding(slider) {
    var sliderCurrent = document.getElementById("slider" + slider);
    var sliderAbove = document.getElementById("slider" + (slider + 1));
    var sliderBelow = (slider == 1) ? sliderCurrent : document.getElementById("slider" + (slider - 1));

    var left = parseInt(getComputedStyle(sliderCurrent).getPropertyValue("left"));
    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left = left + "px";

    var width = parseInt(getComputedStyle(sliderCurrent).getPropertyValue("width"));
    var leftBelow = parseInt(getComputedStyle(sliderBelow).getPropertyValue("left"));

    var difference = left - leftBelow;
    var absDifference = Math.abs(difference);

    if (difference > width || difference < -width) {
        var score = "Score:" + (slider - 1);
        alert(score);
        location.reload();
    }

    if (difference > 0) {
        left += absDifference;
    } else {
        left -= absDifference;
        sliderCurrent.style.left = left + "px";
    }

    var offset = (width - absDifference) + "px";
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = "visible";

    // You need to declare and initialize slideWidth
    // Assuming slideWidth is a global variable:
    slideWidth = slideWidth + absDifference;
    document.documentElement.style.setProperty('--width', slideWidth);

    var onclick = "stopSliding(" + (slider + 1) + ")";
    document.getElementById("btn").setAttribute("onclick", onclick);
}