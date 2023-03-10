<?php 

include 'db.php';

// Check connection
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $text = $_POST['text'];


    $sql = "INSERT INTO form3 (name, company, email, number, text) VALUES ('$name', '$company', '$email', '$number', '$text')";
    $res = mysqli_query($conn,$sql);
    if ($res) {
    echo "Success";
    } else {
        echo "Error:";
    }
    $conn->close();
}
?>