<?php
$name = $_POST['main-form-name'];
$lastame = $_POST['main-form-lastname'];
$square = $_POST['main-form-square'];
$phone = $_POST['main-form-phone'];
$token = "1199462805:AAGIRcfxkWUkTZDDoGlU-xzqgBlKYf8B6H0";
$chat = "-458687277";

$arr = array(
  'Имя:' => $name,
  'Фамилия: ' => $lastame,
  'Квадратные метры: ' => $square,
  'Номер телефона' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>