$(document).ready(function(){

    // get all gifts in db and display
    $.ajax('/api/gifts', {
        type: 'GET'
    })
    .then(function(res){
        var secretSanta = $('#secretSanta');
        var kids = $('#kids');
        
        if(res){
            $.each(res, function(i){
                if(['Gatlin','Lincoln','Jaron','Ava'].includes(res[i].person)){
                var outerDiv = $('<div></div>')
                    .addClass('list-group-item list-group-item-action flex-column align-items-start')
                    .appendTo(kids);
                var hdiv = $('<div></div>')
                    .addClass('d-flex w-100 justify-content-between')
                    .appendTo(outerDiv);
                var h5 = $('<h5></h5>')
                    .addClass('mb-1')
                    .text(res[i].person)
                    .appendTo(hdiv);
                var p = $('<p></p>')
                    .addClass('mb-1')
                    .text(res[i].descr)
                    .appendTo(outerDiv);
                var url = $('<a></a>')
                    .text(res[i].url)
                    .attr('href',res[i].url)
                    .appendTo(outerDiv);
                var ckDiv = $('<div></div>')
                    .addClass('form-check')
                    .appendTo(outerDiv);
                var input = $('<input type="checkbox" name="checkbox">')
                    .addClass('form-check-input')
                    .attr('id', res[i].id)
                    .appendTo(ckDiv)
                var label = $('<label></label>')
                    .addClass('form-check-label')
                    .text(' Claim this gift for '+ res[i].person)
                    .appendTo(ckDiv);}
                else{
                    var outerDiv = $('<div></div>')
                    .addClass('list-group-item list-group-item-action flex-column align-items-start')
                    .appendTo(secretSanta);
                var hdiv = $('<div></div>')
                    .addClass('d-flex w-100 justify-content-between')
                    .appendTo(outerDiv);
                var h5 = $('<h5></h5>')
                    .addClass('mb-1')
                    .text(res[i].person)
                    .appendTo(hdiv);
                var p = $('<p></p>')
                    .addClass('mb-1')
                    .text(res[i].descr)
                    .appendTo(outerDiv);
                var url = $('<a></a>')
                    .text(res[i].url)
                    .attr('href',res[i].url)
                    .appendTo(outerDiv);
                }
            })
        }
    });

    // update my name
    // $(".form-check-input").change(function() {
    //     if(this.checked) {
    //         console.log(this.id)
    //     }
    // });
    // $('input[name=checkbox]').change(function(event){
    //     event.preventDefault();
    //     var id=$(this).data('id');
    //     var purchased=$(this).data('purchased');

    //     console.log("id");
    //     console.log("purchased");
    //     $.ajax('/api/gift', {
    //         type: 'PUT',
    //         purchased: purchased,
    //         id: id
    //     })
    // });


    // adding a gift
    $("#btn").on("click", function(event) {
        event.preventDefault();
        
        var descr = $('#giftInput');
        var person = $('#nameInput');
        var url = $('#urlInput');

        if(!descr.val().trim() || !person.val().trim()){
            return;
        }

        var newGift = {
            descr: descr.val().trim(),
            person: person.val().trim(),
            url: url.val().trim()
        };

        $.ajax('/api/gift', {
            type: 'POST',
            data: newGift
        })
        .then(function(res){
            location.reload();
        })

    })



});