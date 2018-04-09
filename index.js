var previewBox = document.getElementById("previewBox"),
    redRange = document.getElementById("redRange"),
    greenRange = document.getElementById("greenRange"),
    blueRange = document.getElementById("blueRange"),
    display = document.getElementById("display"),
    colorsArr = [];



function changeColor() {
    previewBox.style.backgroundColor = "rgb(" + redRange.value + "," + greenRange.value + "," + blueRange.value + ")";
}

function pushColors() {
    var obj = {
        red: parseInt(redRange.value),
        green: parseInt(greenRange.value),
        blue: parseInt(blueRange.value),

    }

    colorsArr.push(obj)
}

function popColors() {
    colorsArr.pop();
}

function shiftColors() {
    colorsArr.shift();
}

function spliceColors() {
    var startIndex = document.getElementById("spliceIndex").value;

    colorsArr.splice(startIndex, 1);
}

function createSwatch() {
    display.innerHTML = "";

    for (var i = 0; i < colorsArr.length; i++) {
        var ndiv = document.createElement("div");
        ndiv.style.backgroundColor = "rgb(" + colorsArr[i].red + "," + colorsArr[i].green + "," + colorsArr[i].blue + ")";
        ndiv.className = "swatches";
        display.appendChild(ndiv);
    }
    calcAvg();
    calcSum();
}

function calcAvg() {
    var totalred = 0,
        totalgreen = 0,
        totalblue = 0;

    for (var i = 0; i < colorsArr.length; i++) {
        totalred += colorsArr[i].red;
        totalgreen += colorsArr[i].green;
        totalblue += colorsArr[i].blue;
    }

    var roundRed = Math.round(totalred / colorsArr.length);
    var roundGreen = Math.round(totalgreen / colorsArr.length);
    var roundBlue = Math.round(totalblue / colorsArr.length);

    document.getElementById("averageBox").style.backgroundColor = "rgb(" + roundRed + "," + roundGreen + "," + roundBlue + ")";
}

function calcSum() {
    var totalRed = 0,
        totalGreen = 0,
        totalBlue = 0;

    for (var i = 0; i < colorsArr.length; i++) {
        totalRed = totalRed + colorsArr[i].red;
        totalGreen = totalGreen + colorsArr[i].green;
        totalBlue = totalBlue + colorsArr[i].blue;
        if (totalRed > 255) {
            totalRed = 255;
        }
        if (totalGreen > 255) {
            totalGreen = 255;
        }
        if (totalBlue > 255) {
            totalBlue = 255;
        }
    }

    document.getElementById("mixBox").style.backgroundColor = "rgb(" + totalRed + "," + totalGreen + "," + totalBlue + ")"
}

redRange.addEventListener("change", function () {
    changeColor();
});

greenRange.addEventListener("change", function () {
    changeColor();
});

blueRange.addEventListener("change", function () {
    changeColor();
});

document.getElementById("addColor").addEventListener("click", function () {
    pushColors();
    createSwatch();
});

document.getElementById("popColor").addEventListener("click", function () {
    popColors();
    createSwatch();
});

document.getElementById("shiftColor").addEventListener("click", function () {
    shiftColors();
    createSwatch();
});

document.getElementById("spliceColor").addEventListener("click", function () {
    spliceColors();
    createSwatch();
});