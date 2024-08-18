let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function chuyen_trang() {
    window.location.assign("dangnhap.html")
}
function chuyen_trang1() {
    window.location.assign("dangki.html")
}
var getInputLogin = document.getElementById("input_login");
getInputLogin.addEventListener("submit", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert("Username: " + username + "\nPassword: " + password)
})