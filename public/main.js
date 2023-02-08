let username = prompt('enter your name:')
const socket = io();

let form = document.getElementById("form");
let sendBtn = document.getElementById("send-btn");
let messageDiv = document.querySelector('.messages')

form.addEventListener("submit", (e) => {
  let input = document.querySelector("#msg");
  e.preventDefault();

  if (input.value!='' && username!='') {
    socket.emit("msg", input.value,username);
    input.value = "";
  }
});

socket.on("msg", (msg,username) => {
   

    let liDiv = document.createElement('div')
    let h4 = document.createElement('h4');
    h4.innerHTML = username
liDiv.appendChild(h4)

     liDiv.setAttribute("class", "li-div");
    let p = document.createElement("p");
    p.textContent = msg;
    liDiv.appendChild(p)
    let d = new Date()
    liDiv.append(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} \n on \n`)

    liDiv.append(`${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`)
    messageDiv.append(liDiv)


    window.scrollTo(0, document.body.scrollHeight)
    
    document.querySelector('#msg').focus;

})
