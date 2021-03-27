const urlAddress = `https://xkcd.now.sh/?comic=latest`;
function getImage() {
  fetch(urlAddress)
    .then((Response) => {
      if (!Response.ok) {
        throw Response.statusText;
      }
      return Response.json();
    })
    .then((object) => {
      const imgElem = document.createElement("img");
      imgElem.src = object.img;
      const imgOutput = document.getElementById("image-container");
      imgOutput.appendChild(imgElem);
    })
    .catch((error) => {
      const errorContainer = document.getElementById("error-container");
      const errorOutput = document.createElement("h1");
      errorOutput.innerText = `Something went wrong: ${error}`;
      errorContainer.appendChild(errorOutput);
    });
}
window.onload = getImage;
