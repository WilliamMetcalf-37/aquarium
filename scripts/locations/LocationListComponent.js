
import { useLocation } from "./LocationDataProvider.js"
import locationComponent from "./Locations.js"

const locationListComponent = () => {

const contentElement = document.querySelector(".locationCard")
const locations = useLocation()

// let allLocationsHTML = ""

// for (const location of locations) {
//   const locationHTML = locationComponent(location)
//   allLocationsHTML += locationHTML

// }

contentElement.innerHTML += 
`
<section class = "locationCard"> 
${
  locations.map(location => locationComponent(location) ).join("")
}
</section>
`
}
export default locationListComponent

