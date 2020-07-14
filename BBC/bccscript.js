function btn(){
 var pp=document.getElementById("pp")
pp.innerHTML= "redTime";
pp.style.color="red";
}
document.getElementById("btn").onclick=btn;

$(".toolbar").click(function()
{
    alert($(".toolbar").html());
});

// $(".mainbar").hover(function()
// {
//     $(".mainbar").css("background-color","cyan");
// });

$(".tabs").hover(function()
{
    $(this).animate({height:"400px"},2000);
});

$(".mainbar").click(function()
{
    // alert("aj");
    $.ajax("info.txt").done(function(data){
        alert("aj");
    }).fail(function(){
        alert("fail");
    });
});