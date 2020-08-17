setInterval(function() { grow(); }, 250);

function grow() {
    let width = parseInt($('#circle').css('width')) + 10;
    let height = parseInt($('#circle').css('height'));
    $('#circle').css('height', width + 'px');
    $('#circle').css('width', height + 'px');
}
$('#circle').click(function() {
    $(this).css('display', 'none');
});