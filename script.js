var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var filter=document.querySelector(".filter");
var clear=document.getElementById("deleteall");
var p=document.querySelector(".counter");
var counter=0;
function inputLength() {
	return input.value.length;
}
function deleteelement(event){
      //animate
	  if(!(event.target.parentElement.classList.contains("done"))){
		 counter--;
	  }
	  p.innerText="you have "+counter+" tasks to be done!";
	  event.target.parentElement.classList.add("fall");
	  event.target.parentElement.addEventListener('transitionend',function(){
            event.target.parentElement.remove();
	  });
      
    
}
function taskisdone(event){
	event.target.parentElement.classList.toggle("done");
	if(event.target.parentElement.classList.contains("done")){
        counter--;
	}
	else{
		counter++;
	}
	p.innerText="you have "+counter+" tasks to be done!";
	
}

function createListElement() {
	//creating div
	var div=document.createElement("div");
	div.setAttribute("class","todo");
	
	//creating list
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.setAttribute("class","item");
	div.appendChild(li);
	input.value = "";
	//for delete button
	var del= document.createElement("button");
    del.innerHTML='<i class="fas fa-trash"></i>';
	del.setAttribute("class","delete");
	div.appendChild(del);
	del.onclick=deleteelement;
	//for done button
	var done=document.createElement("button");
	done.innerHTML='<i class="fas fa-check-square"></i>';
	done.setAttribute("class","didit");
	div.appendChild(done);
	done.onclick=taskisdone;
	ul.appendChild(div);
	counter++;
    p.innerText="you have "+counter+" tasks to be done!";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function filtered(event){
	var todolist=ul.childNodes;
      for(let i=1;i<todolist.length;i++)
	{
          var todo=ul.childNodes[i];
		    switch(event.target.value){
				case "All":
					todo.style.display="flex";
					break;
			 case "Completed":
				if(todo.classList.contains("done")){
                  todo.style.display ="flex";  
				}
			    else{
				todo.style.display ="none";
			    }
				break;
			 case "Uncompleted":
				if(!todo.classList.contains("done"))
				{
				todo.style.display="flex";
				}
				else
				{
				todo.style.display="none";
				}
			    break;
		}
	
	}
	
	
}
function clearthelist(){
    var d=document.getElementsByClassName("todo");
	var n=d.length;
	for(var i=0;i<n;i++){
		d[0].remove();
	}
	counter=0;
	p.innerText="you have 0 tasks to be done!";
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

filter.addEventListener("click",filtered);

clear.addEventListener("click",clearthelist);
