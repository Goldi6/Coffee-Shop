<?php
if (file_exists('db_data.php')) {
    require 'db_data.php';
} else {
    require 'db_userData.php';
}