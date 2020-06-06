function sendMessage(){
  var container = document.getElementById("container");
  var message = document.getElementById("message").value ;
  var newElement = document.createElement("div");
  newElement.textContent = message ;
  clearText();
  newElement.classList.add("inner");
  container.appendChild(newElement);
  setTimeout(()=>{
    replyMessage();
  },2000);

  clearBox()

function clearText(){
  var message = document.getElementById("message").value="" ;

}

  //this is responsible for sending
  function replyMessage(){
    var container = document.getElementById("container");
    const replies = [
      "i love you ",
      "go away ",
      "fuck you ",
      "i dont care ",
      "get pussy ",
      "get rich",
    ];
    var newElement = document.createElement("div");
    newElement.textContent = replies[Math.floor(Math.random() * replies.length)];
    newElement.classList.add("inner");
    newElement.classList.add("right");
    container.appendChild(newElement);
    
  } 

  function clearBox(container){
    var del = document.getElementById("bt");
    //var message = document.getElementById("message").value ;
    //var newElement = document.createElement("div");
    //newElement.classList.add("inner");
    //newElement.classList.add("right");
    
    //var del = document.getElementById("container");
    container.innerHTML ="deleted";
    
  }
  
}
