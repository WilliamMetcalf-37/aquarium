const locationComponent = (location) =>{
  return `
  <section class = "location__card">
  <p>${location.place}</p>
  <p>${location.latlong}</p>
  <p>${location.climate}</p>
</section>
  `
}

export default locationComponent