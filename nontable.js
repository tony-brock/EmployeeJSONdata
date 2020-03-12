var employeePromise = d3.json("employee.json");

employeePromise.then(function(employees)
                    {
                    createBoxes(employees) 
                    },              
                     function(error)
                    {
                        console.log("error", error)
                    })

var createBoxes = function(employee)
{
    var divs = d3.select("body")
                    .selectAll("div")
                    .data(employee)
                    .enter()
                    .append("div")
                    .classed("employee", true)
    divs.append("span")
        .classed("eName", true)
        .text( function(employees)
              {
        return employees.firstName + " " +employees.lastName;
              })
    divs.append("img")
        .attr("src", function(employees)
             {
        return employees.photo;
    })
    
    
}