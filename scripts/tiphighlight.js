const addBorderToTips = () =>{

  const tipCard = document.querySelectorAll(".tip");

  for (const tip of tipCard) {
    tip.addEventListener("mouseover", theMouseOverEvent => {
     
      tip.classList.add("tipBorder");
    });
    tip.addEventListener("mouseout", theMouseOutEvent => {
     
      tip.classList.remove("tipBorder");
    });
  }
}
export default addBorderToTips;