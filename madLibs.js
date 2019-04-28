var spans = $("span");
fillInTheBlanks();

function fillInTheBlanks() {
    var arr = [];
    for(var i = 0; i < spans.length; i++) {
        var word = prompt(`Enter a/n ${spans[i].textContent} (${i + 1} of ${spans.length})`);
        arr.push(word);
        spans[i].textContent = arr[i];
    }
    $("body").css("visibility", "visible");
} 