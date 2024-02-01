const bellyURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Load data 
d3.json(bellyURL).then(function(data) {
// d3.json('samples.json').then(function(data) {
    let meta = data.metadata;
    console.log('this is the metadata:');
    console.log(meta);
    
    // let all_samps = data.samples[0].sample_values;
    // console.log('these are the sample values:');
    // console.log(all_samps);
    
    let all_samps = data.samples[0].sample_values.slice(0,10).sort((a, b) => a - b);
    console.log('these are the sample values:');
    console.log(all_samps);


    let otu_id = data.samples[0].otu_ids.slice(0,10);
    let id = otu_id.map(id => `OTU ${id}`);
    console.log('these are the otu ids values:');
    console.log(id);

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
    let layout = {
        title: 'test',
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    Plotly.newPlot('bar', data1, layout);

    // // On change to the DOM, call getData()
    // d3.selectAll("#selDataset").on("change", getData);

    // function getData() {
    //     let dropdownMenu = d3.select("#selDataset");
    //     // Assign the value of the dropdown menu option to a letiable
    //         let dataset = dropdownMenu.property("value");
    // };
});





