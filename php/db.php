<?php 

header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "israel_project";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
?>