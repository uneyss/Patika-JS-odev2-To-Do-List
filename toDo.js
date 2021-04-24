// Get List




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
            `<span class="close" onclick="myFunction()">x</span>`
        
        liNode.appendChild(textnode) 
        listNode.appendChild(liNode);

    } 
}

/* function deleteElement() 
{
    let lis = document.querySelector('#list li');
    for(let i=0; li = lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
} */

function myFunction() {
    var list = document.getElementById("list");
    list.removeChild(list.childNodes[0]);
  }
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
  
