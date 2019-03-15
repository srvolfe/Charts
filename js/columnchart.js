




google.charts.load('current', {'packages' : ['corechart', 'table', 'gauge', 'controls'], 'lenguage' : 'pt'});


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

        var dashboard = new google.visualization.Dashboard(document.getElementById('chartRangeFilter_dashboard_div'));
      
        var control = new google.visualization.ControlWrapper({
            'controlType': 'ChartRangeFilter',
            'containerId': 'chartRangeFilter_control_div',
            'options': {
              // Filter by the date axis.
              'filterColumnIndex': 0,
              'ui': {
                'chartType': 'LineChart',
                'chartOptions': {
                  'chartArea': {'width': '90%'},
                  'hAxis': {'baselineColor': 'none'}
                },
                // Display a single series that shows the closing value of the stock.
                // Thus, this view has two columns: the date (axis) and the stock value (line series).
                'chartView': {
                  'columns': [0, 3]
                },
                // 1 day in milliseconds = 24 * 60 * 60 * 1000 = 86,400,000
                'minRangeSize': 86400000
              }
            },
            // Initial range: 2012-02-09 to 2012-03-20.
            'state': {'range': {'start': new Date(2019, 3, 5), 'end': new Date(2019, 3, 7)}}
          });

          var chart = new google.visualization.ChartWrapper({
            'chartType': 'CandlestickChart',
            'containerId': 'chartRangeFilter_chart_div',
            'options': {
              // Use the same chart area width as the control for axis alignment.
              'chartArea': {'height': '80%', 'width': '90%'},
              'hAxis': {'slantedText': false},
              'vAxis': {'viewWindow': {'min': 0, 'max': 2000}},
              'legend': {'position': 'none'}
            },
            // Convert the first column from 'date' to 'string'.
            'view': {
              'columns': [
                {
                  'calc': function(dataTable, rowIndex) {
                    return dataTable.getFormattedValue(rowIndex, 0);
                  },
                  'type': 'string'
                }, 1, 2, 3, 4]
            }
          });
        
        
       
        var tabela = new google.visualization.DataTable();        
        tabela.addColumn('string', 'hora');
        tabela.addColumn('number', 'temperatura');
        var i = 0;

        temperaturas.measurements.forEach( function(){ 
        
            var temperatures = temperaturas.measurements[i].temperature;
            tabela.addRows([
                [temperaturas.measurements[i].date_hour.slice(0, 16), temperatures]
            ]);
            i++;	            
        });

        var grafico = new google.visualization.ColumnChart(document.getElementById('grafico-json'));
        var opcoes = {
            title: 'Modelo Coluna',
            vAxis: {
                format: 'decimal', 
                gridlines: {count: 4, color: ''},
                title: 'Temperatura'
                }, 
            hAxis: {
                title: 'Linha do Tempo'
            },
            curveType: 'function'
        }

        dashboard.bind(control, chart);
        grafico.draw(tabela, opcoes);  
		
	});
	xhr.send();

    
}
google.charts.setOnLoadCallback(desenhaGrafico);

