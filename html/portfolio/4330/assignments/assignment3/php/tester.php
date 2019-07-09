<?php
   $months = array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
   $unsorted = $months;

   echo "<p>1) Print months in order using for loop.</p>\n";
   echo "<ul>";
   for($i = 0; $i < sizeof($months); $i++){
      echo $months[$i]."\n";
   }
   echo "</ul>";
   echo "<br>";
   echo "</p>2) Sort months in alphabetical order then print them.</p>\n";
   sort($months);
   echo "<ul>";
   for($j = 0; $j < sizeof($months); $j++){
      echo $months[$j]."\n";
   }
   echo "</ul>";
   echo "<br>";

   
   echo "</p>3) Repeat steps 1 & 2 using forEach loop.</p>\n";
   echo "</p>3.1) Print months in order using forEach loop.</p>\n";
   echo "<ul>";
   foreach ($unsorted as $key => $val) {
      echo "{$key} => $val"."\n";
   }
   echo "</ul>";
   echo "<br>";
   echo "3.2) Sort months and print in order using forEach loop.\n";
   echo "<ul>";
   foreach ($months as $key => $val) {
      echo "{$key} => $val"."\n";
   }
   echo "</ul>";
   echo "<br>";
  ?>