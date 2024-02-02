// let bellyURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// // Function to update the plot based on the selected dataset
// function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     let dropdownMenu = d3.select('#selDataset');

//     // Assign the value of the dropdown menu option to a variable
//     let dataset = dropdownMenu.property('value');

//     // Use the value to filter the data
//     let selectedData = data.samples.find(x => x.id === dataset);

//     // Extract relevant data for the plot
//     let selectedSampleValues = selectedData.sample_values.slice(0, 10).sort((a, b) => a - b);
//     let selectedOtuIds = selectedData.otu_ids.slice(0, 10).map(id => `OTU ${id}`);
//     let selectedOtuLabels = selectedData.otu_labels.slice(0, 10);

//     // Update the trace with the new data
//     let update = {
//         x: selectedSampleValues,
//         y: selectedOtuIds,
//     };

//     // Restyle the plot with the updated trace
//     Plotly.restyle('bar', update);
// }

// // Load data 
// d3.json(bellyURL).then(function(data) {
//     // Populate dropdown menu with options
//     let dropdownMenu = d3.select('#selDataset');
//     data.samples.forEach(x => {
//         dropdownMenu.append('option').text(x.id).property('value', x.id);
//     });

//     // Initial plot setup
//     let initialSampleValues = data.samples[0].sample_values.slice(0, 10).sort((a, b) => a - b);
//     let initialOtuIds = data.samples[0].otu_ids.slice(0, 10).map(id => `OTU ${id}`);

//     let trace1 = {
//         y: initialOtuIds,
//         x: initialSampleValues,
//         type: 'bar',
//         orientation: 'h'
//     };

//     let data1 = [trace1];
//     let layout = {
//         title: 'Initial Plot',
//         margin: {
//             l: 100,
//             r: 100,
//             t: 100,
//             b: 100
//         }
//     };
    
//     Plotly.newPlot('bar', data1, layout);
// });

// // Set up event listener for changes in the dropdown menu
// d3.selectAll("#selDataset").on("change", updatePlotly);