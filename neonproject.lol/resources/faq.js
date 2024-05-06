$('.faq__card').click(function() {
    $(this).parent().find('.faq__card__content').slideToggle()
});

function toggleFAQ(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}
