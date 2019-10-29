// // Your code goes here

"use strict";
window.addEventListener("load", e => {
  //mouseover
  const [intro] = document.getElementsByClassName("intro");
  intro.addEventListener("mouseover", function(e) {
    this.children[0].src =
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80";
  });

  //keydown
  window.onkeydown = function(e) {
    if (!(e.key === "F5" || e.key === "F12")) {
      this.alert(`You pressed ${e.key}`);
    }
  };

  //wheel
  const [body] = document.getElementsByTagName("body");
  window.onwheel = function(e) {
    body.style.backgroundColor = `rgba(${random()}, ${random()}, ${random()}, ${random(
      1
    )})`;
  };

  //drag and drop
  const imgs = document.getElementsByClassName("img-content");
  let src;
  Array.from(imgs).forEach(img => {
    img.addEventListener("dragstart", e => {
      // e.dataTransfer.effectAllowed = "move";
      e.target.style.opacity = 0.5;
      e.dataTransfer.setData("text", e.target.getAttribute("src"));
    });
    img.addEventListener("dragend", e => {
      e.target.style.opacity = "";
      if (src) e.target.setAttribute("src", src);
      src = null;
    });
    img.addEventListener("dragover", e => {
      e.preventDefault();
      // e.dataTransfer.dropEffect = "move";
    });
    img.addEventListener("drop", e => {
      src = e.target.getAttribute("src");
      e.target.setAttribute("src", e.dataTransfer.getData("text"));
    });
  });

  //focus
  intro.tabIndex = -1;
  intro.style.outline = "none";
  intro.onfocus = function(e) {
    this.children[0].style.filter = "blur(5px)";
  };
  intro.onblur = function(e) {
    this.children[0].style.filter = "";
  };

  function random(max = 255, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //resize
  window.onresize = function(e) {
    body.style.backgroundColor = `rgba(${random()}, ${random()}, ${random()}, ${random(
      1
    )})`;
  };

  //resize
  window.onscroll = function(e) {
    body.style.backgroundColor = `rgba(${random()}, ${random()}, ${random()}, ${random(
      1
    )})`;
  };

  //select
  //select event only works for textarea and input

  window.ondblclick = function(e) {
    e.target.style.backgroundColor = `rgba(${random()}, ${random()}, ${random()}, ${random(
      1
    )})`;
  };
});
