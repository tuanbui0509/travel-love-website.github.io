let header__nav = document.getElementById('header__nav');
let sticky = header__nav.offsetTop;
let hide_option = header__nav.querySelector('.header__option--hide');

console.log(hide_option);
headerScroll = () => {
    if (window.pageYOffset > sticky) {
        // header__nav.classList.add('sticky');
        hide_option.style.display = 'none';
    }

    else {
        header__nav.classList.remove('sticky');
        hide_option.style.display = 'flex';
    }

}

scrollFunc = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        btnToTop.style.display = 'block';
    else
        btnToTop.style.display = 'none';
}

// back to top

let btnToTop = document.getElementById('btnToTop');
window.onscroll = () => {
    scrollFunc();
    headerScroll();
}

toTopFunc = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}