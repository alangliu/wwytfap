$(".boxInner").click(function() {
    $('.bs-example-modal-lg').modal({});
});

$('#exampleModal').on('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = $(event.relatedTarget)

    // get url from img and use it to find other info in trade array
    var url = $(button).find("img").attr("src");
    var info = trade.filter(function(e) { return e.url == url })[0];

    // Get the modal and put in the information for this image
    var modal = $(this);
    modal.find('.modal-title').text(info.name);
    modal.find('.modal-item').text(info.item);
    modal.find('.modal-image').prepend('<img class="item-image" src=\"' + url + '\" />')
})

$('#exampleModal').on('hidden.bs.modal', function (e) {
  var modal = $(this);
  modal.find('.modal-image').empty();
});

