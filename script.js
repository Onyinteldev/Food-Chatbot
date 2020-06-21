var username = "";

function send_message(message){
    
    var prevState = $("#container").html();

    if (prevState.lenght > 3){
        prevState = prevState + "<br>";
    }

    $("#container").html(prevState +"<span class='current_message'>" + "<span class='bot'>Chatbot: </span>" + message + "</span>");
    $(".current_message").hide();
    $(".current_message").delay(300).fadeIn();
    $(".current_meessage").removeClass("current_message");

}

function get_username(){
    send_message("Hello, what is your name?");
}

function bit(message){
    if (username.length<3){
        username = message;
        send_message("Nice to meet you " + username + ", how are you doing?");
    }

    if (message.indexOf("how are you")>=0){
        send_message("Thanks, I am good!");
    }
    if (message.indexOf("what your best food")>=0){
        send_message("Rice and beans!");
    }
    if (message.indexOf("what did you eat this morning")>=0){
        send_message("Tea and bread!");
    }
    if (message.indexOf("your best drink")>=0){
        send_message("Nutri milkq!");
    }
    if (message.indexOf("what did you eat this night")>=0){
        send_message("Eba and egusi!");
    }
    if (message.indexOf("which food do you hate most")>=0){
        send_message("Beans and plantain!");
    }
    if (message.indexOf("do you like food")>=0){
        send_message("Yes, I like food!");
    }
}

$(function(){

    get_username();

    $("#textbox").keypress(function(event){
        if ( event.which == 13){
            if ( $("#enter").prop("checked") ){

                $("#send").click();
                event.preventDefault();
            }
        }
    });

    $("#send").click(function(){

        var username = "<span class='username' = >You: </span>";

        var newMessage = $("#textbox").val();

        $("#textbox").val("");

        var prevState = $("#container").html();

        if (prevState.lenght > 3){
            prevState = prevState + "<br>";
        }
        $("#container").html(prevState + "<br>" + username + newMessage + "<br>");
                
        $("#container").scrollTop($("#container").prop("scrollHeight"));

        bit(newMessage);
    });
});