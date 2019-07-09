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
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Cabin:700" rel="stylesheet" type="text/css">
  <!-- Import CSS -->
  <link href="css/php.css" rel="stylesheet" type="text/css">
  <title><?php echo $ate; ?></title>
</head>
<body>
  <div>
    <?php echo $ate;?>
  </div>
</body>
</html>
