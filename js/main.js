function menuSlideIn() {

    var addElement = document.getElementById("main-menu");
    addElement.classList.add("active");

    var hamburger = document.getElementById("hamburger");
    hamburger.style.display = "none";

}


function menuSlideOut() {

    var removeElement = document.getElementById("main-menu");
    removeElement.classList.remove("active");

    var hamburger = document.getElementById("hamburger");
    hamburger.style.display = "block";

}


function showSection1() {

    // Home section

    menuSlideOut();

    var firstSection = document.getElementById("third-section");
    firstSection.classList.add("hidden");

    var firstSection = document.getElementById("second-section");
    firstSection.classList.add("hidden");

    var secondSection = document.getElementById("first-section");
    secondSection.classList.remove("hidden");

}


function showSection2() {

    // Products section

    menuSlideOut();

    var firstSection = document.getElementById("first-section");
    firstSection.classList.add("hidden");

    var firstSection = document.getElementById("third-section");
    firstSection.classList.add("hidden");

    var secondSection = document.getElementById("second-section");
    secondSection.classList.remove("hidden");

}


function showSection3() {

    // Search section

    menuSlideOut();

    var firstSection = document.getElementById("second-section");
    firstSection.classList.add("hidden");

    var firstSection = document.getElementById("first-section");
    firstSection.classList.add("hidden");

    var secondSection = document.getElementById("third-section");
    secondSection.classList.remove("hidden");


}