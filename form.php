<?php
$phone = $_POST['phone'];
$name = $_POST['name'];
$adres = $_POST['adres'];
$message = $_POST['message'];

/*
$phone = htmlspecialchars($phone);
$name = htmlspecialchars($name);
$message = htmlspecialchars($message);

$phone = urldecode($phone);
$name = urldecode($name);
$message = urldecode($message);

$phone = trim($phone);
$name = trim($name);
$message = trim($message);
*/
 if (mail("viktorkyrylovych88@gmail.com", "Заявка с сайта", "Name:".$name.". Email: ".$phone.". Message: ".$message. ". Adres: ".$adres ,"From: -fdmitrijkrasiluk4@gmail.com \r\n")){
 header("Location: http://glass-nsk.ru/");
 } else {
 echo "При отправке сообщения возникли ошибки";
 }

?>
