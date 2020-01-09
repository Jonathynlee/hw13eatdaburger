$(".submitButton").on("click",function(){
    if ($(".burger_input").val().length>0){
        
        let input = {innerText:$(".burger_input").val()};
        $.ajax("/addABurger", {
            type:"POST", 
            data:input

        }).then(function(){location.reload()})
    }
} )

$(".eatButton").on("click", function(event){
    let currentId = event.target.getAttribute("id");
    let currentText = $(`[id="${currentId}"]`).children().html();
    let stringID = JSON.stringify(currentId);
    let finalText = currentText.substring(stringID.length, currentText.length)
    data = {
        id:currentId, 
        innerText: finalText
    }
    $.ajax("/eatABurger", {
        type:"PUT", 
        data:data

    }).then(function(){location.reload()})
})