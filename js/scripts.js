$(document).ready(function(){
   
    

    $(".product").click(function(){
        $(".managementInfo").slideToggle();
    });
   
    $(".dev").click(function(){
        $(".devInfo").slideToggle();
    });
   
    $(".design").click(function(){
        $(".designInfo").slideToggle();
    });
    $("#submit").click(function(event){
        var userName = $("#name").val();
        var userEmail = $("#email").val();
        var message = $("#message").val();
       
        if(userName == "" || userEmail == "" || message == ""){
            $("#errorMessage").html("**fill in the required forms**").fadeOut(2000);
        }
        else
        {   
            $("#theName").html(userName);
            $("#hidden").show().fadeOut(3000);    
        }
        
        event.preventDefault(); 
    });
});