const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const List = document.querySelector("#list")
form.addEventListener("submit",function(e){
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("li");
    newLI.innerText = catName;
    List.append(newLI);
    input.value ="";
})