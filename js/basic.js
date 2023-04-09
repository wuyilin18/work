window.onload = function () {
  var audio = document.getElementById("music");
  audio.pause(); //打开页面时无音乐
};
function play() {
  var audio = document.getElementById("music");
  if (audio.paused) {
    audio.play();
    document.getElementById("musicImg").src = "images/play.png";
  } else {
    audio.pause();
    audio.currentTime = 0; //音乐从头播放
    document.getElementById("musicImg").src = "images/stop.png";
  }
}
var navItems = document.querySelectorAll(".nav li");
var contents = document.querySelectorAll(".content");
function setActiveNavItem(target) {
  for (var i = 0; i < navItems.length; i++) {
    if (navItems[i].getAttribute("data-target") === target) {
      navItems[i].classList.add("active");
    } else {
      navItems[i].classList.remove("active");
    }
  }
}
function showContent(target) {
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].getAttribute("id") === target) {
      contents[i].classList.add("show");
    } else {
      contents[i].classList.remove("show");
    }
  }
}
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    var target = this.getAttribute("data-target");
    setActiveNavItem(target);
    showContent(target);
  });
}
setActiveNavItem("content1");
showContent("content1");
