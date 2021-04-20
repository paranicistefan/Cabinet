<?php
$secretKey="6LfFVmQaAAAAAKUIO0_jgo1yWOG3l6iGw8voy5LL";
$responseKey=$_POST["g-recaptcha-response"];
$userIP=$_SERVER['REMOTE ADDR'];

$url="https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";

$response=file_get_contents($url);
$response=json_decode($response);
if($response->success)
    echo "true";
else
    echo "false";