let myTasks = [
    "lähiopetus",
    "rästien ohjaaminen",
    "omaopettaja",
    "työssäoppiminen",
    "kv-vastaava",
    "oppimisympäristön ylläpito",
    "yhteistyöpalaveri",
    "yritysyhteistyö",
    "kouluttautuminen",
    "sijaistus",
    "virkavapaa",
    "opetuksen suunnittelu",
    "arviointi",
]

let selectedTexts = ""

function selectText(textItem){
     textItem.style.backgroundColor = "blue";
     textItem.select();
     textItem.setSelectionRange(0, 99999); // For mobile devices
     selectedTexts += textItem.value + ", "
     navigator.clipboard.writeText(selectedTexts);
}

const myDiv = document.getElementById("tasklist");

myTasks.forEach((item)=> {
    const myNewInput=document.createElement("input")
    myNewInput.value = item
    myNewInput.addEventListener("click", i => selectText(i.target))
    myDiv.appendChild(myNewInput)
})
  