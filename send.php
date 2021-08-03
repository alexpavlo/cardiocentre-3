<?php
$mail = 'alexpavlov26.08@gmail.com';
$host = 'localhost';

if(isset($_POST['client_name']) and (isset($_POST['client_phone']))) {
    $client_name = $_POST['client_name'];
    $client_phone = $_POST['client_phone'];
    $body = "Отправитель : " .$client_name. "\r\n" . "Его телефон : " .$client_phone. "\r\n";

    mail($mail , 'Письмо с сайта' , $body);
    echo json_encode(array('success' => '1'));
}
else if (isset($_POST['client_choice']) and isset($_POST['client_mail']) and isset($_POST['client_phone'])) {
    $client_mail = $_POST['client_mail'];
    $client_choice = $_POST['client_choice'];
    $client_phone = $_POST['client_phone'];
    $body = "Его почта : " .$client_mail. "\r\n" ."Его телефон : " .$client_phone ."\r\n" ."Вид найма : " .$client_choice ."\r\n";
    mail($mail , 'Письмо с сайта' , $body);
    echo json_encode(array('success' => '1'));
    exit;
}
else if (isset($_POST['client_mail']) and isset($_POST['client_phone'])) {
    $client_mail = $_POST['client_mail'];
    $client_phone = $_POST['client_phone'];
    $body = "Его почта : " .$client_mail. "\r\n" ."Его телефон : " .$client_phone ."\r\n";
    mail($mail , 'Письмо с сайта' , $body);
    echo json_encode(array('success' => '1'));
    exit;
}