<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM Certification';
$vars = [];

if (isset($_GET['CertificationID'])) {
  $sql = 'SELECT * FROM Certification WHERE CertificationID =?';
  $vars = [$_GET['CertificationID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$cert = $stmt->fetchAll();

$json = json_encode($cert, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
