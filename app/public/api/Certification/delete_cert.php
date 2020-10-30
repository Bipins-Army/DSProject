<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'DELETE FROM certification WHERE CertificationID = ?;'
);

$stmt->execute([
  $_POST['CertificationID'],
]);
