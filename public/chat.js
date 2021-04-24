const socket = io.connect('http://localhost:3000');

const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

submitBtn.addEventListener('click', ()=>{
    socket.emit('chat',{
        message:message.value,
        
    });
    console.log("Yazdi");
});

socket.on("chat", data=>{
    feedback.innerHTML="";
    output.innerHTML+="<p><strong>"+"Muhamet"+" :</strong>"+data.message+"</p>"
    message.value="";
});
message.addEventListener("keypress",()=>{
    socket.emit("typing","Muhammet");
});
socket.on("typing",data =>{
    feedback.innerHTML="<p>"+data+" yaziyor... </p>"
});