<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'UPDATE Person SET firstName =?, lastName =?, street=?, city=?, state=?, zipcode=?, email=?, dateofBirth=?, startDate=?, gender=?, position=?, radioNumber=?, stationNumber=?, isActive=?
WHERE PersonalID =?');

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
  $_POST['isActive'],
  $_POST['PersonalID']
]);

$person_id = $_POST['PersonalID'];
//
header('HTTP/1.1 303 See Other');
header('Location: ../person/?PersonalID=' .$person_id);
