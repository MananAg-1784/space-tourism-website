
$(document).ready( function(){
    var img_1 = $('#nav_mobile_icon img:first-child');
    var img_2 = $('#nav_mobile_icon img:last-child');

    img_1.on('click', function(){
        img_2.css('display','inline');
        img_1.css('display','none');
        $('#nav-menu').toggle('slide');
    });

    img_2.on('click', function(){
        $('#nav-menu').toggle('slide');
        img_1.css('display','inline');
        img_2.css('display','none');
    })
});



/*Get the pathname of the current file
const activePage = window.location.pathname;
console.log(activePage);

const navLinks = document.querySelectorAll( 'a' ).
 forEach( link => {
    if( link.href.includes('${activePage}')) {
        link.classList.add('active');
    }
 }) */
       
       
       
/* $(document).ready( function(){

    $('a').on('click', function(){
        var target = $(this.getAttribute('href'));
        target.addClass('active');
    });

}); */