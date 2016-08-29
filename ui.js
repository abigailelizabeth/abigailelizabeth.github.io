$( document ).ready(function() {
       if (window.matchMedia('(min-width: 767px)').matches) {
            $("#languageList").show();
            $("#frameworkList").show();
            $("#operatingList").show();
            $("#otherList").show();
    
    } else {
            $("#languageList").hide();
            $("#frameworkList").hide();
            $("#operatingList").hide();
            $("#otherList").hide();
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
});

