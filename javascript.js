const contacts = ["putneymead:02087880686", "heathbridge:02082464070",
 "chartfield:02087883252"];
 
const searchInput = document.querySelector("#searchInput");

const searchButton = document.querySelector("#searchButton");

const para = document.querySelector("#para")

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

searchButton.addEventListener("click", () => {
    
    const searchName = searchInput.value.toLowerCase();
    searchInput.value = "";
    searchInput.focus();
    para.textContent = "";
    
    for (const contact of contacts) {
        const splitContact = contact.split(":");

        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${capitalizeFirstLetter(splitContact[0])}'s phone number is ${splitContact[1]}.`
            
            break;
        }
    }
    if (para.textContent === "") {
        para.textContent = "Contact not found.";
    }
});