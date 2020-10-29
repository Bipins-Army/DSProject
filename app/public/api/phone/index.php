<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM person_phone';
$vars = [];

if (isset($_GET['PersonalID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM person_phone WHERE PersonalID = ?';
  $vars = [ $_GET['PersonalID'] ];
}
$stmt = $db->prepare($sql);
$stmt->execute($vars);

$cert = $stmt->fetchAll();

$json = json_encode($cert, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
