
function newElement()
{
    let inputValue = document.querySelector("#task").value
    let listNode = document.querySelector("#list")
    let liNode = document.createElement('li')
    let textnode = document.createTextNode(inputValue)
    
     if(inputValue === "" || $.trim( $('#task').val() ) == '' ){
         $(".error").toast("show");
        console.log("işlem geçersiz")
    }else{
        console.log("işlem geçerli")
        $(".success").toast("show");
        liNode.innerHTML = 
            `<span class="close">x</span>`
        
        liNode.appendChild(textnode) 
        listNode.appendChild(liNode);

    } 
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          let div = this.parentElement;
          div.style.display = "none";
        };
      }
}

let close = document.getElementsByClassName("close");
for(let i=0; i<close.length; i++){
    close[i].addEventListener('click', () =>{
        close[i].parentElement.style.opacity = 0;
        setTimeout(() => {
            close[i].parentElement.style.display = "none";
            close[i].parentElement.remove()
        },500);
        
    }
    )
}

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      $(".alert").toast("show");
    }
  },
  false
);

/* let body = document.querySelector("ul");
eventListener();
function eventListener(){
    body.addEventListener('click',deleteTodo)
}

function deleteTodo(e){
    if(e.target.className === "close"){
        e.target.parentElement.parentElement.remove();
        
    }
} */



/* var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
} */


/* arr.push(close_2)
const new_arr = arr.filter(new_item => new_item.lenght >0)
console.log("close2", arr) */

/* const close = document.querySelectorAll(' ul span')
const close_2 = document.querySelectorAll('ul li')
let arr = [] */



/* function myFunction() {
    var list = document.getElementById("list");
    list.removeChild(list.childNodes[0]);
} */
/* function deleteElement() 
{
    let lis = document.querySelector('#list li');
    for(let i=0; li = lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
} */
/* function myFunction() {
    var ulElem = document.getElementById('list');
    
    ulElem.removeChild(ulElem.childNodes[getSelection])
} */


/*   var inputText = document.getElementById("txt"),
  items = document.querySelectorAll("#list li"),
  tab = [], index;
  function refreshArray()
  {
      // clear array
      tab.length = 0;
      items = document.querySelectorAll("#list li");
      // fill array
      for(var i = 0; i < items.length; i++){
       tab.push(items[i].innerHTML);
     }
  }

  function deleteLI(){
    var myList = document.getElementById('myList');
    myList.innerHTML = '';
}
 */
  

