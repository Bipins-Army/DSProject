<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT c.certificationName , p.PersonalID, pc.expirationDate, c.certifyingAgency FROM Person_Certification as pc, Certification as c, Person as p
WHERE c.CertificationID = pc.CertificationID and p.PersonalID = pc.PersonalID ORDER BY pc.expirationDate ASC';
$vars = [];


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$cert = $stmt->fetchAll();

$json = json_encode($cert, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
