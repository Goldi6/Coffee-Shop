<?php

require 'getLocalhostData.php';

$server = $serverName;
$user = $username;
$pass = $password;
$DB = $DBname;
///////////////////////////
$res_table = 'Client reservations';
$sub_table = 'Subscriptions';

$sub_fields = ['id', 'date', 'time', 'tableFor', 'name', 'phone', 'email', 'canceled', 'code'];
$res_fields = ['id', 'phone', 'email'];