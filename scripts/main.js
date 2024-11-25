const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    const orangeLabel = document.querySelector("h3");
    if (mySrc === "images/orange.png") {
      myImage.setAttribute("src", "images/blood-orange-resize.png");
      orangeLabel.textContent = "^ This is also an orange."
    } else {
      myImage.setAttribute("src", "images/orange.png");
      orangeLabel.textContent = "^ This is an orange."
    }
  };


let myButton = document.querySelector("button");
let myHeading = document.querySelector(".nameHeader");

function setUserName() {
    const myName = prompt("ENTER A NAME");
    if (!myName) {
        const myName = prompt("ENTER A NAME");
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
// myButton.addEventListener("click", setUserName());