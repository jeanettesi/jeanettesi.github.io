<!DOCTYPE html>
    <html>
        <head>
            <link href="css/style.css" rel="stylesheet" type="text/css">
            <link href='https://fonts.googleapis.com/css?family=Seaweed+Script' rel='stylesheet' type='text/css'>
            <link href='https://fonts.googleapis.com/css?family=Cabin:400,500' rel='stylesheet' type='text/css'>
            <link href='https://fonts.googleapis.com/css?family=Noto+Serif' rel='stylesheet' type='text/css'>
            
            <script src="script/jquery-1.12.0.min.js"></script>
            <script src="script/transitions.js"></script>
            
            
            <!--I used two helper plugins: fullPage.js and fancyBox. Below are the files I used specifically for the plugins-->
            <link href="css/jquery.fullPage.css" rel="stylesheet" type="text/css">
            <link href="css/jquery.fancybox.css" rel="stylesheet" type="text/css">
            <script src="script/jquery.fullPage.min.js"></script>
            <script src="script/jquery.fancybox.js"></script>
            <title>jeanette.si | welcome</title>
        </head>
        <body>
            <div id = "wrap"><!--Main cover photo was my own picture-->
            <ul id="nav"> 
                <li><a href="#section1" id="design">design&amp;</a></li>
                <li><a href="#section2" id="writing">writing&amp;</a></li>
                <li><a href="#section3" id="resume">resume&amp;</a></li>
                <li><a href="#section4" id="about">about&amp;</a></li>
                <li><a href="#section5" id="contact">contact&amp;</a></li>
            </ul>
                <h1 id="name">jeanette.si</h1>
            <p id="motto">think big. design bigger. let's go.</p>
            </div>
            
            <div id="fullpage">
                
    <!--Start "Design" page. All designs shown on this page are all my own work and screencapped by me-->
                <?php include "php/design.php"?>
   <!--End Design page-->
                
   <!--Start Writing page-->             
                <?php include "php/writing.php"?>
     <!--End Writing page-->
                
     <!--Start Resume page-->           
                <?php include "php/resume.php"?>
      <!--End Resume page-->
                
      <!--Start About page-->
                <?php include "php/about.php"?>
       <!--End About page-->
                
       <!--Start Contact page-->         
                <?php include "php/contact.php"?>
       <!--End Contact page-->
            </div>
        </body>
    </html>
