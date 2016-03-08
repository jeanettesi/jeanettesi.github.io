<?php

/*Used CodeChirps.com as a reference for this code*/

$myemail = "js2882@cornell.edu";

/*Matching fields to error messages*/
$array = array(
    $_POST['name'] => "Enter your name",
    $_POST['subject'] => "Enter a subject",
    $_POST['email'] => "",
    $_POST['message'] => "Write your message",
);
/*The loop is designed so that only the last error shows up on the error page as an error message. That way the user will be able to fix their mistakes one at a time. */
foreach($array as $x => $value) {
    if ($x == $_POST['name']){
        $name = check_input($x, $value);
    } elseif ($x == $_POST['subject']){
        $subject = check_input($x, $value);
    } elseif ($x == $_POST['email']){
        $email = check_input($x, $value);
    } else {
        $message = check_input($x, $value);
    }
}


/*Checking email validity*/

if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("E-mail address not valid");
}
/*Composing the message*/
$message = "

Name: $name
E-mail: $email
Subject: $subject

Message:
$message

";


mail($myemail, $subject, $message);


header('Location: ../files/thanks.html');
exit();

/*Functions to check input and show errors*/

function check_input($data, $problem=''){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0){
    show_error($problem);
    }
    return $data;
    }

function show_error($myError)
{
?>
<html>
        <head>
            <link href="../css/style.css" rel="stylesheet" type="text/css">
            <link href='https://fonts.googleapis.com/css?family=Seaweed+Script' rel='stylesheet' type='text/css'>
            <link href='https://fonts.googleapis.com/css?family=Cabin:400,500' rel='stylesheet' type='text/css'>
            <link href='https://fonts.googleapis.com/css?family=Noto+Serif' rel='stylesheet' type='text/css'>
            <link href="../css/jquery.fullPage.css" rel="stylesheet" type="text/css">
            <link href="../css/jquery.fancybox.css" rel="stylesheet" type="text/css">
            <script src="script/jquery-1.12.0.min.js"></script>
            <script src="script/transitions.js"></script>
            <!--I used two helper plugins: fullPage.js and fancyBox-->
            <script src="script/jquery.fullPage.min.js"></script>
            <script src="script/jquery.fancybox.js"></script>
            <title>jeanette.si | welcome</title>
        </head>
        <body class="emailresult">
            <h2>uh-oh.</h2>
            <hr>
            <p class="emailthanks">Please correct the following error:</p>
                <p class="emailthanks"><?php echo $myError; ?>.</p>
                <p class="emailthanks">Hit the button below to try again!</p>
            <hr>
            <a href="../index.html" class="backButton">Go back to the site!</a>
        </body>
</html>
<?php
exit();
}
?>