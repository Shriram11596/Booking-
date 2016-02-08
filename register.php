<?php
session_start();
require_once 'connection.php';
try {
	if(isset($_POST['token']))
	{
$token = $_POST['token'];
echo $token;
}
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$time = date("Y-m-d H:i:s"); 
$message = "The cargo of weight 10 kg is booked from chennai to hyderabad by $name . Your number is $contact";
$record = $db->prepare("INSERT INTO REGISTER (NAME,EMAIL,CONTACT) SELECT * FROM (SELECT '$name', '$email', '$contact') AS tmp WHERE NOT EXISTS (SELECT * FROM REGISTER WHERE EMAIL = '$email' OR CONTACT = '$contact') LIMIT 1; ");
$execute = $record->execute();
if($record -> rowCount()>0)
{
echo json_encode(array(
	'success' => 'true',
	'booked' => 'true',
	'time' => $time,
	'owner' => $name,
	'contact' => $contact,
	'message' => $message,

	));
}

else
{
	echo json_encode(array(
	'success' => 'false',
	'failure' => 'true',
	'cause' => 'Person already exists',

	));
}

	
} catch (Exception $e) {
	
}


?>