$(document).ready(function(){
    $("#contact-form").validate({
        rules:{
            namef:{
                required:true,
                
            },
            emailad:{
                required:true,
                email:true
            },
            messag:{
                required:true,
                minlength:10
            }
        },
        messages:{
            namef:{ required:"vallathum adi monuse"},
            emailad:{required:"Email ille monuse",
                     email:"mariyathekk ad monuse"
        },
            messag:{required:"Enter a message",
                    minlength:"Enter atleast 10 character"
        }
        }
    })
})