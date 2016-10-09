var tags = document.getElementsByTagName("*");
var arrayTags = [], resultObj = {}, tagCount = 0;

for (var i = 0; i < tags.length; i++) {
    arrayTags.push(tags[i].localName);
}

arrayTags.sort();

for (i = 0; i < arrayTags.length; i++) {
    if (arrayTags[i] == arrayTags[i-1]) {
        tagCount++;
    } else {
        resultObj[arrayTags[i-1]] = tagCount;
        tagCount = 1;
    }
}

arrayTags = [];
for (var prop in resultObj) {
    arrayTags.push({tag: prop, count: resultObj[prop]});
}
arrayTags.sort(function sort(a, b) {
    return b.count - a.count;
});

createPopup(arrayTags);

/*******/

/* button show/hide popup */
function toggleBtn() {
    var popup = document.getElementById("popup");
    if (popup.getAttribute("class") == "none") {
        popup.setAttribute("class", "");
    } else {
        popup.setAttribute("class", "none");
    }
}

/* create popup and add inner elements */
function createPopup(arrayTags) {
    var popup = document.createElement("div");
    popup.setAttribute("id", "popup");
    popup.setAttribute("class", "none");
    document.body.appendChild(popup);

    for (i = 0; i < arrayTags.length; i++) {
        var element = document.createElement("p");
        if (arrayTags[i].count != 0) {
            element.innerHTML = arrayTags[i].tag + "<span>" + arrayTags[i].count + "</span>";
            popup.appendChild(element);
        }
    }
}