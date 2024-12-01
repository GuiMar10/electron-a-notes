console.log('Hey')
window.onload = function () {
    const noteCont = document.getElementById('notecont')
    noteCont.addEventListener('click', () => formatText())
}
function formatText() {
    const noteCont = document.getElementById('notecont')
    var start = noteCont.selectionStart,
        end = noteCont.selectionEnd;
    let cont = noteCont.innerHTML
    let formated = cont.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    noteCont.innerHTML = formated
    noteCont.setSelectionRange(start, end);
}