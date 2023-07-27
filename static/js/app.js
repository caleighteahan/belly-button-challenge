// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


d3.json(url).then(function(data) {
  console.log(data);
});

function init() {

    
    let dropdownMenu = d3.select("#selDataset");
  
    
    d3.json(url).then((data) => {
        
        
        let names = data.names;
  
       
        names.forEach((id) => {
  
            
            console.log(id);
  
            dropdownMenu.append("option").text(id).property("value",id);
        });
  
        
        let firstsamp = names[0];
  
         
        //console.log(firstsamp);
  
        
        createScatter(firstsamp);
        createBar(firstsamp);
        createSummary(firstsamp);
  
    });
  };
  
  
  function createBar(bar) {
  
    
    d3.json(url).then((data) => {
  
        
        let sampleInfo = data.samples;
  
        
        let value = sampleInfo.filter(result => result.id == bar);
  
        
        let valueData = value[0];
  
        
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;
  
        
        //console.log(otu_ids,otu_labels,sample_values);
  
        
       
        let trace = {
            y: otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
            x: sample_values.slice(0,10).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        };
  
        
        Plotly.newPlot("bar", [trace])
    });
  };
  
 
  