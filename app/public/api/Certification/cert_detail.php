<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = "SELECT CONCAT(Person.firstName,' ', Person.lastName) as 'memberName', Certification.certificationName, Certification.certifyingAgency, Certification.standardExpiry
FROM Person, Person_Certification, Certification
WHERE Person.PersonalID = Person_Certification.PersonalID AND Person_Certification.CertificationID = Certification.CertificationID";

$vars = [];

if (isset($_GET['CertificationID'])) {
  $sql = 'SELECT Person.PersonalID, Certification.certificationName, Certification.certifyingAgency, Certification.standardExpiry
  FROM Person, Person_Certification, Certification
  WHERE Person.PersonalID = Person_Certification.PersonalID AND Person_Certification.CertificationID = Certification.CertificationID
  AND Person.PersonalID = ?';
  $vars = [ $_GET['CertificationID'] ];
  }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$memb = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $memb;
