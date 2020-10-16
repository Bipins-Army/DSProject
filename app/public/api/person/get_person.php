<?php

require 'common.php';


$db = DbConnection::getConnection();

$sql = 'SELECT * FROM Person';
$vars = [];

if (isset($_GET['PersonalID'])) {
  $sql = 'SELECT * FROM Person WHERE PersonalID = ?';
  $vars = [$_GET['PersonalID']]
}

$stmt = $db->prepare($sql)
$stmt->execute($vars);

$users = $stmt->fetchAll();

$json = json_encode($users, JSON_PRETTY_PRINT)

header('Content-Type: application/json');
echo $json;
