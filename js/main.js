// Validation Form

function validate(){
    let f = false;

    //validation....f=true , f-false
    // name field
    let name = $('.name-field').val();
    if(name == "" || name == undefined){
        $(".name-field-msg").html("name is required !!").addClass("text-danger");
        f=false;
    }else{
        $(".name-field-msg").html("ok !!").removeClass("text-danger").addClass("text-success");
        f = true;
    }

    // email validation

    let email = $(".email-field").val();
    let exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email == "" || email == undefined){
        $(".email-field-msg").html("Email is required !!").addClass("text-danger");
        f=false;
    }else if(exp.test(email)==false){
        $(".email-field-msg").html("Invalid Email , email must be in correct format (example@gmail.com)").addClass("text-danger");
        f=false;
    }else{
        $(".email-field-msg").html("ok !!").removeClass("text-danger").addClass("text-success");
        f = true;
    }

    //mobile validation
    let mobile = $(".phone-field").val();
    if(mobile == "" || mobile == undefined){
        $(".phone-field-msg").html("Phone no is required !!");
    }else if(mobile.length == 10){
        $(".phone-field-msg").html("ok !!").removeClass("text-danger").addClass("text-success");
        f = true;
    }else {
        $(".phone-field-msg").html("It contains 10 digit").addClass("text-danger");
    }

    f = false;
    return f;
}
