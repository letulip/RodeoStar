const map = document.querySelector(`.contacts__map`);

const mapOnLoad = () => {
  const mapController = map.querySelector(`.controller`);
  // mapController.style.display = `none`;
  console.log(`map loaded`);
  
}

if (map) {
  map.addEventListener(`load`, mapOnLoad);
}
