// VARIABLES
var numElements = 10;
var elementScale = 1.0;

var colors = ["#D6BC92", "#F9A36A", "#F37443", "#F8B1B2"];
var gridSize = d3.select("#grid").node().getBoundingClientRect().width
var gridData = gridData(numElements, colors);

// MAIN

// access the grid div 
var grid = d3.select("#grid")

// add an container svg to the grid div
var containerSvg = grid.append("svg")
    .attr("width", gridSize)
    .attr("height", gridSize)


// make rows and attach data 
var row = containerSvg.selectAll(".row")
    .data(gridData)
    .enter().append("g")
        .attr("class", "row")

// make columns and use data to display element
var column = row.selectAll(".element")
    .data(function(d) {return d;})

    // making a grid of svg rectangles
    // .enter().append("rect") // here the element is a rect/square
    //     .attr("class", "element")
    //     .attr("x", function(d) {return d.x;})
    //     .attr("y", function(d) {return d.y;})
    //     .attr("width", function(d) {return d.width;})
    //     .attr("height", function(d) {return d.height;})
    //     .style("fill", "white")
    //     .style("stroke", "black")
    //     .on("mouseover", function(d) {
    //         d3.select(this).style("fill", "red")
    //     })
    //     .on("mouseout", function(d) {
    //         d3.select(this).style("fill", "white")
    //     })

    // make a grid of petals
    .enter().append("svg")
        .attr("class", "element")
        .attr("x", function(d) {return d.x;})
        .attr("y", function(d) {return d.y;})
        .attr("width", function(d) {return d.width;})
        .attr("height", function(d) {return d.height;})
        .attr("overflow", "auto")
        

// background color
column.append("path")
        .attr("d", "M7.64,50c-2.05-4.13-4.66-12.28-6.25-20.12c-1.26-6.21-2-10.12-0.75-14.91C1.06,13.41,4.5,1.07,14.31,0.06c6.3-0.64,12.6,3.66,14.91,9.19c3.4,8.17-2.88,16.66-3.98,18.14c-4.03,5.44-8.02,5.67-13.17,12.67C9.77,43.2,8.42,48.11,7.64,50z")
        .attr("fill", function(d) {return d.color})
        .attr("transform", function(d) {
            if(d.direction == 0){
                return "scale(-" + elementScale + ", " + elementScale + ") translate(-35, 0)"
            }else{
                return "translate(0, 0) scale(" + elementScale + ", " + elementScale + ") "
            }
        })

// background outline
column.append("path")
    .attr("d", "M9.05,51.87c-0.17-0.26-0.41-0.59-0.57-0.92l-0.45-0.87c-0.29-0.59-0.58-1.18-0.85-1.77c-0.53-1.2-1.02-2.41-1.5-3.64c-0.93-2.45-1.79-4.93-2.56-7.45c-0.74-2.52-1.35-5.09-1.93-7.64c-0.57-2.56-1.13-5.19-1.19-7.98c-0.03-1.39,0.07-2.8,0.33-4.18c0.26-1.39,0.67-2.7,1.13-3.99c0.95-2.57,2.17-5.06,3.91-7.31C7.08,3.9,9.39,1.9,12.23,0.88c0.71-0.25,1.41-0.5,2.16-0.6l1.11-0.2c0.37-0.03,0.74-0.05,1.11-0.07C18.1-0.03,19.58,0.15,21,0.53c2.82,0.81,5.38,2.32,7.44,4.33c2.05,2.01,3.71,4.55,4.41,7.45c0.68,2.88,0.51,5.87-0.29,8.56c-0.76,2.72-2.04,5.19-3.59,7.43c-1.5,2.23-3.47,4.35-5.65,5.93c-2.17,1.6-4.28,2.95-6.11,4.69c-0.93,0.85-1.82,1.75-2.64,2.73c-0.85,0.96-1.54,1.97-2.17,3.09c-0.62,1.12-1.16,2.29-1.68,3.48l-0.78,1.79l-0.39,0.9l-0.2,0.45C9.29,51.52,9.15,51.75,9.05,51.87z M9.05,51.67c0.02-0.16,0.02-0.24,0.09-0.39l0.17-0.46l0.32-0.92l0.66-1.84c0.45-1.22,0.95-2.43,1.52-3.61c0.58-1.17,1.26-2.31,2.08-3.32c0.79-1.04,1.66-2.03,2.57-2.95c1.83-1.88,4.01-3.36,6.04-4.97c2.05-1.6,3.77-3.56,5.16-5.75c1.4-2.18,2.54-4.54,3.2-7.04c0.7-2.48,0.78-5.14,0.16-7.64c-0.63-2.5-2.09-4.73-3.94-6.52c-1.85-1.79-4.15-3.12-6.62-3.81c-1.24-0.33-2.52-0.5-3.8-0.48L15.7,2.03L14.76,2.2c-0.64,0.07-1.24,0.29-1.85,0.5c-2.43,0.85-4.47,2.58-6.06,4.6c-1.62,2.02-2.82,4.35-3.75,6.76c-0.94,2.42-1.54,4.97-1.53,7.56C1.54,24.22,2,26.79,2.48,29.34c0.49,2.56,1.02,5.1,1.67,7.62c0.63,2.52,1.36,5.02,2.16,7.5c0.41,1.24,0.84,2.46,1.3,3.68c0.23,0.61,0.47,1.21,0.72,1.81l0.39,0.89C8.86,51.12,8.94,51.37,9.05,51.67z")
    .attr("fill", "black")
    .attr("transform", function(d) {
        if(d.direction == 0){
            return "scale(-" + elementScale + ", " + elementScale + ") translate(-35, 0)"
        }else{
            return "translate(0, 0) scale(" + elementScale + ", " + elementScale + ") "
        }
    })

// decoration
column.append("path")
    // decoration version
    .attr("stroke", function(d){
        if(d.decoration == 0 || d.decoration == 3){
            return "none"
        }else if(d.decoration == 1 || d.decoration == 3){
            return "none"
        }else if(d.decoration == 2 || d.decoration == 4){
            return "black"
        }
    })
    .attr("fill", function(d){
        if(d.decoration == 0 || d.decoration == 3){
            return "black"
        }else if(d.decoration == 1 || d.decoration == 3){
            return "black"
        }else if(d.decoration == 2 || d.decoration == 4){
            return "none"
        }
    })
    
    .attr("d", function(d) {
        if(d.decoration == 0){
            return "M0.02,0C1.5,0.02,2.96,0.44,4.31,1.17c1.33,0.75,2.49,1.9,3.26,3.28c0.77,1.36,1.35,2.99,1.1,4.61c-0.23,1.59-0.98,3.12-2.24,4.06l-0.17-0.11c0.29-1.5,0.46-2.79,0.41-4.08C6.61,7.67,6.63,6.38,6.13,5.15C5.66,3.93,4.84,2.83,3.76,2C2.7,1.14,1.38,0.53,0,0.2L0.02,0z"
        }else if(d.decoration == 1){
            return "M0.66,26.23c-0.01-0.8-0.19-1.58-0.3-2.38c-0.12-0.79-0.22-1.58-0.29-2.38c-0.13-1.6-0.09-3.21,0.13-4.8c0.44-3.19,1.66-6.23,3.37-8.95c1.68-2.7,3.88-5.28,6.89-6.64c2.97-1.42,6.46-1.36,9.54-0.37c3.04,1.03,6.03,2.62,8.07,5.22c1.02,1.28,1.78,2.76,2.25,4.32c0.46,1.57,0.67,3.2,0.69,4.81c0.05,1.64-0.31,3.28-0.85,4.8c-0.54,1.53-1.25,2.99-2.05,4.39c-1.6,2.8-3.52,5.4-5.58,7.85l-0.52-0.47l1.98-2.02l-0.02,0.03c0.62-0.91,1.01-2.19,1.32-3.36c0.3-1.2,0.49-2.44,0.58-3.67c0.13-2.47-0.01-5.02-0.89-7.3c-0.43-1.14-1.05-2.2-1.88-3.07c-0.83-0.88-1.84-1.51-3-1.96c-2.26-0.94-4.77-1.3-7.19-0.91c-2.41,0.38-4.71,1.48-6.5,3.11c-1.78,1.63-2.74,3.98-3.19,6.39c-0.45,2.43-0.46,4.94-0.27,7.44c0.09,1.25,0.23,2.5,0.4,3.75l0.25,1.88c0.04,0.32,0.08,0.63,0.11,0.96c0.02,0.34,0.08,0.62-0.01,1.1l-0.88-0.23c0.03-0.13,0.03-0.42,0.02-0.67c-0.01-0.26-0.04-0.52-0.06-0.79L2.6,30.72c-0.12-1.08-0.22-2.17-0.27-3.26c-0.1-2.18-0.04-4.41,0.51-6.57c0.28-1.08,0.68-2.14,1.29-3.1c0.6-0.97,1.42-1.78,2.28-2.48c1.72-1.4,3.8-2.42,6.02-2.76c2.22-0.33,4.53,0.07,6.54,1.01c2.09,0.87,3.73,2.67,4.66,4.68c0.95,2.01,1.4,4.24,1.39,6.44c0.01,1.1-0.02,2.2-0.22,3.3c-0.19,1.09-0.53,2.21-1.27,3.14l-0.54-0.45c1.92-2.38,3.48-5.12,4.28-8.07c0.84-2.94,0.63-6.11-0.28-9.04c-0.89-2.92-2.67-5.61-5.24-7.27c-2.54-1.67-5.73-2.46-8.71-1.74c-2.99,0.67-5.6,2.55-7.74,4.75c-2.27,2.13-3.56,5.08-3.99,8.14c-0.43,3.07-0.21,6.21,0.27,9.27c0.24,1.54,0.55,3.06,0.89,4.58l0.5,2.28c0.14,0.76,0.37,1.53,0.28,2.31c0.08-0.78-0.16-1.54-0.31-2.3l-0.53-2.27c-0.36-1.52-0.69-3.04-0.95-4.57c-0.53-3.07-0.79-6.21-0.4-9.33c0.21-1.55,0.61-3.09,1.26-4.52c0.63-1.45,1.62-2.73,2.7-3.85c2.14-2.26,4.78-4.24,7.9-4.98c3.12-0.77,6.47,0.04,9.12,1.77c2.7,1.73,4.57,4.54,5.5,7.55c0.95,3,1.18,6.3,0.33,9.38c-0.82,3.07-2.39,5.88-4.35,8.35l-0.54-0.45c0.62-0.77,0.94-1.79,1.12-2.81c0.18-1.03,0.22-2.1,0.2-3.16c0.01-2.12-0.45-4.23-1.35-6.13c-0.9-1.89-2.37-3.5-4.31-4.29c-1.9-0.89-4.04-1.24-6.1-0.93c-2.06,0.32-4,1.27-5.62,2.6c-0.82,0.67-1.55,1.4-2.09,2.28C4.3,19.1,3.93,20.09,3.67,21.1c-0.51,2.04-0.57,4.19-0.46,6.32c0.05,1.07,0.16,2.13,0.28,3.21l0.18,1.62c0.03,0.27,0.06,0.54,0.07,0.83c0.01,0.29,0.04,0.55-0.04,0.95l-0.88-0.23c0.03-0.15,0.01-0.5-0.02-0.79c-0.03-0.3-0.07-0.61-0.11-0.92l-0.26-1.88c-0.17-1.26-0.32-2.52-0.42-3.8c-0.2-2.54-0.21-5.13,0.25-7.69c0.44-2.53,1.49-5.12,3.49-6.93c1.96-1.77,4.43-2.91,7.02-3.31c2.59-0.41,5.28-0.01,7.67,1.01c1.19,0.47,2.39,1.21,3.28,2.19c0.91,0.97,1.58,2.14,2.04,3.37c0.93,2.47,1.04,5.1,0.9,7.66c-0.1,1.29-0.31,2.56-0.62,3.81c-0.36,1.25-0.67,2.46-1.49,3.65l-0.01,0.01l-0.02,0.02l-2.02,1.98l-0.52-0.47c2.06-2.43,3.96-4.98,5.55-7.73c0.79-1.37,1.49-2.8,2.02-4.28c0.53-1.48,0.88-3.02,0.83-4.58c-0.01-1.58-0.21-3.15-0.64-4.65c-0.45-1.5-1.16-2.91-2.13-4.14c-1.93-2.49-4.82-4.05-7.78-5.07c-2.98-0.98-6.31-1.02-9.18,0.29C9.22,2.15,7.92,3.08,6.8,4.19C5.67,5.29,4.72,6.58,3.85,7.9c-1.74,2.66-3,5.65-3.49,8.8c-0.24,1.57-0.31,3.17-0.21,4.77c0.05,0.8,0.14,1.59,0.24,2.38C0.5,24.64,0.66,25.43,0.66,26.23z"
        }else if(d.decoration == 2){
            return "M4.95,40.85c0.06-1.62,0.37-7.51,2.02-11.22c2.57-5.78,6.68-9.1,8.71-10.53 M6.34,0.21C4.58,2.89,2.58,6.33,1.53,10.66c-3.35,13.8,1.41,26.13,3.42,30.18M4.18,10.8c-0.98,1.63-1.92,3.61-2.58,5.93c-2.7,9.53,2.3,20.91,3.28,23.98M4.95,40.78c0.44-2.12,2.54-9.98,4.67-12.9c1.15-1.58,2.69-3,5.79-5.72c3.73-3.27,5.08-3.75,6.83-6.27c0.85-1.24,2.7-3.98,2.79-7.88c0.06-2.54-0.66-4.55-1.19-5.72 M5.26,21.15c-0.52,1.78-1.01,3.93-1.25,6.41c-0.35,3.44,0.43,9.91,0.77,12.2"
        }else if(d.decoration == 3){
            return "M0.21,36.74c-0.25-3.19-0.26-6.39-0.09-9.6c0.17-3.22,0.76-6.39,1.5-9.51c0.79-3.11,1.77-6.18,3.04-9.13C5.29,7.02,5.97,5.57,6.7,4.14C7.47,2.73,8.25,1.34,9.13,0C7.75,2.88,6.47,5.8,5.37,8.78c-1.08,2.98-2.03,6.01-2.78,9.09c-0.76,3.07-1.36,6.19-1.71,9.34c-0.18,1.58-0.29,3.16-0.39,4.75C0.36,33.55,0.29,35.14,0.21,36.74z"
        }else if(d.decoration == 4){
            return "M44.5,9.3c0,0,1.52,6.48-6,14c-7,7-10.78,6.39-16,9c-4,2-9,11-9,11s-13-6.33-13-23c0-12,6-20,6-20"
        }
    })
    // scale and position
    .attr("transform", function(d) {
        if(d.decoration == 0){
            if(d.direction == 0){
                return "translate(18, 8) scale(-" + elementScale + ", " + elementScale + ")"
            }else{
                return "translate(18, 8) scale(" + elementScale + ", " + elementScale + ") "
            }
        }else if(d.decoration == 1){
            if(d.direction == 0){
                return "scale(-" + elementScale + ", " + elementScale + ") translate(-35, 2)"
            }else{
                return "translate(0, 2) scale(" + elementScale + ", " + elementScale + ") "
            }
        }else if(d.decoration == 2){
            if(d.direction == 0){
                return "scale(-" + elementScale + ", " + elementScale + ") translate(-32, 10)"
            }else{
                return "translate(4, 10) scale(" + elementScale + ", " + elementScale + ") "
            }
        }else if(d.decoration == 3){
            if(d.direction == 0){
                return " scale(-" + elementScale + ", " + elementScale + ") translate(-27, 10)"
            }else{
                return "translate(8, 10) scale(" + elementScale + ", " + elementScale + ") "
            }
        }else if(d.decoration == 4){
            if(d.direction == 0){
                return "scale(-" + elementScale + ", " + elementScale + ") translate(-40, 10)"
            }else{
                return "translate(-5, 10) scale(" + elementScale + ", " + elementScale + ") "
            }
        }
})




// FUNCTIONS
// Build Grid Array
function gridData(numElements, colors){
    var data = new Array;
    var xpos = 10
    var ypos = 0;
    var width = gridSize/numElements;
    var height = gridSize/numElements;

    // create rows
    for(let row=0; row<numElements; row++){
        data.push( new Array());

        // create columns
        for(let col=0; col<numElements; col++){
            data[row].push({
                x: xpos,
                y: ypos,
                width: width,
                height: height,

                color: colors[Math.floor(Math.random() * Math.floor(4))],
                direction: Math.floor(Math.random() * Math.floor(2)),
                decoration: Math.floor(Math.random() * Math.floor(5))
            })

            // increment the x position 
            xpos += width;
        }
        // reset x position after each row
        xpos = 10;
        // increment the y position
        ypos += height;
    }
    return data;
}