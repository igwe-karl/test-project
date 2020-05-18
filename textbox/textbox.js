function sendMessage(){
  
  //this is responsible for sending message
  var message = document.getElementById("message").value;
  var newElement = document.createElement("sendDiv");
  newElement.textContent = message  ;
  var sendDiv = document.getElementById("send-div");
  sendDiv.appendChild(newElement);

  //this is responsible for recieving message
  var newElement2 = document.createElement("recieveDiv");
  var recieveDiv = document.getElementById("recieve-div");
  recieveDiv.appendChild(newElement2);
  const replies = ["i love you " ,"go away "," fuck you ","i dont care ","get pussy","get rich"];
  newElement2.textContent = replies[Math.floor(Math.random()*replies.length)]; 
  console.log(newElement); 
     
}
