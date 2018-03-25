$(document).ready(function() {
    $('#send').click(function() {
        $('#contact').attr('action',
                       'mailto:dandesz198@gmail.com?subject=' +
                       $('#name').val() + '&body=' + $('#email').val());
        $('#contact').submit();
    });
})