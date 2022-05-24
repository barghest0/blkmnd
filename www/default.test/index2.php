<?php
try {
	$dbh = new PDO('mysql:dbname=example;host=mysql', 'root', 'root');
} catch (PDOException $e) {
	die($e->getMessage());
}


$sth = $dbh->prepare("SELECT * FROM `ex`");
$sth->execute([]);
$array = $sth->fetch(PDO::FETCH_ASSOC);
print_r($array);


// phpinfo();