let input_var=document.getElementById("input");
let button_var=document.getElementById("button1");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");
let deleteButton=document.querySelectorAll(".deleteButton");

function input_var_length(){
    return input_var.value.length;
}

function create_child(){
        var li=document.createElement("li");
        var delButton=document.createElement("button");
        delButton.appendChild(document.createTextNode("Delete"));
        delButton.classList.add("deleteButton")
        li.appendChild(document.createTextNode(input_var.value));
        li.appendChild(delButton);
        ul.appendChild( li);
        input_var.value='';
        li.addEventListener('click',function(){
            li.classList.toggle("done");
        })
        delButton.addEventListener('click',function(){
            li.remove();
        })
}

function button_click(){
    if(input_var_length()>0){
        create_child();
    }
}

function keydown_pressed(event){
    if(input_var_length()>0 && event.code==="Enter"){
        create_child();
    }
}

button_var.addEventListener('click',button_click)
input_var.addEventListener('keydown',keydown_pressed)

for(let i=0;i<li.length;i++){
    li[i].addEventListener('click',function(){
        li[i].classList.toggle("done");
    })
}

for(let i=0;i<deleteButton.length;i++){
    deleteButton[i].addEventListener('click',function(){
            li[i].remove();
    })
}