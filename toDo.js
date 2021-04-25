// Function Section Start
function newElement()
{
    let inputValue = document.querySelector("#task").value
    let listNode = document.querySelector("#list")
    let liNode = document.createElement('li')
    let textnode = document.createTextNode(inputValue)
    let item_2 = localStorage.getItem('userInfo') ? String(localStorage.getItem('userInfo')) : []
    JSON.parse(localStorage.getItem('userInfo')) 


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

        localStorage.setItem('userInfo',JSON.stringify(inputValue))
        

           /*  console.log(localStorage.getItem(localStorage.key(i))); */
     
    } 
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          let div = this.parentElement;
          div.style.display = "none";
        };
      }
}
// Function Section End


//  Delete Section Start
let close = document.getElementsByClassName("close");
for(let i=0; i<close.length; i++){
    close[i].addEventListener('click', () =>{
        close[i].parentElement.style.opacity = 0;
        setTimeout(() => {
            close[i].parentElement.style.display = "none";
            close[i].parentElement.remove()
            localStorage.clear();
        },500);
        itemsArray = [];
    }
    )
}
//  Delete Section End


// Checked Section Start
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
// Checked Section End




// Clear All Section Start
function deleteALLToDo(){
    var lis = document.querySelectorAll('#list li');
    for(var i=0; li=lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
      
}
// Clear All Section End


