$(document).ready(function() {



    $(document).on("click", "#LoginUserBtn", function(e) {
        e.preventDefault();
        var fromUrl = getUrlParameter("Rfrm");

        var email =$("#email").val();
        var password =$("#password").val();
        var err = false;
        if (email == null || email == "") {
            err = true;
            $("#email").addClass("errorTrue");
            swal("please enter your email");
            return false;
        } else {
            err = false;
            $("#email").removeClass("errorTrue");

        } 

        if (password == null || password == "") {
            err = true;
            $("#password").addClass("errorTrue");
            swal("please enter  password");
            return false;
        } else {
            err = false;
            $("#password").removeClass("errorTrue");

        } 
        if(IsEmail(email)==false){
            $("#email").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("Invalid Email").css({ "padding": "10px 20px" });
            swal("please enter a valid email");
            return false;
        }else {
            err = false;
            $("#email").removeClass("errorTrue");

        } 
       

        if (err == false) {
          

        var data = {

            "email": email,
            "password": password,
            "fromUrl":fromUrl,

        }

        $("#LoginUserBtn").addClass("d-none");
        $("#LoginUserBtnLoader").removeClass("d-none");
        $("#saveFormErrors").removeClass("alert alert-danger").removeClass("alert alert-success").html("");

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        var actUrl = $("#act").val();
            $.ajax({
            type: "POST",
            url: actUrl,
            data: data,
            dataType: "json",
            success: function(response) {

                setTimeout(() => {
                    $("#LoginUserBtnLoader").addClass("d-none");
                    $("#LoginUserBtn").removeClass("d-none");

                    // console.log(response.errore.name);
                    if (response.status == 400) {
                        $("#saveFormErrors").html("");

                        $("#saveFormErrors").removeClass("alert alert-success").addClass("alert alert-danger").css({ "padding": "10px 20px" });
                        if (response.error) {
                            $("#saveFormErrors").html(response.error);
                            swal("Error", response.error, "warning");
                        } else {

                            $.each(response.errors, function(key, err_values) {
                                $("#saveFormErrors").append("<li>" + err_values + "</li>");
                            });

                        }
                    } else {
                        alert(response.message);
                        $("#saveFormErrors").html("");
                        $("#saveFormErrors").removeClass("alert alert-danger").removeClass("alert alert-success");
                        window.location.href = response.message;


                    }

                }, 2000);



            }
        })
    }

    });


    $(document).on("click", "#SuperAdminLoginBtn", function(e) {
        e.preventDefault();
        var fromUrl = getUrlParameter("RqstFrm");

       
        var email =$("#email").val();
        var password =$("#password").val();
        var err = false;

        if (email == null || email == "") {
            err = true;
            $("#email").addClass("errorTrue");
            swal("please enter your email");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#email").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#email").removeClass("errorTrue");

        } 

        if (password == null || password == "") {
            err = true;
            $("#password").addClass("errorTrue");
            swal("please enter  password");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#password").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#password").removeClass("errorTrue");

        } 
        if(IsEmail(email)==false){
            $("#email").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("Invalid Email").css({ "padding": "10px 20px" });
            swal("please enter a valid email");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#email").offset().top-150
            }, 2000);
            return false;
        }else {
            err = false;
            $("#email").removeClass("errorTrue");

        } 
       

        if (err == false) {
          

        var data = {

            "email": email,
            "password": password,
            "fromUrl":fromUrl,
            'nexP':$("#actOfnxeP").val(),

        }

        $("#SuperAdminLoginBtn").addClass("d-none");
        $("#SuperAdminLoginBtnLoader").removeClass("d-none");
        $("#saveFormErrors").removeClass("alert alert-danger").removeClass("alert alert-success").html("");

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        var actOfurl = $("#actOfSuperL").val();
       
        $.ajax({
            type: "POST",
            url: actOfurl,
            data: data,
            dataType: "json",
            success: function(response) {

                setTimeout(() => {
                    $("#SuperAdminLoginBtnLoader").addClass("d-none");
                    $("#SuperAdminLoginBtn").removeClass("d-none");

                    // console.log(response.errore.name);
                    if (response.status == 400) {
                        $("#saveFormErrors").html("");

                        $("#saveFormErrors").removeClass("alert alert-success").addClass("alert alert-danger").css({ "padding": "10px 20px" });
                        if (response.error) {
                            $("#saveFormErrors").html(response.error);
                        } else {

                            $.each(response.errors, function(key, err_values) {
                                $("#saveFormErrors").append("<li>" + err_values + "</li>");
                            });

                        }
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                    } else {
                        
                        $("#saveFormErrors").html("");
                        $("#saveFormErrors").removeClass("alert alert-danger").removeClass("alert alert-success");
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                   
                        window.location.href = response.message;


                    }

                }, 2000);



            }
        })
    }

    });
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
            return decodeURIComponent(sURLVariables[0]).slice(8);
    
        // for (i = 0; i < sURLVariables.length; i++) {
        //     sParameterName = sURLVariables[i].split('=');
    
        //     if (sParameterName[0] === sParam) {
        //         return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        //     }
        // }
        // return false;
    };
    $(document).on("click", "#t_c_agreement", function(){
        
        if ($(this).is(":checked")) {
            $("#t_c_Container").removeClass("errorTrue");
    
        }
    });

    $(document).on("click","#newsletterBtn",function(e){
        e.preventDefault();
        var email = $("#newsletter_i").val();
        var err = false;

        if (email == null || email == "") {
            err = true;
            $("#newsletter_i").addClass("errorTrue");
            swal("your email is required for the subscription");
            return false;
        } else {
            err = false;
            $("#newsletter_i").removeClass("errorTrue");

        } 

        if (err == false) {

            var data = {
    
                
                "email": email,
               
    
            }
    
            $("#newsletterBtn").addClass("d-none");
            $("#newsletterBtnLoader").removeClass("d-none");
    
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
          
          var actUrl = $("#act").val();
            $.ajax({
                type: "POST",
                url: actUrl,
                data: data,
                dataType: "json",
                success: function(response) {
                  
    
                    setTimeout(() => {
                        $("#newsletterBtnLoader").addClass("d-none");
                        $("#newsletterBtn").removeClass("d-none");
    
                        // console.log(response.errore.name);
                        if (response.status == 400) {
                            $("#saveFormErrors").html("");
    
                            $("#saveFormErrors").removeClass("alert alert-success infoD").addClass("alert alert-danger infoD").css({ "padding": "10px 20px" });
                            if (response.error) {
                                $("#saveFormErrors").html(response.error);
                            } else {
    
                                $.each(response.errors, function(key, err_values) {
                                    $("#saveFormErrors").append("<li>" + err_values + "</li>");
                                });
    
                            }
                        } else {
                            $("#saveFormErrors").html("");
                            $("#saveFormErrors").removeClass("alert alert-danger infoD").addClass("alert alert-success infoD");
                            $("#saveFormErrors").html(response.message);
                            swal("Success!", response.message, "success");
                            
    
    
                        }
    
                    }, 2000);
    
    
    
                }
            });
        }
    
    });
    $(document).on("input",".errorTrue",function(){
        $(this).removeClass("errorTrue");
    });
    setTimeout(() => {
        
        $(".infoD").slideUp();
    }, 4000);

    
    const accordionTitle = document.querySelectorAll(".accordion-title");

   

    accordionTitle.forEach((title) => {
        title.addEventListener("click", () => {

            const accordionContent = title.nextElementSibling;
            

            title.classList.toggle("active");
           

            if (title.classList.contains("active")) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
    $(document).on("click", "#registerUserBtn", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var password_confirmation = $("#password_confirmation").val();
        var err = false;

      

        if (name == null || name == "") {
            err = true;
            $("#name").addClass("errorTrue");
            swal("please your name is required");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#name").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#name").removeClass("errorTrue");

        } 

        if (email == null || email == "") {
            err = true;
            $("#email").addClass("errorTrue");
            swal("please your email is required");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#email").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#email").removeClass("errorTrue");

        } 

       
       
      
       

        if (password == null || password == "") {
            err = true;
            $("#password").addClass("errorTrue");
            swal("please create a login password");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#password").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#password").removeClass("errorTrue");

        } 

        if (password_confirmation == null || password_confirmation == "") {
            err = true;
            $("#password_confirmation").addClass("errorTrue");
            swal("please re-type your password");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#password_confirmation").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#password_confirmation").removeClass("errorTrue");

        } 

        if (!(password_confirmation ==  password)) {
            err = true;
            $("#password_confirmation").addClass("errorTrue");
            swal("your password and confrim password does not match");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#password_confirmation").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#password_confirmation").removeClass("errorTrue");

        } 

        if ($("#basic_checkbox_1").is(":checked")) {

            err = false;
            $("#t_c_Container").removeClass("errorTrue");
          

        }else{

            err = true;
            $("#t_c_Container").addClass("errorTrue");
            swal("sorry! You have to agree to the terms and conditions of using our services");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#t_c_Container").offset().top-150
            }, 2000);

            return false;
        }

       
        if (err == false) {

            var data = {

                "name": $("#name").val(),
                "email": $("#email").val(),
               
                "password": $("#password").val(),
                "termsAgreement":$("#basic_checkbox_1").val(),
                "password_confirmation": $("#password_confirmation").val(),


            }

            $("#registerUserBtn").addClass("d-none");
            $("#registerUserBtnLoader").removeClass("d-none");

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            var actUrl = $("#act").val();
            $.ajax({
                type: "POST",
                url: actUrl,
                data: data,
                dataType: "json",
                success: function(response) {

                    setTimeout(() => {
                        $("#registerUserBtnLoader").addClass("d-none");
                        $("#registerUserBtn").removeClass("d-none");

                        // console.log(response.errore.name);
                        if (response.status == 400) {
                            $("#saveFormErrors").html("");

                            $("#saveFormErrors").removeClass("alert alert-success").addClass("alert alert-danger").css({ "padding": "10px 20px" });
                            if (response.error) {
                                $("#saveFormErrors").html(response.error);
                            } else {

                                $.each(response.errors, function(key, err_values) {
                                    $("#saveFormErrors").append("<li>" + err_values + "</li>");
                                });

                            }
                            $([document.documentElement, document.body]).animate({
                                scrollTop: $("#saveFormErrors").offset().top-150
                            }, 2000);
                
                        } else {
                            $("#saveFormErrors").html("");
                            $("#saveFormErrors").removeClass("alert alert-danger").addClass("alert alert-success");
                            $("#saveFormErrors").html(response.message);
                            swal("Success!", response.message, "success");
                            $([document.documentElement, document.body]).animate({
                                scrollTop: $("#saveFormErrors").offset().top-150
                            }, 2000);
                            setTimeout(() => {
                                window.location.href = response.nxurl;
                            }, 2000);


                        }

                    }, 2000);

                



                }
            });

        }


    });
  
    $(document).on("click", "#contactUsSubmitBtn", function(e) {
        e.preventDefault();
        if($(this).hasClass("d-none")){
            return false;
        }
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
      
        var message = $("#message").val();
        var err = false;



        if (name == null || name == "") {
            err = true;
            $("#name").addClass("errorTrue");
            swal("please your name is required");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#name").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#name").removeClass("errorTrue");

        } 

      

        if (email == null || email == "") {
            err = true;
            $("#email").addClass("errorTrue");
            swal("please your email is required");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#email").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#email").removeClass("errorTrue");

        } 
        if(IsEmail(email)==false){
            $("#email").addClass("errorTrue");
            swal("please enter a valid email");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#email").offset().top-150
            }, 2000);
            return false;
        }else {
            err = false;
            $("#email").removeClass("errorTrue");

        } 
       

        if (phone == null || phone == "") {
            err = true;
            $("#phone").addClass("errorTrue");
            swal("please your phone number is required");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#phone").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#phone").removeClass("errorTrue");

        } 

        if (message == null || message == "") {
            err = true;
            $("#message").addClass("errorTrue");
            swal("please your message is required");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#message").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#message").removeClass("errorTrue");

        } 

        if (err == false) {

        var data = {

            "name": name,
            "email": email,
            "phone": phone,
            "message": message,
            


        }

        $("#contactUsSubmitBtn").addClass("d-none");
        $("#contactUsSubmitBtnLoader").removeClass("d-none");
    

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
      
      var actUrl = $("#actOfContact").val();
        $.ajax({
            type: "POST",
            url: actUrl,
            data: data,
            dataType: "json",
            success: function(response) {
              

                setTimeout(() => {
                  
                    $("#contactUsSubmitBtn").removeClass("d-none");
                    $("#contactUsSubmitBtnLoader").addClass("d-none");

                    // console.log(response.errore.name);
                    if (response.status == 400) {
                        
                        if (response.error) {
                            swal("Error",response.error,"warning");
                        } else {
                            var content = '';

                            $.each(response.errors, function(key, err_values) {
                                content += " ** "+ err_values;
                            });
                            
                            swal("Error", content,"warning");
                        }
                    } else {
                        
                        swal("Success!", response.message, "success");

                        setTimeout(() => {
                            window.location.href = $("#actOfThanks").val();
                        }, 2000);
                        


                    }

                }, 2000);



            }
        });
    }


    });

    $(document).on("click", "#changePasswordBtn", function(e) {
        e.preventDefault();
        var oldPass = $("#oldPass").val();
        var newPass = $("#newPass").val();
        var retypeNewPass = $("#retypeNewPass").val();
       
        var err = false;

        if (oldPass == null || oldPass == "") {
            err = true;
            $("#oldPass").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("your enter old password").css({ "padding": "10px 20px" });
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#oldPass").removeClass("errorTrue");

        } 

        if (newPass == null || newPass == "") {
            err = true;
            $("#newPass").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("your enter new password").css({ "padding": "10px 20px" });
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#newPass").removeClass("errorTrue");

        } 

        if (retypeNewPass == null || retypeNewPass == "") {
            err = true;
            $("#retypeNewPass").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("your re-enter new password").css({ "padding": "10px 20px" });
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#retypeNewPass").removeClass("errorTrue");

        } 
        if (!(newPass == retypeNewPass)) {
            err = true;
            $("#retypeNewPass").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("your re-enter new password and new password does not match").css({ "padding": "10px 20px" });
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#retypeNewPass").removeClass("errorTrue");

        } 

        if (err == false) {
            $("#saveFormErrors").removeClass("alert alert-danger").html("");


        var data = {

            "oldPass": oldPass,
            "newPass": newPass,
            "retypeNewPass": retypeNewPass,

        }

        $("#changePasswordBtn").addClass("d-none");
        $("#changePasswordBtnLoader").removeClass("d-none");

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
      
      var actUrl = $("#actOfChngPss").val();
      
        $.ajax({
            type: "POST",
            url: actUrl,
            data: data,
            dataType: "json",
            success: function(response) {
              

                setTimeout(() => {
                    $("#changePasswordBtnLoader").addClass("d-none");
                    $("#changePasswordBtn").removeClass("d-none");

                    // console.log(response.errore.name);
                    if (response.status == 400) {
                        $("#saveFormErrors").html("");

                        $("#saveFormErrors").removeClass("alert alert-success").addClass("alert alert-danger").css({ "padding": "10px 20px" });
                        if (response.error) {
                            $("#saveFormErrors").html(response.error);
                        } else {

                            $.each(response.errors, function(key, err_values) {
                                $("#saveFormErrors").append("<li>" + err_values + "</li>");
                            });

                        }
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                    } else {
                        $("#saveFormErrors").html("");
                        $("#saveFormErrors").removeClass("alert alert-danger").addClass("alert alert-success");
                        $("#saveFormErrors").html(response.message);
                        swal("Success!", response.message, "success");
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                        


                    }

                }, 2000);



            }
        });
    }


    });

    $(document).on("click", "#changeToNewPassBnt", function(e) {
        e.preventDefault();
       
        var newPass = $("#newPass").val();
        var rp = $("#RP").val();
        var retypeNewPass = $("#retypeNewPass").val();
       
        var err = false;


        if (newPass == null || newPass == "") {
            err = true;
            $("#newPass").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("your enter new password").css({ "padding": "10px 20px" });
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#newPass").removeClass("errorTrue");

        } 

        if (retypeNewPass == null || retypeNewPass == "") {
            err = true;
            $("#retypeNewPass").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("your re-enter new password").css({ "padding": "10px 20px" });
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#retypeNewPass").removeClass("errorTrue");

        } 
        if (!(newPass == retypeNewPass)) {
            err = true;
            $("#retypeNewPass").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("your re-enter new password and new password does not match").css({ "padding": "10px 20px" });
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#retypeNewPass").removeClass("errorTrue");

        } 

        if (rp == null || rp == "") {
            err = true;
           
            $("#saveFormErrors").addClass("alert alert-danger").html("Invalid Request").css({ "padding": "10px 20px" });
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
           

        } 

        if (err == false) {
            $("#saveFormErrors").removeClass("alert alert-danger").html("");


        var data = {

            "newPass": newPass,
            "rp": rp,
            "retypeNewPass": retypeNewPass,

        }

        $("#changeToNewPassBnt").addClass("d-none");
        $("#changeToNewPassBntLoader").removeClass("d-none");

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
      
      var actUrl = $("#actOfNewPss").val();
      
        $.ajax({
            type: "POST",
            url: actUrl,
            data: data,
            dataType: "json",
            success: function(response) {
              

                setTimeout(() => {
                    $("#changeToNewPassBntLoader").addClass("d-none");
                    $("#changeToNewPassBnt").removeClass("d-none");

                    // console.log(response.errore.name);
                    if (response.status == 400) {
                        $("#saveFormErrors").html("");

                        $("#saveFormErrors").removeClass("alert alert-success").addClass("alert alert-danger").css({ "padding": "10px 20px" });
                        if (response.error) {
                            $("#saveFormErrors").html(response.error);
                        } else {

                            $.each(response.errors, function(key, err_values) {
                                $("#saveFormErrors").append("<li>" + err_values + "</li>");
                            });

                        }
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                    } else {
                        $("#saveFormErrors").html("");
                        $("#saveFormErrors").removeClass("alert alert-danger").addClass("alert alert-success");
                        $("#saveFormErrors").html(response.message);
                        swal("Success!", response.message, "success");
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                        setTimeout(() => {
                            window.location.href = $("#actOfLog").val();
                        }, 2000);
                        


                    }

                }, 2000);



            }
        });
    }


    });

    $(document).on("click", "#submitEmailToResetPasswordBtn", function(e) {
        e.preventDefault();
        var email = $("#email").val();
       
     
        var err = false;

        if (email == null || email == "") {
            err = true;
            $("#email").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("your enter old password").css({ "padding": "10px 20px" });
            swal("please enter the email you used to register with us");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#email").removeClass("errorTrue");

        } 

        if(IsEmail(email)==false){
            $("#email").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("Invalid Email").css({ "padding": "10px 20px" });
            swal("please enter a valid email");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        }else {
            err = false;
            $("#email").removeClass("errorTrue");

        } 


      
    

        if (err == false) {
            $("#saveFormErrors").removeClass("alert alert-danger").html("");


            var data = {

                "email": email,
            

            }

            $("#submitEmailToResetPasswordBtn").addClass("d-none");
            $("#submitEmailToResetPasswordBtnLoader").removeClass("d-none");

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
      
         var actUrl = $("#actOfSubMitEmailPss").val();
      
        $.ajax({
            type: "POST",
            url: actUrl,
            data: data,
            dataType: "json",
            success: function(response) {
              

                setTimeout(() => {
                    $("#submitEmailToResetPasswordBtn").removeClass("d-none");
                    $("#submitEmailToResetPasswordBtnLoader").addClass("d-none");

                    // console.log(response.errore.name);
                    if (response.status == 400) {
                        $("#saveFormErrors").html("");

                        $("#saveFormErrors").removeClass("alert alert-success").addClass("alert alert-danger").css({ "padding": "10px 20px" });
                        if (response.error) {
                            $("#saveFormErrors").html(response.error);
                        } else {

                            $.each(response.errors, function(key, err_values) {
                                $("#saveFormErrors").append("<li>" + err_values + "</li>");
                            });

                        }
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                    } else {
                        $("#saveFormErrors").html("");
                        $("#saveFormErrors").removeClass("alert alert-danger").addClass("alert alert-success");
                        $("#saveFormErrors").html(response.message);
                        swal("Success!", response.message, "success");
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                        setTimeout(() => {
                            window.location.href = $("#actOfNextPage").val() + "/"+response.rp;
                        }, 2000);
                        


                    }

                }, 2000);



            }
        });
    }


    });

    $(document).on("click", "#submitCodeResetPasswordBtn", function(e) {
        e.preventDefault();
        var code = $("#code").val();
       
     
        var err = false;

        if (code == null || code == "") {
            err = true;
            $("#code").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("please enter the code we sent to your email").css({ "padding": "10px 20px" });
            swal("please enter the code we sent to your email");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#code").removeClass("errorTrue");

        } 


      
    

        if (err == false) {
            $("#saveFormErrors").removeClass("alert alert-danger").html("");


            var data = {

                "code": code,
            

            }

            $("#submitCodeResetPasswordBtn").addClass("d-none");
            $("#submitCodeResetPasswordBtnLoader").removeClass("d-none");

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
      
         var actUrl = $("#actOfSubMitCodeForPss").val();
      
        $.ajax({
            type: "POST",
            url: actUrl,
            data: data,
            dataType: "json",
            success: function(response) {
              

                setTimeout(() => {
                    $("#submitCodeResetPasswordBtn").removeClass("d-none");
                    $("#submitCodeResetPasswordBtnLoader").addClass("d-none");

                    // console.log(response.errore.name);
                    if (response.status == 400) {
                        $("#saveFormErrors").html("");

                        $("#saveFormErrors").removeClass("alert alert-success").addClass("alert alert-danger").css({ "padding": "10px 20px" });
                        if (response.error) {
                            $("#saveFormErrors").html(response.error);
                        } else {

                            $.each(response.errors, function(key, err_values) {
                                $("#saveFormErrors").append("<li>" + err_values + "</li>");
                            });

                        }
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                    } else {
                        $("#saveFormErrors").html("");
                        $("#saveFormErrors").removeClass("alert alert-danger").addClass("alert alert-success");
                        $("#saveFormErrors").html(response.message);
                        swal("Success!", response.message, "success");
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                        setTimeout(() => {
                            window.location.href = $("#actOfNextPageNw").val() + "/"+response.rp;
                        }, 2000);
                        


                    }

                }, 2000);



            }
        });
    }


    });

    $(document).on("click", "#SuperAdminsubmitCodeResetPasswordBtn", function(e) {
        e.preventDefault();
        var code = $("#code").val();
       
     
        var err = false;

        if (code == null || code == "") {
            err = true;
            $("#code").addClass("errorTrue");
            $("#saveFormErrors").addClass("alert alert-danger").html("please enter the code we sent to your email").css({ "padding": "10px 20px" });
            swal("please enter the code we sent to your email");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#saveFormErrors").offset().top-150
            }, 2000);
            return false;
        } else {
            err = false;
            $("#code").removeClass("errorTrue");

        } 


      
    

        if (err == false) {
            $("#saveFormErrors").removeClass("alert alert-danger").html("");


            var data = {

                "code": code,
                "nexP": $("#actOfNextPage").val(),


            }

            $("#SuperAdminsubmitCodeResetPasswordBtn").addClass("d-none");
            $("#SuperAdminsubmitCodeResetPasswordBtnLoader").removeClass("d-none");

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
      
         var actUrl = $("#actOfSubMitCodeForPss").val();
      
        $.ajax({
            type: "POST",
            url: actUrl,
            data: data,
            dataType: "json",
            success: function(response) {
              

                setTimeout(() => {
                    $("#SuperAdminsubmitCodeResetPasswordBtn").removeClass("d-none");
                    $("#SuperAdminsubmitCodeResetPasswordBtnLoader").addClass("d-none");

                    // console.log(response.errore.name);
                    if (response.status == 400) {
                        $("#saveFormErrors").html("");

                        $("#saveFormErrors").removeClass("alert alert-success").addClass("alert alert-danger").css({ "padding": "10px 20px" });
                        if (response.error) {
                            $("#saveFormErrors").html(response.error);
                            swal("Error!", response.error, "warning");
                        } else {

                            $.each(response.errors, function(key, err_values) {
                                $("#saveFormErrors").append("<li>" + err_values + "</li>");
                            });

                        }
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                    } else {
                        $("#saveFormErrors").html("");
                        $("#saveFormErrors").removeClass("alert alert-danger").addClass("alert alert-success");
                        $("#saveFormErrors").html(response.message);
                        swal("Success!", response.message, "success");
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                        setTimeout(() => {
                            window.location.href = response.rp;
                        }, 2000);
                        


                    }

                }, 2000);



            }
        });
    }


    });

    function updateSessionEx() {
        
        var code = $("#code").val();
        var lastSessionUdate = $("#actionDiv").attr('data-lsesexupd');
     
        var err = false;



      alert(lastSessionUdate);
      return false;
    

        if (err == false) {
            $("#saveFormErrors").removeClass("alert alert-danger").html("");


            var data = {

                "code": code,
            

            }

            $("#submitCodeResetPasswordBtn").addClass("d-none");
            $("#submitCodeResetPasswordBtnLoader").removeClass("d-none");

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
      
         var actUrl = $("#actOfSubMitCodeForPss").val();
      
        $.ajax({
            type: "POST",
            url: actUrl,
            data: data,
            dataType: "json",
            success: function(response) {
              

                setTimeout(() => {
                    $("#submitCodeResetPasswordBtn").removeClass("d-none");
                    $("#submitCodeResetPasswordBtnLoader").addClass("d-none");

                    // console.log(response.errore.name);
                    if (response.status == 400) {
                        $("#saveFormErrors").html("");

                        $("#saveFormErrors").removeClass("alert alert-success").addClass("alert alert-danger").css({ "padding": "10px 20px" });
                        if (response.error) {
                            $("#saveFormErrors").html(response.error);
                        } else {

                            $.each(response.errors, function(key, err_values) {
                                $("#saveFormErrors").append("<li>" + err_values + "</li>");
                            });

                        }
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                    } else {
                        $("#saveFormErrors").html("");
                        $("#saveFormErrors").removeClass("alert alert-danger").addClass("alert alert-success");
                        $("#saveFormErrors").html(response.message);
                        swal("Success!", response.message, "success");
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#saveFormErrors").offset().top-150
                        }, 2000);
                        setTimeout(() => {
                            window.location.href = $("#actOfNextPageNw").val() + "/"+response.rp;
                        }, 2000);
                        


                    }

                }, 2000);



            }
        });
    }


    };

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
           return false;
        }else{
           return true;
        }
      }


});