<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO person_phone (PersonalID,type,phonenumber)
  VALUES  (?, ?, ?)'
);

$stmt->execute([
  $_POST['PersonalID'],
  $_POST['type'],
  $_POST['phonenumber']
]);

// If needed, get auto-generated PK from DB
$pk =  $_POST['PersonalID']; // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../phone/?PersonalID=' . $pk);
