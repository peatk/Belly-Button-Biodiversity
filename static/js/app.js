const bellyURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// have the plot update based on the selected id (dataset)
function updatePlotly() {
    let dropdownMenu = d3.select('#selDataset');
    
    // value assigning for the dropdown menu to the dataset variable
    let dataset = dropdownMenu.property('value');
    let selected = data.samples.find(x => x.id === dataset);

    let selectedSampleValues = selected.sample_values.slice(0,10).sort((a, b) => a-b);
    let selectedOtuId = selected.out_ids.slice(0,10);
    // let selectedOtuLabel = selected.otu_labels.slice(0,10);

    let update = {
        x: selectedSampleValues,
        y: selectedOtuId,
    };

    Plotly.restyle('bar', update);
};

// Load data 
d3.json(bellyURL).then(function(data) {
// d3.json('samples.json').then(function(data) {
    let dropdownMenu = d3.select('#selDataset');
    data.samples.forEach(x => {
        dropdownMenu.append('option').text(x.id).property('value', x.id);
    });    
    
    // let meta = data.metadata;
    // console.log('this is the metadata:');
    // console.log(meta);
    
    // let all_samps = data.samples[0].sample_values;
    // console.log('these are the sample values:');
    // console.log(all_samps);
    
    let all_samps = data.samples[0].sample_values.slice(0,10).sort((a, b) => a - b);
    // console.log('these are the sample values:');
    // console.log(all_samps);


    let otu_id = data.samples[0].otu_ids.slice(0,10);
    let id = otu_id.map(id => `OTU ${id}`);
    // console.log('these are the otu ids values:');
    // console.log(id);

    let otu_label = data.samples[0].otu_labels.slice(0,10);
    console.log('these are the otu labels:');
    console.log(otu_label);

    let trace1 = {
        y: id.map(x => x),
        x: all_samps.map( x => x),
        type: 'bar',
        orientation: 'h'
    
    };

    let data1 = [trace1]
    let layout1 = {
        title: 'test',
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    Plotly.newPlot('bar', data1, layout1);
});

// Set up event listener for changes in the dropdown menu
d3.selectAll("#selDataset").on("change", updatePlotly);






// function initBubbleChart() {
//     let trace2 = {
//         y: all_samps.map(x => x),
//         x: id.map( x => x),
//         type: 'bubble',
//         // orientation: 'h'
    
//     };

//     let data2 = [trace2]
//     let layout2 = {
//         title: 'test',
//         margin: {
//             l: 100,
//             r: 100,
//             t: 100,
//             b: 100
//         }
//     };
//     Plotly.newPlot('bubble', data2, layout2);
// };
// initBubbleChart();




