<?php

require 'common.php';


$db = DbConnection::getConnection();

$sql = 'SELECT * FROM Person_Certification';
$vars = [];

if (isset($_GET['CertificationID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM Person_Certification WHERE CertificationID = ?';
  $vars = [ $_GET['CertificationID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$users = $stmt->fetchAll();

$json = json_encode($users, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
