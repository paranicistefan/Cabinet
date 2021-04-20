<?php
include_once 'databaseCON.php';
$datas=0;
$dataSelect=$_POST['dataSelectata'];
$ziuaSapt=$_POST['ziuaSapt'];
$sql="SELECT date FROM `Pacienti` WHERE date='$dataSelect';";
$result=mysqli_query($conn,$sql);
$resultCheck=mysqli_num_rows($result);

if($resultCheck > 0)
{
    while(mysqli_fetch_assoc($result))
    {
        $datas=$datas+1;
    }
}

if($datas>=12)
{
    echo "true";
}
elseif($datas>=4 and $ziuaSapt==5)
{
    echo"true";
}
else
{
    echo "false";
}