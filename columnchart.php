<?php  include('header.php') ?> 
	
	<main>
		<header>
			<h2></h2>
		</header>
		

		<div class="align">
			<ul class="sensor">
				<li>Serial: <b><span id="serial"></span></b></li>
				<li>Label: <b><span id="label"></span></b></li>
				<li>Temperature miníma: <b><span id="temperature_min"></span></b></li>
				<li>Temperature máxima: <b><span id="temperature_max"></span></b></li>			
			</ul>		
			<div id="grafico-json"></div>
		</div>
	
      
				
		
	</main>

	<footer>
		<p>Copyright 2019 Lucas Volfe</p>
	</footer>

	<script type="text/javascript" src="js/sensor.json"></script>	
	<script type="text/javascript" src="js/columnchart.js"></script>




	<script>
	/*	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'js/sensor.json');

	xhr.addEventListener('load', function(){
		var resposta = xhr.responseText;		
		var temperaturas = JSON.parse(resposta);

		document.getElementById('serial').innerHTML = temperaturas.serial;
		document.getElementById('label').innerHTML = temperaturas.label;
		document.getElementById('temperature_min').innerHTML = temperaturas.temperature_min;
		document.getElementById('temperature_max').innerHTML = temperaturas.temperature_max;

				
		
		temperaturas.forEach( function(){

		});		
		}			
	});
	xhr.send();*/
	</script>

	

</body>

</html>
