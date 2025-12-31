const open = document.querySelectorAll(".plus");

open.forEach((btn) => {
  btn.onclick = function showAnswer() {
    if (btn.src.includes("icon-plus.svg")) {
      btn.src = "./images/icon-minus.svg";
    } else {
      btn.src = "./images/icon-plus.svg";
    }

    // get the parent div of the button
    const parentDiv = btn.parentElement;

    // select the paragraph after the div
    const nextParagraph = parentDiv.nextElementSibling;

    nextParagraph.classList.toggle("hidden");
  };

});
