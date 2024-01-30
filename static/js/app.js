
// console.log("name")

// endppoint for belly button
const belly = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// fetching json and console log
d3.json(belly).then(function(x) {
    console.log(x);
});

