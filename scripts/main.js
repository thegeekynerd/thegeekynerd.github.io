// redirect = ()=>{
//     window.location.href="construction.html"
// }

$(document).ready(function(){
    $('.card').on('click ', function() {
        id=this.id
        if(id=='about')
            window.location.href=`${id}.html`
        else
            window.location.href="construction.html"
    });

    $('.menu').click(function() {
        $("#menuitems").toggleClass('sm-menuitems')
    });
})