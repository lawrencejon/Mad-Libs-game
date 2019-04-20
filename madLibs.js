var spans = document.querySelectorAll("span");
spanContent();
function spanContent() {
    var arr = [];
    for(var i = 0; i < spans.length; i++) {
        var word = prompt(`Enter a/n ${spans[i].textContent} (${i + 1} of ${spans.length})`);
        arr.push(word);
        spans[i].textContent = arr[i];
    }
}