const bellyURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Load data 
d3.json(bellyURL).then(function(data) {
    let meta = data['metadata'];
    // let first_meta = meta[0];
    
    let all_samps = data['samples']
    // let first_samp = all_samps[1];
    // console.log(meta)


    let trace1 = {
        x: meta.map(x => x.ethnicity),
        y: all_samps.map( x => x.sample_values),
        type: 'bar'
    };

    let data1 = [trace1]
    let layout = {
        title: 'test'
    };
    Plotly.newPlot('plot', data1, layout);
});

// Populate dropdown menu
//   let dropdown = d3.select("#selDataset");

// let meta = data['metadata'];
// let first_meta = meta[0];
