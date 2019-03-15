<?php include('header.php') ?>


<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type='text/javascript' src="js/annotationchart.js">    </script>
  </head>


  <body>
<div class="align">
    <ul class="sensor">
      <li>Serial: <b><span id="serial"></span></b></li>
      <li>Label: <b><span id="label"></span></b></li>
      <li>Temperature miníma: <b><span id="temperature_min"></span></b></li>
      <li>Temperature máxima: <b><span id="temperature_max"></span></b></li>			
    </ul>
    <div id='chart_div' ></div>
</div>
  
  </body>
</html>