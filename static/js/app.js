let bellyURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// let data;

// have the plot update based on the selected id (dataset)
function updateCharts(data, id) {
    // console.log('this is the plot update data');
    // console.log(data);
    let selected = data.samples.find(set => set.id == id);
    // console.log('this is the new selected data');
    // console.log(selected);

    // bar chart updates
    let selectedSampleValues = selected.sample_values.slice(0,10).sort((a, b) => a-b);
    // console.log(selectedSampleValues);
    let selectedOtuId = selected.otu_ids.slice(0,10);
    let selectedOtuIdLabel = selectedOtuId.map(id => `OTU ${id}`);
    // console.log(selectedOtuIdLabel);

    Plotly.restyle('bar', 'x', [selectedSampleValues]);
    Plotly.restyle('bar', 'y', [selectedOtuIdLabel]);

    // bubble chart updates
    let bubbleSampleValues = selected.sample_values;
    let bubbleOtuAll = selected.otu_ids;

    Plotly.restyle('bubble', 'x', [bubbleOtuAll]);
    Plotly.restyle('bubble', 'y', [bubbleSampleValues]);
    // Plotly.restyle('bubble', 'size', [sampleValues]);
};

// function updateDemo(data) {
//     d3.json(bellyURL).then(function(data) {
//         let metaData = data.metaData;
//         let metaDatafilter = metaData.filter(set => set.id == id)
// })};

// }

// Load data 
d3.json(bellyURL).then(function(data) {
// d3.json('samples.json').then(function(data) {
    let dropdownMenu = d3.select('#selDataset');
    data.samples.forEach(x => {
        dropdownMenu.append('option').text(x.id).property('value', x.id);
    });    
    
    // change the variables so that i am not drilling down on the data too early
    
    let dataSamples = data.samples;
    console.log('these is data samples')
    console.log(dataSamples);

    let sampleValues = dataSamples[0].sample_values;
    console.log('these are the sample values');
    console.log(sampleValues);

    let sampleValuessorted = dataSamples[0].sample_values.slice(0,10).sort((a, b) => a - b);
    console.log('these is sliced and sorted data samples')
    console.log(sampleValuessorted);

    let otuAll = dataSamples[0].otu_ids;
    console.log('these is all otu ids')
    console.log(otuAll);

    let otuSliced = dataSamples[0].otu_ids.slice(0,10);
    let otuId = otuSliced.map(id => `OTU ${id}`);
    console.log(otuId);

    let otuLabelall = dataSamples[0].otu_labels;
    console.log('these is all otu labels');
    console.log(otuLabelall);

    let otuLabelsliced = dataSamples[0].otu_labels.slice(0,10);
    console.log('these are the slcied otu labels:');
    console.log(otuLabelsliced);

    // let metaData = data.metadata.find(set => set.id == id);
    // let metaDataname = metaData.name;
    // console.log('these are the metadata:');
    // console.log(metaData);
    // console.log(metaDataname);


    let barCharttrace = {
        y: otuId,
        x: sampleValuessorted,
        type: 'bar',
        orientation: 'h'
    
    };
    let barChartdata = [barCharttrace]
    let barChartlayout = {
        title: 'bar',
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    let bubbleChartdata =[{
        x: otuAll,
        y: sampleValues,
        // r: sampleValues,
        mode: 'markers',
        marker: {
            size: sampleValues,
            color: otuAll,
            // colorscale: 'plasma'
            // colorscale: 'yellow'
        }
    }];
    let bubbleChartlayout = {
        title: 'bubble test',
        xaxis: {title: 'x axis'},
        yaxis: {title: 'y axis'}
    };
    // let metadataChart ={
    //     name: metaData.name
    // };

    Plotly.newPlot('bar', barChartdata, barChartlayout);
    Plotly.newPlot('bubble', bubbleChartdata, bubbleChartlayout);
    // Plotly.newPlot('sample-metadata', metadataChart);
        // Set up event listener for changes in the dropdown menu
        d3.selectAll("#selDataset").on("change", function (event) {
            console.log('selectChangeEvent', event);
            const selectedID = event.target.value;
            updateCharts(data, selectedID);
            // updatedemo

});


});  