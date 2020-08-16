setInterval(function() { grow(); }, 250);

function grow() {
    $('#circle').css('height', '10px');
    $('#circle').css('width', '10px');
}
$('#circle').click().css('display: none');