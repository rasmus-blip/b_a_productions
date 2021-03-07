"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  loadData("header.html", displayHeader);
}

async function loadData(url, callback) {
  const respons = await fetch(url);
  const textData = await respons.text();
  callback(textData);
}

function displayHeader(textData) {
  document.querySelector("header").innerHTML = textData;

  constructMenu();
}

function constructMenu() {
  const menuBtn = document.querySelector(".menu_btn");
  const menuNav = document.querySelector("#menu");
  let menuOpen = false;

  menuBtn.addEventListener("click", () => {
    if (menuOpen == false) {
      menuBtn.classList.add("open");
      menuNav.classList.remove("hidden");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuNav.classList.add("hidden");
      menuOpen = false;
    }
  });
}
