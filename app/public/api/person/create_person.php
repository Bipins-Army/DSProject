<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'INSERT INTO Person (firstName, lastName, street, city, state, zipcode, email, dateofBirth, startDate, gender, position, radioNumber, stationNumber, isActive)
  VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['street'],
  $_POST['city'],
  $_POST['state'],
  $_POST['zipcode'],
  $_POST['email'],
  $_POST['dateofBirth'],
  $_POST['startDate'],
  $_POST['gender'],
  $_POST['position'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive']
]);

// If needed, get auto-generated PK from DB
// $pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../person/');
