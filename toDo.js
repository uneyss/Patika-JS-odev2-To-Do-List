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
            `<span class="close">x</span>`
        
        liNode.appendChild(textnode) 
        listNode.appendChild(liNode);
    } 
}