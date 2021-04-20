<?php
include_once 'databaseCON.php';
$datas=0;
$dataSelect=$_POST['dataSelectata'];
$oraSelect=$_POST['intervalSelectat'];
$sql="SELECT intervalT FROM `Pacienti` WHERE date='$dataSelect' AND intervalT='$oraSelect';";
$result=mysqli_query($conn,$sql);
$resultCheck=mysqli_num_rows($result);

if($resultCheck > 0)
{
    while(mysqli_fetch_assoc($result))
    {
        $datas=$datas+1;
    }
}

if($datas>=4)
{
    echo "true";
}
else
{
    echo "false";
}