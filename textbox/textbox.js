// Habibs COmments: I start off the container with no divs. So empty chat box. The idea is to create the boxes with purely JS.
//Further tasks:
// 1) Clear the text box after a message is sent
// 2) Add a scroll to the container. youll notice if you send lots of messages it scatters the thing
// 3) Bonus: Add a delete text feature

function sendMessage() {
  var container = document.getElementById("container");
  //this is responsible for sending message
  var message = document.getElementById("message").value;

  // var newElement = document.createElement("sendDiv"); <--Habibs Comment: You made a mistake here. When you call createElement you have to create an actual html element like a div then assign class to it the way you do text cobtent
  var newElement = document.createElement("div");
  newElement.textContent = message;
  newElement.classList.add("inner"); // <--Habibs Comment: Here iv created a class in the css already that all the chat bubbles should have
  // var sendDiv = document.getElementById("send-div");
  container.appendChild(newElement);
  setTimeout(() => {
    //<--Habibs Comment: Here i want to simulate a delay before the reply comes. so ur message sends then 2 secs later the reply comes in by calling replyEmssage()
    replyMessage();
  }, 2000);

  //this is responsible for recieving message
  // var newElement2 = document.createElement("recieveDiv");
  // var recieveDiv = document.getElementById("recieve-div");
  // recieveDiv.appendChild(newElement2);

  // newElement2.textContent = replies[Math.floor(Math.random()*replies.length)];
  // console.log(newElement);
}

function replyMessage() {
  //Habibs Comment:This function does what you already did before. Just extracting it into its own function
  var container = document.getElementById("container");
  const replies = [
    "i love you ",
    "go away ",
    " fuck you ",
    "i dont care ",
    "get pussy", //<--Habibs Comment: Very important
    "get rich",
  ];
  var newElement = document.createElement("div");
  newElement.textContent = replies[Math.floor(Math.random() * replies.length)];
  newElement.classList.add("inner");
  newElement.classList.add("right"); //Here im adding a diff class for computer replies to differentiate
  container.appendChild(newElement);
}
