google.charts.load('current', {'packages' : ['corechart'], 'lenguage' : 'pt'});
function desenhaGrafico(){
    tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'categoria');
    tabela.addColumn('number', 'valores');
    tabela.addRows([
            ['Chave 1', 10.2],
            ['Chave 2', 20.5],
            ['Chave 3', 30.7],
            ['Chave 4', 20.5],
            ['Chave 1', 10.2],
            ['Chave 2', 20.5],
            ['Chave 3', 30.7],
            ['Chave 4', 20.5],
            ['Chave 5', 33]
        ]);

    var opcoes = {
        title: 'Titulo do grafico',
        width: 800,
        height: 400,
        vAxis: {
            format: 'currency', 
            gridlines: {count: 4, color: ''}
            }, 
        curveType: 'function'
    }

    var grafico = new google.visualization.LineChart(document.getElementById('grafico-linha'));
    grafico.draw(tabela, opcoes);
}
google.charts.setOnLoadCallback(desenhaGrafico);