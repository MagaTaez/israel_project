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
    $text = $_POST['text'];


    $targetDir = "../uploads/";
    $fileName = basename($_FILES["upload"]["name"]);
    $fileDestination = $targetDir. '/' .$fileName;
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
    move_uploaded_file($_FILES["upload"]["tmp_name"], $fileDestination);

    $sql = "INSERT INTO form2 (name, email, number, text, upload) VALUES ('$name', '$email', '$number', '$text', '".$fileName."')";
    $res = mysqli_query($conn,$sql);
    if ($res) {
        echo "Success";
    } else {
        echo "Error:";
    }
    $conn->close();
}
?>