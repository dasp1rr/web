<?php
  $pageTitle = "Добро пожаловать на мой сайт";
  $mainHeading = "Привет, мир!";
  $currentYear = date("Y");

  function getTimeWithWords() {
      $hours = (int)date('G');     
      $minutes = (int)date('i');     

      if ($hours % 10 == 1 && $hours % 100 != 11) {
          $hoursWord = "час";
      } elseif (in_array($hours % 10, [2, 3, 4]) && !in_array($hours % 100, [12, 13, 14])) {
          $hoursWord = "часа";
      } else {
          $hoursWord = "часов";
      }

      if ($minutes % 10 == 1 && $minutes % 100 != 11) {
          $minutesWord = "минута";
      } elseif (in_array($minutes % 10, [2, 3, 4]) && !in_array($minutes % 100, [12, 13, 14])) {
          $minutesWord = "минуты";
      } else {
          $minutesWord = "минут";
      }

      return "$hours $hoursWord $minutes $minutesWord";
  }

?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title><?= $pageTitle; ?></title>
  <link rel="stylesheet" href="src/assets/styles/style.css">
</head>
<body>
  <header>
    <div class="first">
      <h2>Задание 1.</h2>
      <h1><?= $mainHeading; ?></h1>
      <p>Страница на PHP.</p>
    </div>
    <div class="second">
      <h2>Задание 2.</h2>
      <?= getTimeWithWords(); ?>
    </div>
    
  </header>

  <footer>
    &copy; <?= $currentYear; ?>
  </footer>
</body>
</html>
