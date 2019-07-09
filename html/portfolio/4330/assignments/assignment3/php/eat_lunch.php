<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <!-- bnonni.github.io / DigitalOcean Server -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125543146-1"></script><!-- Global site tag (gtag.js) - Google Analytics -->
    <script>window.dataLayer = window.dataLayer || [];function gtag() { dataLayer.push(arguments); } gtag("js", new Date());gtag("config", "UA-125543146-1");</script>
    <meta charset="utf-8">
    <meta name="robots" content="index, follow">
    <meta name="description" content="Bryan W. Nonni, LLC web development consulting website portfolio">
    <meta name="keywords" content="Bryan W. Nonni, Bryan W Nonni LLC, web development, web development consulting, web programming, technology consulting, small business consulting">
    <meta name="author" content="Bryan W. Nonni">
    <link rel="apple-touch-icon" sizes="57x57" href="../../../../img/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../../../../img/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../../../../img/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../../../../img/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../../../../img/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../../../../img/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../../../../img/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../../../../img/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../../../../img/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="../../../../img/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../../../img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../../../../img/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../../../img/favicon/favicon-16x16.png">
    <link rel="manifest" href="../../../../img/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="../../../../img/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
  <link href="../css/php.css" rel="stylesheet" type="text/css">
  <title><?php echo "Yes. " + $ate; ?></title>
</head>
<body>
  <div>
    <?php echo "Charlie did not eat my lunch! " + $ate;?>
  </div>
</body>
</html>
