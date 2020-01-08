$(function(){
    $(".menu-button").click(function(){  
        $(".menu").slideToggle(600)
    })
})
$(function(){
    var get_header = $(".header").outerHeight();
    //to see header actual height in web type-->console.log(get_header);
    
    $(".menu a").click(function(e){
        // e.preventDefault();
        var a= $(this).attr("href");
        //to check you are redirected to page to their concern href or not--->console.log(a);
        $("html,body").animate({
            scrollTop:$(a).offset().top-get_header
        },1000)
        
        $(".menu a li").removeAttr("class");
        $(this).find("li").attr("class","active");
    })
})