
$(function(){

    $(".info-dot").on('click', function(e){
        e.stopPropagation();
        $(this).find(".info-detail").addClass("show");
        $(".info-dot").not(this).find(".info-detail").removeClass("show");

    });

    $(document).on('click', function(){
        $(".info-detail").removeClass("show");
    });

    $("info-detail").on('click', function(e){
        e.stopPropagation();
    });
});