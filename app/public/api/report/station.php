<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'SELECT p.firstName, p.lastName, p.email, p.stationNumber, p.radioNumber FROM Person as p
  WHERE p.stationNumber = ? or p.radioNumber =? '
);

$stmt->execute([
  $_POST['stationNumber'],
  $_POST['radioNumber']
]);

// If needed, get auto-generated PK from DB // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');

header('Location: ../report/);
