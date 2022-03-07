<?php
$recipients_2 = array(
  "Information request for Metabloc"
  // more emails
  );
$recipients = array(
  $_POST['email'],
  'info@metabloc.ch'
  // more emails
  );
  $subject = implode(',', $recipients_2); // your email address
  $email_to = implode(',', $recipients); // your email address
  $headers .= "From: Metabloc <no-reply@metabloc.ch> \r\n"
  . "X-Mailer: PHP/" . phpversion();
//All form values
$uname    = $_POST['name'];
$ulastname    = $_POST['lastname'];
$uemail   = $_POST['email'];
$urequest   = $_POST['request'];
$output   = "\n
Metabloc
Information rquest fot Metabloc\n
From the site metabloc.ch\n
Name: ".$uname."\n
Last name: ".$ulastname."\n
Email: ".$uemail."\n
I have read the privacy policy and give my consent to the processing of personal data: SI\n
Message: ".$urequest;
$send   = mail($email_to, $subject, $output, $headers);
header("Location:index.html");