let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let content = document.querySelector('#content');
let subtitle = document.querySelector('h6');
let underline = document.querySelector('hr');

underline.style.border = "none";
underline.style.borderTop = "1px solid lightgray";

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.setAttribute('src', 'byui-logo-dark.png');
        document.body.style.backgroundColor = "#141414";
        content.style.color = "white";
        subtitle.style.color = "#6bb7f0";
        underline.style.borderTopColor = "#555555";
    } else {
        logo.setAttribute('src', 'byui-logo-blue.webp');
        document.body.style.backgroundColor = "white";
        content.style.color = "black";
        subtitle.style.color = "#0483d8";
        underline.style.borderTopColor = "lightgray";
    }
}           
                    