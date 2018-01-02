$(document).ready(function(){
    // console.log('loaded')
    // $("#draggable").draggable({
    //     cancel: false,
    //     helper: "clone"
    // })

    $( "#sort-form" ).sortable({
        cancel: false,
        cursor: "move"
    });
    $( "#sort-form" ).disableSelection({
        cancel: false,
    });
})
