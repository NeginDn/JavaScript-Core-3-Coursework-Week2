const imgButton = document.getElementById("img-btn");
const moreImgButton = document.getElementById("more-img-btn");
const urlAddress = `https://dog.ceo/api/breeds/image/random`;

function showOneImage() {
  fetch(urlAddress)
    .then((Response) => {
      if (!Response.ok) {
        throw Response.statusText;
      }
      return Response.json();
    })
    .then((object) => {
      let imgAddress = object.message;
      let listItemElem = document.createElement("li");
      listItemElem.className = "p-3 mx-auto list-group-item";
      let imgElem = document.createElement("img");
      imgElem.classList.add("w-100");
      imgElem.src = imgAddress;
      imgElem.alt = " A dog photo";
      let listElem = document.getElementById("gallery");
      let currentPhotoNumber = listElem.childNodes.length;
   
      for (let i = 0; i < currentPhotoNumber; i++) {
        var child = listElem.childNodes[i];
        listElem.removeChild(child);
      }

      listItemElem.appendChild(imgElem);
      listElem.appendChild(listItemElem);
    })
    .catch((error) => {
       const errorContainer = document.getElementById("error-container");
       const errorOutput = document.createElement("h1");
       errorOutput.innerText = `Something went wrong: ${error}`;
       errorContainer.appendChild(errorOutput);
    });
}

function showImages() {
  fetch(urlAddress)
    .then((Response) => Response.json())
    .then((object) => {
      let imgAddress = object.message;
      let listItemElem = document.createElement("li");
      listItemElem.className = "p-3 mx-auto list-group-item";
      let imgElem = document.createElement("img");
      imgElem.classList.add("w-100");
      imgElem.src = imgAddress;
      imgElem.alt = " A dog photo";
      let listElem = document.getElementById("gallery");
      listItemElem.appendChild(imgElem);
      listElem.appendChild(listItemElem);
    })
    .catch((error) => console.log("error"));
}

imgButton.addEventListener("click", showOneImage);
moreImgButton.addEventListener("click", showImages);
