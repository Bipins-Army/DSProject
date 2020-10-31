<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM Person';
$vars = [];

if (isset($_GET['PersonalID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT p.firstName, p.lastName, c.CertificationID, c.certifyingAgency Person_Certification as pc, Certification as c, Person as p
  WHERE c.CertificationID = pc.CertificationID and p.PersonalID = pc.PersonalID and c.CertificationID=?';
  $vars = [ $_GET['PersonalID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$persons = $stmt->fetchAll();

$json = json_encode($persons, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
