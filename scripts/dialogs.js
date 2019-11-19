const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close");

  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  }
  // CAN'T TOUCH THIS - END

  // You will be writing code below this line
  document
    .querySelector("#button--bitey")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--bitey");
      theDialog.showModal();
    });
  document
    .querySelector("#button--jawsie")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--jawsie");
      theDialog.showModal();
    });
    document
    .querySelector("#button--dangler")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--dangler");
      theDialog.showModal();
    });
    document
    .querySelector("#button--barry")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--barry");
      theDialog.showModal();
    });
    document
    .querySelector("#button--snappy")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--snappy");
      theDialog.showModal();
    });
    document
    .querySelector("#button--mrbubbles")
    .addEventListener("click", theClickEvent => {
      const theDialog = document.querySelector("#details--mrbubbles");
      theDialog.showModal();
    });


};
export default initializeDetailButtonEvents;
