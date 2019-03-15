



var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/sensor.json');

xhr.addEventListener('load', function(){
    var resposta = xhr.responseText;		
    var temperaturas = JSON.parse(resposta);

    document.getElementById('serial').innerHTML = temperaturas.serial;
    document.getElementById('label').innerHTML = temperaturas.label;
    document.getElementById('temperature_min').innerHTML = temperaturas.temperature_min;
    document.getElementById('temperature_max').innerHTML = temperaturas.temperature_max;

            
          
        
console.log(resposta
  );


  google.charts.load('current', {'packages':['annotationchart'], 'lenguage' : 'pt'});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Kepler-22b mission');
    data.addColumn('string', 'Kepler title');
    data.addColumn('string', 'Kepler text');
         
      var i = 0;
      
      
      temperaturas.measurements.forEach( function(){ 
        var dia = temperaturas.measurements[i].date_hour.slice(9, 10);  
        var mes = temperaturas.measurements[i].date_hour.slice(6, 7); 
        var ano = temperaturas.measurements[i].date_hour.slice(0, 4);  
        var hora = temperaturas.measurements[i].date_hour.slice(11, 13);
        var minuto = temperaturas.measurements[i].date_hour.slice(14, 16);
        var temperatura = temperaturas.measurements[i].temperature * -1;        
        var descricao = hora.concat(':', minuto);    
        data.addRows([
          [new Date(ano, mes, dia, hora, minuto), temperatura, descricao, ''],          
        ]);               
        i++;     
      });	            
  



    var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div'));

    var options = {
      displayAnnotations: true
    };

    chart.draw(data, options);
  }

});
xhr.send();