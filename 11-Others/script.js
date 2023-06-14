const MAX_ROW_CARDS = 3;
const SHOP_CATEGORY = "Others";

const myAPIKey = "b8a51b31d53b47fd8ead7b6a55a93efb";
var rowCounter = 0;
// var mapIndex = 0;
// var mapList = [];
var cardRowList = [];
const cardContainerEl = document.getElementById("place-cards-contanier");
const modalContainerEl = document.getElementById("place-modal-container");

$("#exampleModal").on("show.bs.modal", (event) => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM
});

function createMapElement(id, lon, lat) {
    console.log("ID: ", id + "-map");
    console.log("LON: ", lon);
    console.log("LAT: ", lat);

    // mapList[mapIndex] = L.map(id + "-map").setView([lon, lat], 10);
    map = L.map(id + "-map").setView([lat, lon], 40);

    // Retina displays require different mat tiles quality
    let isRetina = L.Browser.retina;

    let baseUrl =
        "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
    let retinaUrl =
        "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

    // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
        attribution:
            'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
        apiKey: myAPIKey,
        maxZoom: 20,
        id: "osm-bright",
    }).addTo(map);

    const markerIcon = L.icon({
        iconUrl: "../Assets/marker-icon.png",
        iconSize: [38, 44], // size of the icon
        iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
    });

    const zooMarker = L.marker([lat, lon], {
        icon: markerIcon,
    }).addTo(map);

    //mapIndex++;
}

function createPlaceCard(dbItem, id) {
    let divCol = document.createElement("div");
    divCol.setAttribute("class", "col");

    let divCard = document.createElement("div");
    divCard.setAttribute("class", "card");
    divCard.setAttribute("style", "width: 18rem;");

    let modalButton = document.createElement("button");
    modalButton.setAttribute("type", "button");
    modalButton.setAttribute("data-toggle", "modal");
    modalButton.setAttribute("data-target", "#" + id);
    modalButton.setAttribute("class", "button-modal");

    let placeImage = document.createElement("img");
    placeImage.setAttribute("src", dbItem.imageUrl);
    placeImage.setAttribute("class", "card-img-top");
    placeImage.setAttribute("alt", dbItem.name + "-image");

    let divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    let placeNameP = document.createElement("p");
    placeNameP.setAttribute("class", "card-text");
    placeNameP.innerHTML = dbItem.name;

    let placeAddressP = document.createElement("p");
    placeAddressP.setAttribute("class", "text");
    placeAddressP.innerHTML = dbItem.address;

    divCardBody.append(placeNameP, placeAddressP);
    modalButton.append(placeImage, divCardBody);
    divCard.appendChild(modalButton);
    divCol.appendChild(divCard);

    return divCol;
}

function createPlaceModal(dbItem, id) {
    let div01 = document.createElement("div");
    div01.setAttribute("class", "modal fade modal-xl");
    div01.setAttribute("id", id);
    div01.setAttribute("tabindex", "-1");
    div01.setAttribute("role", "dialog");
    div01.setAttribute("aria-labelledby", id + "-label");
    div01.setAttribute("aria-hidden", "true");

    let div02 = document.createElement("div");
    div02.setAttribute("class", "modal-dialog");
    div02.setAttribute("role", "document");

    let div03 = document.createElement("div");
    div03.setAttribute("class", "modal-content");
    div03.setAttribute("style", "height: 90vh");

    let divModalHeader = document.createElement("div");
    divModalHeader.setAttribute("class", "modal-header");

    let titleH2 = document.createElement("h2");
    titleH2.setAttribute("class", "modal-title");
    titleH2.setAttribute("id", id + "-label");
    titleH2.innerHTML = dbItem.name;

    divModalHeader.appendChild(titleH2);

    let divModalBody = document.createElement("div");
    divModalBody.setAttribute("class", "modal-body");

    let divContentHeader = document.createElement("div");
    divContentHeader.setAttribute("class", "modal-content-header modal-header");

    let divImgContainer = document.createElement("div");
    divImgContainer.setAttribute("class", "modal-top-image-container");

    let mainImg = document.createElement("img");
    mainImg.setAttribute("src", dbItem.imageUrl);
    mainImg.setAttribute("alt", dbItem.name + "-main-image");
    mainImg.setAttribute("class", "modal-top-image");

    divImgContainer.appendChild(mainImg);

    let divTextContent = document.createElement("div");
    divTextContent.setAttribute("class", "text-modal-header");

    let addressH5 = document.createElement("h5");
    addressH5.innerHTML = dbItem.address;

    let descriptionP = document.createElement("p");
    descriptionP.innerHTML = dbItem.description;

    divTextContent.append(addressH5, descriptionP);
    divContentHeader.append(divImgContainer, divTextContent);

    let divMapContainer = document.createElement("div");
    divMapContainer.setAttribute("class", "map-container");
    divMapContainer.setAttribute("id", id + "-map");

    let divRate = document.createElement("div");
    divRate.setAttribute("class", "rate");

    let inputStar01 = document.createElement("input");
    inputStar01.setAttribute("type", "radio");
    inputStar01.setAttribute("name", "rate");
    inputStar01.setAttribute("id", "star1");
    inputStar01.setAttribute("value", "1");
    let labelStar01 = document.createElement("label");
    labelStar01.setAttribute("title", "text");
    labelStar01.setAttribute("for", "star1");

    let inputStar02 = document.createElement("input");
    inputStar02.setAttribute("type", "radio");
    inputStar02.setAttribute("name", "rate");
    inputStar02.setAttribute("id", "star2");
    inputStar02.setAttribute("value", "2");
    let labelStar02 = document.createElement("label");
    labelStar02.setAttribute("title", "text");
    labelStar02.setAttribute("for", "star2");

    let inputStar03 = document.createElement("input");
    inputStar03.setAttribute("type", "radio");
    inputStar03.setAttribute("name", "rate");
    inputStar03.setAttribute("id", "star3");
    inputStar03.setAttribute("value", "3");
    let labelStar03 = document.createElement("label");
    labelStar03.setAttribute("title", "text");
    labelStar03.setAttribute("for", "star3");

    let inputStar04 = document.createElement("input");
    inputStar04.setAttribute("type", "radio");
    inputStar04.setAttribute("name", "rate");
    inputStar04.setAttribute("id", "star4");
    inputStar04.setAttribute("value", "4");
    let labelStar04 = document.createElement("label");
    labelStar04.setAttribute("title", "text");
    labelStar04.setAttribute("for", "star4");

    let inputStar05 = document.createElement("input");
    inputStar05.setAttribute("type", "radio");
    inputStar05.setAttribute("name", "rate");
    inputStar05.setAttribute("id", "star5");
    inputStar05.setAttribute("value", "5");
    let labelStar05 = document.createElement("label");
    labelStar05.setAttribute("title", "text");
    labelStar05.setAttribute("for", "star5");

    divRate.append(
        inputStar05,
        labelStar05,
        inputStar04,
        labelStar04,
        inputStar03,
        labelStar03,
        inputStar02,
        labelStar02,
        inputStar01,
        labelStar01
    );

    divModalBody.append(divContentHeader, divMapContainer, divRate);

    let divModalFooter = document.createElement("div");
    divModalFooter.setAttribute("class", "modal-footer");

    let closeModalButton = document.createElement("button");
    closeModalButton.setAttribute("type", "button");
    closeModalButton.setAttribute("class", "btn btn-secondary");
    closeModalButton.setAttribute("data-dismiss", "modal");
    closeModalButton.innerHTML = "Close";

    divModalFooter.appendChild(closeModalButton);

    div03.append(divModalHeader, divModalBody, divModalFooter);
    div02.appendChild(div03);
    div01.appendChild(div02);

    modalContainerEl.appendChild(div01);
}

function createRowElement() {
    let rowSection = document.createElement("section");
    rowSection.setAttribute("id", "section2");
    rowSection.setAttribute("class", "container p-5");
    rowSection.setAttribute(
        "style",
        "margin: 30px; align-items: center; justify-content: center; margin-left: 9%;"
    );

    let divTextContainer = document.createElement("div");
    divTextContainer.setAttribute("class", "container text-center");

    let divRow = document.createElement("div");
    divRow.setAttribute("class", "row align-items-center");
    divRow.setAttribute("id", "shop-card-container");

    return {
        element1: rowSection,
        element2: divTextContainer,
        element3: divRow,
    };
}

function loadCards() {
    const placesCollection = db.collection("places");
    console.log("Collection db: ", placesCollection);

    placesCollection
        .get()
        .then((snapshot) => {
            if (snapshot) {
                let index = 0;
                snapshot.forEach((element) => {
                    if (element.data().category == SHOP_CATEGORY) {
                        if (!(rowCounter % MAX_ROW_CARDS)) {
                            if (rowCounter) {
                                index++;
                            }
                            cardRowList[index] = createRowElement();
                            console.log("NEW ROW");
                        }
                        console.log("RowCounter: ", rowCounter);
                        console.log("CardRowList Index: ", index);
                        console.log("Snapshot data id: ", element.id);
                        console.log("Snapshot Element: ", element.data());

                        cardRowList[index].element3.appendChild(
                            createPlaceCard(element.data(), element.id)
                        );

                        createPlaceModal(element.data(), element.id);

                        rowCounter++;
                    }
                });

                cardRowList.forEach((element) => {
                    console.log("Card List Element: ", element);
                    element.element1.appendChild(
                        element.element2.appendChild(element.element3)
                    );
                    console.log("Element 1: ", element.element1);
                    cardContainerEl.appendChild(element.element1);
                });

                snapshot.forEach((element) => {
                    if (element.data().category == SHOP_CATEGORY) {
                        createMapElement(
                            element.id,
                            element.data().lon,
                            element.data().lat
                        );
                    }
                });
                index = 0;
                rowCounter = 0;
                cardRowList = [];
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

loadCards();
