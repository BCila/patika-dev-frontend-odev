let liveToastBtnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.getElementById("list")
let taskDOM = document.querySelector("#task")

let allLiDOM = document.getElementsByTagName("li")

for (var index = 0; index < allLiDOM.length; index++){
    let span = document.createElement("span");
    span.textContent = ("\u00D7");
    span.classList.add("close");
    span.onclick = removeButton;
    allLiDOM[index].appendChild(span);
    allLiDOM[index].onclick = check;
}



liveToastBtnDOM.addEventListener("click", addTodo)


function removeButton(){
    this.parentElement.remove()
}


function check(){
    this.classList.toggle("checked");
  }

  
function addTodo(){
    if(taskDOM.value == ""){
        $(".error").toast("show")
    }
    else {
        $(".success").toast("show");
        let liDOM = document.createElement('li')
        listDOM.appendChild(liDOM);
        liDOM.innerHTML = task.value;
        taskDOM.value = "";
        
        
        liDOM.onclick = check;
        
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");
    }
}