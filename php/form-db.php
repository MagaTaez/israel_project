<?php 

include 'db.php';

// Check connection
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $budget = $_POST['budget'];
    $terms = $_POST['terms'];
    $text = $_POST['text'];


    $sql = "INSERT INTO form (name, email, number, budget, terms, text) VALUES ('$name', '$email', '$number', '$budget', '$terms', '$text')";
    $res = mysqli_query($conn,$sql);
    if ($res) {
    echo "Success";
    } else {
        echo "Error:";
    }
    $conn->close();
}
?>