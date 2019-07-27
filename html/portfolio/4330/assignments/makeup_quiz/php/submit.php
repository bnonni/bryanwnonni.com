<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
  <title>Registration Successful!</title>
  <link href="../css/submit.css" rel="stylesheet">
</head>
<body>
<div class="container">
<h1>You're Registered!</h1>
<p><span>Your Name</span>: <?php print $_POST["fullname"] ?></p>
<p><span>Email</span>: <?php print $_POST["email"] ?></p>
<p><span>Password</span>: <?php print $_POST["password"] ?></p>
<a href="../quiz.html"><button type="button" class="backbtn">Go Back</button></a>
</div>
</body>
</html>
