var employeePromise = d3.json("employee.json");

employeePromise.then(function(employees)
                    {
                    displayTable(employees) 
                    },              
                     function(error)
                    {
                        console.log("error", error)
                    })

var makecol = function(rows, accessor)
    {
        rows.append("td")
        .text(accessor)
    }

var useimage = function(rows, accessor)
    {
        rows.append("td")
        .append("img")
        .attr("src", accessor)
    }

var displayTable = function(employees)
        {
            var rows = d3.select("#employeetable")
            .selectAll("tr")
            .data(employees)
            .enter()
            .append("tr")
            
            makecol(rows, function(employee)
                   {
                        return employee.firstName;
                    })
            makecol(rows, function(employee)
                   {
                        return employee.lastName;
                    })
            useimage(rows, function(employee)
                    {
                        return employee.photo
                    })
             makecol(rows, function(employee)
                   {
                        return employee.title;
                    })
             makecol(rows, function(employee)
                   {
                        return employee.unit;
                    })
             makecol(rows, function(employee)
                   {
                        return employee.email;
                    })
             makecol(rows, function(employee)
                   {
                        return employee.bio;
                    })
             makecol(rows, function(employee)
                   {
                        return employee.phone;
                    })
        }