<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'UPDATE Certification SET certifyingAgency=?,certificationName=?,standardExpiry=?
  WHERE CertificationID =?');


$stmt->execute([
  $_POST['certifyingAgency'],
  $_POST['certificationName'],
  $_POST['standardExpiry'],
  $_POST['CertificationID']
]);

// If needed, get auto-generated PK from DB
// $pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it

$certification_id = $_POST['CertificationID'];
//
header('HTTP/1.1 303 See Other');
header('Location: ../Certification/?CertificationID=' .$certification_id);
