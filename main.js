canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
background_Img = "mars.jpg";
rover_Img = "rover.png";
rover_X = 10;
rover_Y = 10;

function add()
{
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground();
    background_ImgTag.src = "background_Img";
    
    rover_ImgTag = new Image();
    rover_ImgTag.onload = uploadRover();
    rover_ImgTag.src = rover_Img;
}

function uploadBackground()
{
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_ImgTag,rover_X, rover_Y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38")
    {
        up();
        console.log("up");
    }
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="39")
    {
        right();
        console.log("right");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("down");
    }
}