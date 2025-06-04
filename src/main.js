let primaryButton = document.querySelector("#primary--btn") ; 
let popUpDialog = document.querySelector(".popup") ; 

primaryButton.addEventListener("click", () => { 
    popUpDialog.style.visibility = "visible" ;  
    popUpDialog.style.top = "50%" ; 
    popUpDialog.style.transform.scale = "1" ; 
 })