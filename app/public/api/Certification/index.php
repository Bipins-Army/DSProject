<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM Certification';
$vars = [];


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$cert = $stmt->fetchAll();

$json = json_encode($cert, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
