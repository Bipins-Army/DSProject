<?php

require 'common.php';


$db = DbConnection::getConnection();

$sql = 'SELECT * FROM person_phone';
$vars = [];


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$users = $stmt->fetchAll();

$json = json_encode($users, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
