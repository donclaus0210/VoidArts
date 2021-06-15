function openDiv(evt, tabname) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tela");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("botaozinho");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" selected", "");
    }
    document.getElementById(tabname).style.display = "grid";
    evt.currentTarget.className += " selected";
}