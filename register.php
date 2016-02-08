<?php
session_start();
require_once 'connection.php';
try {

define('DB_HOST', getenv('OPENSHIFT_MYSQL_DB_HOST')); //ENSURES THE DB CONNECTION//
define('DB_PORT',getenv('OPENSHIFT_MYSQL_DB_PORT')); 
define('DB_USER',getenv('OPENSHIFT_MYSQL_DB_USERNAME'));
define('DB_PASS',getenv('OPENSHIFT_MYSQL_DB_PASSWORD'));
define('DB_NAME',getenv('OPENSHIFT_GEAR_NAME'));

$dsn = 'mysql:dbname='.DB_NAME.';host='.DB_HOST.';port='.DB_PORT;
$db = new PDO($dsn, DB_USER, DB_PASS);
 $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
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
echo "string";
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