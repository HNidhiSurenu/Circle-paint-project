var mouseevent="empty";
canvas=document.getElementById("myCanvas")

ctx= canvas.getContext("2d")
var color="empty"
var lineWidth="empty"
var radius="empty"
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseevent = "mouseleave";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") { ctx.beginPath();
         ctx.strokeStyle = color;
          ctx.lineWidth = width; 
          console.log("Last position of x and y coordinates = ");
           ctx.moveTo(lastx, lastyx); console.log("Current position of x and y coordinates = "); 
           ctx.lineTo(currentx, currenty);
            ctx.stroke(); } lastx = currentx;
             lastyx = currenty; }