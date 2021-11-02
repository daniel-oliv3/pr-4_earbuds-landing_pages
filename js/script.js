
$(function(){

    $(".info-dot").on('click', function(){
        $(this).find(".info-detail").addClass("show");
        $(".info-dot").not(this).find(".info-detail").removeClass("show");

    });
});