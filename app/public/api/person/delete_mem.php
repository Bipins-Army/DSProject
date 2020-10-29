<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'DELETE FROM persons WHERE personalID = ?'
);

$stmt->execute([
  $_POST['personalID'],
]);

// If needed, get auto-generated PK from DB
$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../Certification/?CertificationID=' . $pk);
