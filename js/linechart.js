

google.charts.load('current', {'packages':['corechart']});





function desenhaGrafico(){

  var xhr = new XMLHttpRequest();
	xhr.open('GET', 'js/sensor.json');

	xhr.addEventListener('load', function(){
		var resposta = xhr.responseText;		
		var temperaturas = JSON.parse(resposta);

		document.getElementById('serial').innerHTML = temperaturas.serial;
		document.getElementById('label').innerHTML = temperaturas.label;
		document.getElementById('temperature_min').innerHTML = temperaturas.temperature_min;
    document.getElementById('temperature_max').innerHTML = temperaturas.temperature_max;

      
        
     

        
        
        google.charts.load('current', {packages: ['corechart', 'line']});
        google.charts.setOnLoadCallback(drawBackgroundColor);
        
        function drawBackgroundColor() {
              var data = new google.visualization.DataTable();              
              data.addColumn('number', 'Data');
              data.addColumn('number', 'Temperatura');
              
              var i = 0;
              temperaturas.measurements.forEach( function(){         
                var temperatures = temperaturas.measurements[i].temperature;    
                data.addRows([[i ,temperatures]]);
                i++;	            
            });
             
        
              var options = {
                hAxis: {
                  title: 'Time'
                },
                vAxis: {
                  title: 'Temperatura'
                },
                backgroundColor: '#f1f8e9'
              };
        
              var chart = new google.visualization.LineChart(document.getElementById('line-chart'));
              chart.draw(data, options);
            }
        
      
		
	});
	xhr.send();

    
}
google.charts.setOnLoadCallback(desenhaGrafico);

