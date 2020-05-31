var elementet = document.getElementsByClassName('rrethi');

for (var i = 0; i < elementet.length; i++) {
    elementet[i].onmouseover = function () {
        this.style.width = '200px';
        this.style.height = '200px';
        this.style.fontSize = '20px';
        this.style.backgroundColor = '#F61067';
        this.style.transition = 'width 1s, height 1s, background-color 1s, font-size 1s';
    };
    elementet[i].onmouseout = function () {
        this.style.width = '160px';
        this.style.height = '160px';
        this.style.fontSize = '14px';
        this.style.backgroundColor = '#5E239D';
        this.style.transition = 'width 1s, height 1s, background-color 1s, font-size 1s';
    };
}

$(document).ready(function () {
    $('.title-work').show(800);
});

