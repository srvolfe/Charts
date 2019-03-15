<!DOCTYPE HTML>

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" type="text/css" href="css/estilos.min.css"/>
	<title>PackID</title>

	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>



</head>

<body>

	<header>
		<nav>
			<ul>
				<li><img src="img/logo.png"></li>

				<li class="menu-desk">
					<div class="box-menu-icon" id="menu-mob">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
					 </div>
					 <ul class="links" id="links">
						<li><a href="annotationchart.php">AnnotationChart</a></li>
						<li><a href="columnchart.php">ColumnChart</a></li>
						<li><a href="linechart.php">LineChart</a></li> 
						<li><a href="data-analise.php">Analises</a></li> 
					 </ul>
				</li>
			</ul>
			
		</nav>
	</header>
	
<script>
var botao = document.getElementById("menu-mob");
botao.addEventListener("click", openMenu);
function openMenu(){

	var botoes = document.getElementById("menu-mob");
	botoes.classList.toggle("botoes-open");

	var links = document.getElementById("links");
	links.classList.toggle("links-open");
};

</script>