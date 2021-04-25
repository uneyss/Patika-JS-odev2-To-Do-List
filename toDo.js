let item_2 = localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : [] *
JSON.parse(localStorage.getItem('userInfo')) 

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

        localStorage.setItem('userInfo',JSON.stringify(liNode))
        

           /*  console.log(localStorage.getItem(localStorage.key(i))); */
     
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
            localStorage.clear();
        },500);
        itemsArray = [];
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

  

