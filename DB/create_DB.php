<?php

require 'getLocalhostData.php';

$server = $serverName;
$user = $username;
$pass = $password;
$DB = $DBname;

$resTable = $reservationsTableName;
$subsTable = $clientsTableName;
///////////////////////////



#region CREATE DB
// Create connection
$conn = new mysqli($server, $user, $pass);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS $DB";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully.<br>";
} else {
    echo "Error creating database: " . $conn->error . "<br>";
}
#endregion
////////////////////////////////////////////////

// Create connection
$conn = new mysqli($server, $user, $pass, $DB);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
};


$sub_fields = ['id', 'reservation_date', 'clock', 'table_for', 'client_name', 'email', 'phone', 'code', 'made_timestamp', 'canceled', 'web'];
#region CREATE reservation table


$table_sql = "CREATE TABLE IF NOT EXISTS $resTable(
id INT NOT NULL  PRIMARY KEY AUTO_INCREMENT, 
reservation_date DATE NOT NULL,
clock TIME NOT NULL,
table_for INT(2) NOT NULL,
client_name VARCHAR(25) NOT NULL,
email VARCHAR(50) ,
phone INT(10) NOT NULL , 
code INT(43),
made_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
canceled INT(1),
web INT(1)
)";




$result = mysqli_query($conn, $table_sql);

if (!$result) {
    die('An error took place while creating' . $resTable . '  table: [' . $conn->error . ']<br>');
} else {

    echo "Table " . $resTable . " Successfully created  in " . $DB . ".<br>";
}

#endregion
////////////////////////////////
$res_fields = ['id', 'email', 'phone',  'subscribe_on', 'unsubscribe'];

#region CREATE SUBS TABLE

$table_sql = "CREATE TABLE IF NOT EXISTS $subsTable (
id INT NOT NULL  PRIMARY KEY AUTO_INCREMENT, 
email VARCHAR(50) NOT NULL,
-- phone INT(10) NOT NULL ,
subscribed_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
unsubscribe INT(1)
)";

$result = mysqli_query($conn, $table_sql);

if (!$result) {
    die('An error took place while creating' . $subsTable . '  table: [' . $conn->error . ']<br>');
} else {

    echo "Table " . $subsTable . " Successfully created  in " . $DB . ".<br>";
}

#endregion

$conn->close();