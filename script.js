const statusRef = document.getElementById("status");
const checkOrientationButton = document.getElementById("check");
const potraitMediaQuery = window.matchMedia("(orientation:potrait)");

const mediaOrientationChange = (mediaQuery) => {
  if (!mediaQuery.matches) {
    statusRef.innerText = `Landscape`;
  } else {
    statusRef.innerText = `Potrait`;
  }
};

window.screen.orientation.onchange = orientationChange = () => {
  if (screen.orientation.type.includes("landscape")) {
    statusRef.innerText = `Landscape`;
  } else {
    statusRef.innerText = `Potrait`;
  }
};

window.onload = () => {
  statusRef.innerText = "";
  checkOrientationButton.classList.add("hide");
  if ("mozOrientation" in screen) {
    checkOrientationButton.classList.remove("hide");
  } else if ("orientation" in screen) {
    orientationChange();
  } else {
    mediaOrientationChange(potraitMediaQuery);
    potraitMediaQuery.addEventListener("change", mediaOrientationChange);
  }
};
