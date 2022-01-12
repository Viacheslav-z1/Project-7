<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$email = $_POST['mail']; // Берём данные из input c атрибутом name="mail"

$token = "5013573683:AAGMLZQFTIrTTWj-ivcV-tvdnAou2G1lUfo"; // Тут пишем токен
$chat_id = "-791747324"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "belecky.online"; //Указываем название сайта

$arr = array(

  'Заявка с сайта: ' => $sitename,
  'Имя и Фамилия' => $name,
  'Телефон: ' => $phone,
  'Почта' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>