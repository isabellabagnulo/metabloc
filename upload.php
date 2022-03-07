<?php
$recipients_2 = array(
  "Information request for Metabloc"
  // more emails
  );
  $bcc = array(
    "isabella@superdigitale.it"
    // more emails
    );
$recipients = array(
  $_POST['email']
  // more emails
  );
  $subject = implode(',', $recipients_2); // your email address
  $email_to = implode(',', $recipients); // your email address
  $headers = 'BCC: '. implode(",", $bcc) . "\r\n";
  $headers .= "From: Metabloc <no-reply@metabloc.ch> \r\n"
  . "X-Mailer: PHP/" . phpversion();
//All form values
$uname    = $_POST['name'];
$ulastname    = $_POST['lastname'];
$uemail   = $_POST['email'];
$urequest   = $_POST['request'];
$output   = "\n
Metabloc
Information rquest fot Metabloc
From the site metabloc.ch
Name: ".$uname."\n
Last name: ".$ulastname."\n
Email: ".$uemail."\n
I have read the privacy policy and give my consent to the processing of personal data: SI\n
Message: ".$urquest;
$send   = mail($email_to, $subject, $output, $headers);
header("Location:index.html");