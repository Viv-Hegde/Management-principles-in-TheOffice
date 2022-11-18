"use strict";
(function() {

  window.addEventListener("load", init);

  function init () {
    let topicHeads = document.querySelectorAll("#topics h2");
    topicHeads.forEach(element => {
      element.addEventListener("click", toggleViews);
    });
  }

  function toggleViews() {
    let sibling = this.nextElementSibling;
    let currentlyVisible = !sibling.classList.contains("hidden");
    hideAll();
    if (currentlyVisible) {
      sibling.classList.add("hidden");
    } else {
      sibling.classList.remove("hidden");
    }
  }

  function hideAll() {
    let heads = document.querySelectorAll("#topics div");
    heads.forEach(element => {
      element.classList.add("hidden");
    });
  }
})();