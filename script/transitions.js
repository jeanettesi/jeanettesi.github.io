$(document).ready(function () {
    //Initialize fullpage.js
    $('#fullpage').fullpage ({
        anchors:['section1', 'section2', 'section3', 'section4', 'section5'],
        //css3: false,
    });
    //Initialize FancyBox
    $(document).ready(function() {
		$(".fancybox").fancybox({
            scrolling: "no",
            scrollOutside: "false"
        });
	});
    
    //Function to move over navigation bar as page resizes
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    $(window).resize(function() {
        viewportWidth = $(window).width();
        viewportHeight = $(window).height();
        if ($("#wrap").offset().left !== 0) {
            if (viewportHeight >= viewportWidth){
            $("#wrap").animate( {right: '93%'} );    
            } else{
            
            if (viewportWidth >= 1200){
            $("#wrap").animate( {right: '68%'} );
            } else if (viewportWidth < 1200 && viewportWidth >= 900){
            $("#wrap").animate( {right: '60%'} );    
            } else if (viewportWidth < 900 && viewportWidth >= 550){
            $("#wrap").animate( {right: '55%'} );    
            } 
            }
       }
    });
    //Function to slide over cover picture into navigation bar on click
    $("#design").click(function () {
        if ($("#wrap").offset().left === 0) {
            if (viewportHeight > viewportWidth){
            $("#wrap").animate( {right: '93%'} );    
            } else{
            
            if (viewportWidth >= 1200){
            $("#wrap").animate( {right: '68%'} );
            } else if (viewportWidth < 1200 && viewportWidth >= 900){
            $("#wrap").animate( {right: '60%'} );    
            } else if (viewportWidth < 900 && viewportWidth >= 550){
            $("#wrap").animate( {right: '55%'} );    
            } 
            }
            document.getElementById("designPage").style.visibility = "visible";
            document.getElementById("writingPage").style.visibility = "visible";
            document.getElementById("resumePage").style.visibility = "visible";
            document.getElementById("aboutPage").style.visibility = "visible";
            document.getElementById("contactPage").style.visibility = "visible";
        } 
    });
    $("#writing").click(function () {
        if ($("#wrap").offset().left === 0) {
            if (viewportHeight > viewportWidth){
            $("#wrap").animate( {right: '93%'} );    
            } else{
            
            if (viewportWidth >= 1200){
            $("#wrap").animate( {right: '68%'} );
            } else if (viewportWidth < 1200 && viewportWidth >= 900){
            $("#wrap").animate( {right: '60%'} );    
            } else if (viewportWidth < 900 && viewportWidth >= 550){
            $("#wrap").animate( {right: '55%'} );    
            } 
            }
            document.getElementById("designPage").style.visibility = "visible";
            document.getElementById("writingPage").style.visibility = "visible";
            document.getElementById("resumePage").style.visibility = "visible";
            document.getElementById("aboutPage").style.visibility = "visible";
            document.getElementById("contactPage").style.visibility = "visible";
        } 
    });
    $("#resume").click(function () {
        if ($("#wrap").offset().left === 0) {
            if (viewportHeight > viewportWidth){
            $("#wrap").animate( {right: '93%'} );    
            } else{
            
            if (viewportWidth >= 1200){
            $("#wrap").animate( {right: '68%'} );
            } else if (viewportWidth < 1200 && viewportWidth >= 900){
            $("#wrap").animate( {right: '60%'} );    
            } else if (viewportWidth < 900 && viewportWidth >= 550){
            $("#wrap").animate( {right: '55%'} );    
            } 
            }
            document.getElementById("designPage").style.visibility = "visible";
            document.getElementById("writingPage").style.visibility = "visible";
            document.getElementById("resumePage").style.visibility = "visible";
            document.getElementById("aboutPage").style.visibility = "visible";
            document.getElementById("contactPage").style.visibility = "visible";
        } 
    });
    $("#about").click(function () {
        if ($("#wrap").offset().left === 0) {
            if (viewportHeight > viewportWidth){
            $("#wrap").animate( {right: '93%'} );    
            } else{
            
            if (viewportWidth >= 1200){
            $("#wrap").animate( {right: '68%'} );
            } else if (viewportWidth < 1200 && viewportWidth >= 900){
            $("#wrap").animate( {right: '60%'} );    
            } else if (viewportWidth < 900 && viewportWidth >= 550){
            $("#wrap").animate( {right: '55%'} );    
            } 
            }
            document.getElementById("designPage").style.visibility = "visible";
            document.getElementById("writingPage").style.visibility = "visible";
            document.getElementById("resumePage").style.visibility = "visible";
            document.getElementById("aboutPage").style.visibility = "visible";
            document.getElementById("contactPage").style.visibility = "visible";
        } 
    });
    $("#contact").click(function () {
        if ($("#wrap").offset().left === 0) {
            if (viewportHeight > viewportWidth){
            $("#wrap").animate( {right: '93%'} );    
            } else{
            
            if (viewportWidth >= 1200){
            $("#wrap").animate( {right: '68%'} );
            } else if (viewportWidth < 1200 && viewportWidth >= 900){
            $("#wrap").animate( {right: '60%'} );    
            } else if (viewportWidth < 900 && viewportWidth >= 550){
            $("#wrap").animate( {right: '55%'} );    
            } 
            }
            document.getElementById("designPage").style.visibility = "visible";
            document.getElementById("writingPage").style.visibility = "visible";
            document.getElementById("resumePage").style.visibility = "visible";
            document.getElementById("aboutPage").style.visibility = "visible";
            document.getElementById("contactPage").style.visibility = "visible";
        } 
    });
    //Function to slide back the cover page when name is clicked
    $("#name").click(function () {
        if ($("#wrap").offset().left !== 0) {
            $("#wrap").animate( {right: '0%'} );
    
           
        }
        
    })
    
    if (viewportHeight > 1000 && viewportWidth < 750){
        ("#name").css("font-size", "3em");
    }
});