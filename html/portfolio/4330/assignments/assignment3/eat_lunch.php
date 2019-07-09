<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<?php
    function isBitten(){
     $random = rand(0, 1);
     return $random === 1 ? "Charlie ate my lunch!" : "Charlie did not eat my lunch... not THIS time, Charlie!";
    }
?>
<head>
  <title><?php echo isBitten() ?></title>
</head>
<body>
  <div>
    <?php echo isBitten();?>
  </div>
</body>
</html>
