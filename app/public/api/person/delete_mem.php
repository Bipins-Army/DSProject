<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'DELETE FROM Person WHERE PersonalID = ?'
);

$stmt->execute([
  $_POST['PersonalID'],
]);
