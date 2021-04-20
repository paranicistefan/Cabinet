<?php
  
 echo "
  <style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td{
    border: 1px solid #000000;
    text-align: left;
    padding: 8px;
    font-size: 1.5rem;
  }

  th {
    border: 1px solid #000000;
    background-color: #dddddd;
    text-align: left;
    padding: 8px;
    font-size: 1.5rem;
  }
  p {
      font-size: 1.5rem;
  }
  </style>
  ";
for($i=1;$i<=3;$i++)
{
  include 'databaseCON.php';
  $luni=array(
    "01"=>"Ianuarie",
      "02"=>"Februarie",
      "03"=>"Martie",
      "04"=>"Aprilie",
      "05"=>"Mai",
      "06"=>"Iunie",
      "07"=>"Iulie",
      "08"=>"August",
      "09"=>"Septembrie",
      "10"=>"Octombire",
      "11"=>"Noiembrie",
      "12"=>"Decembrie");
  $date = date('d ', time() + ($i * 24 * 60 * 60)).$luni[date('m', time())].date(' Y', time());
  $sql = "SELECT * FROM `Pacienti` WHERE date='$date';";
  $result= mysqli_query($conn,$sql);
  $resultCheck=mysqli_num_rows($result);
  if($resultCheck > 0)
  {
    echo "<p>Programarile pe ".$date." sunt:</p>"; 
    echo "
      <table>
          <tr>
              <th>Nume</th>
              <th>Prenume</th>
              <th>Telefon</th>
              <th>Data prgramarii</th>
              <th>Intervalul Orar</th>
          </tr>
          ";
    
      while($row = mysqli_fetch_assoc($result))
      {
          echo 
          "<tr>".
              "<td>".$row['nume']."</td>".
              "<td>".$row['prenume'].".</td>".
              "<td>".$row['telefon']."</td>".
              "<td>".$row['date']."</td>".
              "<td>".$row['intervalT']."</td>".
          "</tr>";
      }
      echo "</table>";
  }
  else
  {
    echo "<p>Nu exista nici-o programare pe: ".$date;
  }
}