$(".nav-icon").on("click",function showNavMobile(event){
    console.log($("#header-menu").attr("class"));

    // Cach 1
    // if($("#header-menu").css("display")== "block"){
    //     $("#header-menu").hide();
    // }else{
    //     $("#header-menu").show();
    // }
    // Cach 2
     if($("#header-menu").attr("class")== "active"){
        $("#header-menu").removeClass()("active");
    }else{
        $("#header-menu").addClass("active");
    }
    
});

// $(window).resize(function() {
//     var width = $(window).width();
//     if (width > 576){
//         $("#header-menu").show();
//     }else{
//         $("#header-menu").hide();
//     }
//   });