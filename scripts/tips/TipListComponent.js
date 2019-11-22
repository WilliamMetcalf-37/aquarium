import { useTip } from "./TipDataProvider.js"
import TipComponent from "./Tips.js"




const TipListComponent = () => {
  
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".tipList")
  const tips = useTip()
  
  let allTipHTML = ""

  for (const tip of tips){
    
    const tipHTML = TipComponent(tip)
    allTipHTML += tipHTML

  }
  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="tipList">
          ${allTipHTML}
      </section>
  `
}

export default TipListComponent