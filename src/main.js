let primaryButton = document.querySelector("#primary--btn") ; 
let popUpDialog = document.querySelector(".popup") ; 
let removeButton = document.getElementById("RemoveDialog") ; 

primaryButton.addEventListener("click", () => { 
    popUpDialog.classList.add("open-popup") ; 
 })

 removeButton.addEventListener("click", () => { 
    popUpDialog.classList.remove("open-popup") ; 
 })