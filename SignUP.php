<?php
include_once 'databaseCON.php';
$nume = $_POST['Numele'];
$prenume = $_POST['Prenumele'];
$telefon = $_POST['Telefon'];
$data =$_POST['btnClickedValue'];
$ora=$_POST['ora'];

$sql="INSERT INTO Pacienti (nume,prenume,telefon,date,intervalT) VALUES ('$nume','$prenume','$telefon','$data','$ora');";
mysqli_query($conn,$sql);
header("Location: ../programmed");
