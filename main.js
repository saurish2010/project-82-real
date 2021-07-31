var mouse_event="empty";
var last_position_of_x,last_position_of_y;
canvas= document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="black";
width=1;
radius=20

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    colors = document.getElementById("color").value;
    widths = document.getElementById("width").value;
    radiuss = document.getElementById("radius").value;
    mouse_event="mousedown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouse_event="mouseup";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouse_event="mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    Current_Position_of_mouse_X=e.clientX-canvas.offsetLeft;
    Current_Position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(Current_Position_of_mouse_X,Current_Position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    
}