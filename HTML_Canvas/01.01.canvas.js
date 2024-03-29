function init()
{
    setInterval(updateCanvas,1000);
    updateCanvas();
}

function updateCanvas()
{
    //restof the code goes here
    var width = window.innerWidth;
    var height = 100;
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = width;
    myCanvas.height = height;
    var context = myCanvas.getContext("2d");
    context.clearRect(0,0,width,height);

    context.fillStyle = "#FCEAB8";
    context.fillRect(0,0,width,height);
    var circleSize = 10;
    var gaps = circleSize+10;
    var widthCount = parseInt(width/gaps);
    var heightCount = parseInt(height/gaps);
    //var aColors = ["RED","GREEN","BLUE","YELLOW"];
    var aColors = ["#43A9D1","#EFA63B","#EF7625","#5E4130"];
    var aColorsLength = aColors.length;

    for (var x=0;x<widthCount;x++)
    {
        for(var y=0;y<heightCount;y++)
        {
            context.fillStyle = aColors[parseInt(Math.random()*aColorsLength)];
            context.beginPath();
            context.arc(circleSize+gaps*x,circleSize+ gaps*y,circleSize, 0, Math.PI*2, true);
            context.closePath();
            context.fill();
        }
    }
}