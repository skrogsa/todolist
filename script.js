const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// den første viser hvis du trykker add på tom
// den andre lager element og legger til i listen eller sletter
//span er slettefunksjonen, \u00d7 er unicode for x-symbolet
// onclick for addtask står i html dokumentet

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// det er addeventlistener for å sjekke av og slette ting i listen
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// savedata funksjonen lagrer data i local storage slik at den er der når du går innpå siden igjen
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


//prøvde å få til å legge til ting i li ved å trykke enter i tillegg til klikke på knapp
//button.addEventListener("keydown", function (addTask) {
//    console.log("button is entered!");
//  });


