//console.log("hello calculator from script")
//document.getElementById("output").style.backgroundColor = "lightblue";

$(document).ready(function(){
    let color
    $("#blue_btn").click(function(){
        $("#output").css('background-color',"blue")
    });

    $("#green_btn").click(function(){
        $("#output").css('backgroundColor',"green")
    })

    $("#red_btn").click(function(){
        $("#output").css('background-color',"red")
    })

    $("#yellow_btn").click(function(){
        $("#output").css('background-color',"yellow")
    })
})
