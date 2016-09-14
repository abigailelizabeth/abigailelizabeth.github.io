$( document ).ready(function() {

    $("#languageList").hide();
    $("#frameworkList").hide();
    $("#operatingList").hide();
    $("#otherList").hide();
    $(".descHider").hide();
    $("#projectPage").hide();
    
    
   if (window.matchMedia('(max-width: 767px)').matches) {
        $(".jobContainer").click(function(){
//            whitespace and overflow
            
            $(".jobDesc").css("white-space", "nowrap");
            $(".descHider").hide();
            $(".jobTechnologies").hide();
            
           $(this).children("ul").children(".jobDesc").css("white-space", "normal"); 
            $(this).children("ul").children(".jobTechnologies").css("display", "inline");
            $(this).children("ul").children(".descHider").show();
            
            
             
        });
    }
    
    
    $(".languages").click(function(e){
       e.preventDefault();
        $(".languages").children("small").children("span").toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
       $("#languageList").slideToggle();
    });

    $(".frameworks").click(function(e){
       e.preventDefault();
        $(".frameworks").children("small").children("span").toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
       $("#frameworkList").slideToggle();
    });
    
    $(".operating").click(function(e){
       e.preventDefault();
        $(".operating").children("small").children("span").toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
       $("#operatingList").slideToggle();
    });
    
    $(".other").click(function(e){
       e.preventDefault();
        $(".other").children("small").children("span").toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
       $("#otherList").slideToggle();
    });

    $("#downloadPDF").click(function(e){
                            e.preventDefault();
                            alert("not today, sorrrryyyyy!");
                            });
//    "go to the next page"
    $(".projectTile").click(function(){
        alert("Under construction, try again later");
//        $("#homePage").hide();
//        $("#projectPage").show();
    });
    
    
    $("#returnHomeBtn").click(function(e){
       e.preventDefault();
        $("#homePage").show();
        $("#projectPage").hide();
    })
});

