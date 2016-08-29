$( document ).ready(function() {
    $("#languageList").hide();
    $("#frameworkList").hide();
    $("#operatingList").hide();
    $("#otherList").hide();
    
    
    $(".languages").click(function(e){
       e.preventDefault();
       $("#languageList").slideToggle();
    });

    $(".frameworks").click(function(e){
       e.preventDefault();
       $("#frameworkList").slideToggle();
    });
    
    $(".operating").click(function(e){
       e.preventDefault();
       $("#operatingList").slideToggle();
    });
    
    $(".other").click(function(e){
       e.preventDefault();
       $("#otherList").slideToggle();
    });

    $("#downloadPDF").click(function(e){
                            e.preventDefault();
                            alert("not today, sorrrryyyyy!");
                            });
});

