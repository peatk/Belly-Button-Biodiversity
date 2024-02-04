let bellyURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// let data;

// have the plot update based on the selected id (dataset)
function updateCharts(data, id) {
    // let dropdownMenu = d3.select('#selDataset');
    console.log(data);
    // // value assigning for the dropdown menu to the dataset variable
    // let dataset = dropdownMenu.property('value');
    let selected = data.samples.find(set => set.id == id);

    let selectedSampleValues = selected.sample_values.slice(0,10).sort((a, b) => a-b);
    console.log(selectedSampleValues);
    let selectedOtuId = selected.otu_ids.slice(0,10);

    let selectedOtuIdLabel = selectedOtuId.map(id => `OTU ${id}`);
    console.log(selectedOtuIdLabel);
    // let selectedOtuLabel = selected.otu_labels.slice(0,10);

    // let update = {
        // x: [selectedSampleValues],
        // y: [selectedOtuIdLabel],
    // };
    // Plotly.restyle('bar', update);

    
    Plotly.restyle('bar', 'x', [selectedSampleValues]);
    Plotly.restyle('bar', 'y', [selectedOtuIdLabel]);

    // Plotly.restyle('bubble', 'x', [selectedSampleValues]);
    // Plotly.restyle('bubble', 'y', [selectedOtuIdLabel]);
};

// function updateDemo(data, id) {

// }

// Load data 
d3.json(bellyURL).then(function(data) {
// d3.json('samples.json').then(function(data) {
    let dropdownMenu = d3.select('#selDataset');
    data.samples.forEach(x => {
        dropdownMenu.append('option').text(x.id).property('value', x.id);
    });    
    
    let all_samps = data.samples[0].sample_values.slice(0,10).sort((a, b) => a - b);
    console.log(all_samps);

    let otu_id = data.samples[0].otu_ids.slice(0,10);
    let id = otu_id.map(id => `OTU ${id}`);
    console.log(id);

    let otu_label = data.samples[0].otu_labels.slice(0,10);
    console.log('these are the otu labels:');
    console.log(otu_label);

    let trace1 = {
        y: id,
        x: all_samps,
        type: 'bar',
        orientation: 'h'
    
    };

    let data1 = [trace1]
    let layout1 = {
        title: 'bar',
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    // let bubbleId = firstSample.otu_ids;
    // let bubbleLabel = firstSample.otu_labels;
    // // let bubbleValue = firstSample.sample_values;
    // console.log('this is the bubble data');
    // console.log(bubbleId);
    // console.log(bubbleLabel);

    // let bubbleTrace = [{
    //     x: 
    //     y: 
    //     text: 
    //     mode: 'markers',
    //     type: 'bubble',
    //     marker: {
    //         size: ,
    //         color: ,
    //         colorscale: 'turbo'
    //     }
    //     // orientation: 'h'
    
    // }];
    
    // let bubbleData = []
    // let bubbleLayout = {
    //     title: 'bubble',
    //     showlegend: false,
    //     // xaxis: {title: `OTU ID`, automargin: true},
    //     // yaxis: {automargin: true},
    //     // hovermode: 'closest'
    //     margin: {
    //         l: 100,
    //         r: 100,
    //         t: 100,
    //         b: 100
    //     }
    // };

    Plotly.newPlot('bar', data1, layout1);
    // Plotly.newPlot('bubble', bubbleData, bubbleLayout);
        // Set up event listener for changes in the dropdown menu
        d3.selectAll("#selDataset").on("change", function (event) {
            console.log('selectChangeEvent', event);
            const selectedID = event.target.value;
            updateCharts(data, selectedID);
            // updatedemo

});


});  