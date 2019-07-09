<?php// $months = array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
   // $unsorted = $months;

   // echo "<p>1) Print months in order using for loop.</p>\n";
   // echo "<ul>";
   // for($i = 0; $i < sizeof($months); $i++){
   //    echo $months[$i]."\n";
   // }
   // echo "</ul>";
   // echo "<br>";
   // echo "</p>2) Sort months in alphabetical order then print them.</p>\n";
   // sort($months);
   // echo "<ul>";
   // for($j = 0; $j < sizeof($months); $j++){
   //    echo $months[$j]."\n";
   // }
   // echo "</ul>";
   // echo "<br>";

   
   // echo "</p>3) Repeat steps 1 & 2 using forEach loop.</p>\n";
   // echo "</p>3.1) Print months in order using forEach loop.</p>\n";
   // echo "<ul>";
   // foreach ($unsorted as $key => $val) {
   //    echo "{$key} => $val"."\n";
   // }
   // echo "</ul>";
   // echo "<br>";
   // echo "3.2) Sort months and print in order using forEach loop.\n";
   // echo "<ul>";
   // foreach ($months as $key => $val) {
   //    echo "{$key} => $val"."\n";
   // }
   // echo "</ul>";
   // echo "<br>";
   
   // $atlanta = array ( "Chama Gaucha" => 40.50, "Aviva by Kameel" => 15.00, "Bone’s Restaurant" => 65.00, "Umi Sushi Buckhead" => 40.50, "Fandangles" => 30.00, "Capital Grille" => 60.50, "Canoe" => 35.50, "One Flew South" => 21.00,"Fox Bros. BBQ" => 15.00, "South City Kitchen Midtown" => 29.00);
   // print "<tr>";   
   // foreach ($atlanta as $key => $val) {
   //  print "<td>$key</td>";
   //  print "<td>$val/<td>";    
   //  print "</tr>";
   // }?>

<?php
  $atlanta = array ( 
    "Chama Gaucha" => 40.50,
    "Aviva by Kameel" => 15.00, 
    "Bone’s Restaurant" => 65.00, 
    "Umi Sushi Buckhead" => 40.50, 
    "Fandangles" => 30.00, 
    "Capital Grille" => 60.50, 
    "Canoe" => 35.50, 
    "One Flew South" => 21.00,
    "Fox Bros. BBQ" => 15.00, 
    "South City Kitchen Midtown" => 29.00
  );
  ?>
   <?php
   //   echo 
   //   "<table class='restaurants' width='300px' cellspacing='1px' cellpadding='1px' border='1px'>
   //    <tr>
   //      <th>Restaurant</th>
   //      <th>Ordered by Average Cost</th>
   //    </tr>
   //    <tr>";
   echo "No Order\n";
     foreach ($atlanta as $key => $val) {
      // "<td></td>"
      echo "key => ".$key;
      echo "val => ".$val."\n";
      // echo "</tr>";
     }
   //   echo "</table><br>"
    ?>
   <?php
   //  echo 
   //  "<table class='restaurants' width='300px' cellspacing='1px' cellpadding='1px' border='1px'>
   //   <tr>
   //     <th>Ordered by Restaurant</th>
   //     <th>Average Cost</th>
   //   </tr>
   //   <tr>";
   echo "Ordered by Restaurant\n";
     ksort($atlanta);
     foreach ($atlanta as $key => $val) {
      echo "key => ".$key;
      echo "val => ".$val."\n";    
      // echo "</tr>";
     }
   //   echo "</table><br>"
    ?>
   <?php
   //  echo 
   //  "<table class='restaurants' width='300px' cellspacing='1px' cellpadding='1px' border='1px'>
   //   <tr>
   //     <th>Restaurant</th>
   //     <th>Ordered by Average Cost</th>
   //   </tr>
   //   <tr>";
   //   echo "<tr>";
   echo "Ordered by Avg Cost\n";
     arsort($atlanta, 1);
     foreach ($atlanta as $key => $val) {
      echo "key => ".$key;
      echo "val => ".$val."\n";
      //   echo "</tr>";
       }
   //   echo "</table><br>"
    ?>