<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<?php
    function isBitten(){
     $random = rand(0, 1);
     return $random === 1 ? "Charlie ate my lunch!" : "Not THIS time, Charlie!";
    }
    $ate = isBitten();
?>
<head>
  <title><?php echo $ate; ?></title>
</head>
<body>
  <div>
    <?php echo $ate;?>
  </div>
</body>
</html>
