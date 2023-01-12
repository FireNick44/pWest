window.addEventListener('resize', windowResize());

function windowResize(){
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;

    console.log( windowWidth + ' X ' + windowHeight);
}