<?php

require 'common.php';


$db = DbConnection::getConnection();


$sql ="SELECT firstName, lastName, stationNumber, radioNumber, email FROM Person
ORDER BY stationNumber ASC, radioNumber ASC";

$vars = [];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$exp_cert = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($exp_cert, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
