$(function () {

    $(".ims__container").sortable({
        connectWith: '.ims__container',
        revert: true,
    });

    $(".ims__task").draggable({
        connectToSortable: '.ims__container',
        revert: "invalid",
        scroll: false,
    });

    $('.ims__container, .ims__task').disableSelection();
});
