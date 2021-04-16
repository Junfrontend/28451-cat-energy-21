let closeButton = document.querySelector('.header__toggle');
let menu = document.querySelector('.header__nav');
console.log(closeButton);
console.log(menu);
closeButton.onclick = function () {
    menu.classList.toggle('menu-closed');
    closeButton.classList.toggle('closed');
}




let beforeAndAfterImg = document.querySelector('.live-example__before-and-after_img');
let beforeAndAfterImgButton = document.querySelector('.before-and-after__toggle-button');
beforeAndAfterImgButton.onchange = function () {
    if (beforeAndAfterImgButton.checked) {
        beforeAndAfterImg.src = "img/cat_after_program.png";
    } else {
        beforeAndAfterImg.src = "img/cat_before_program.png";
    }
}
