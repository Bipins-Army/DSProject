<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'DELETE FROM Certification WHERE CertificationID = ?;'
);

$stmt->execute([
  $_POST['CertificationID'],
]);
