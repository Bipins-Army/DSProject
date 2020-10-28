<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM Person';
$vars = [];


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$persons = $stmt->fetchAll();

$json = json_encode($persons, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
