const socket = io.connect('http://localhost:3000');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');
const subtitle =  document.querySelector(".subtitle");
const userName = prompt("What is your name ?");
subtitle.innerHTML="<strong>Name:</strong> "+userName;
subtitle.textContent.color="#00d1b2";
submitBtn.addEventListener('click', ()=>{
    socket.emit('chat',{
        message:message.value,
        name:userName
        
    });
});

socket.on("chat", data=>{
    feedback.innerHTML="";
    output.innerHTML+="<p><strong>"+data.name+" :</strong>"+data.message+"</p>"
    message.value="";
});
message.addEventListener("keypress",()=>{
    socket.emit("typing",userName);
});
socket.on("typing",data =>{
    feedback.innerHTML="<p>"+data+" yaziyor... </p>"
});