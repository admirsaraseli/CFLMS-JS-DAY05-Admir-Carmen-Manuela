var employeesJson = JSON.parse(employees);

document.writeln("<table border='2'>")
document.writeln("<tr><td>Id</td><td>Name</td><td>Email</td><td>Job</td><td>Salary</td></tr>")
for (var i = 0 ; i < employeesJson.length; i++) {
      var obj = employeesJson[i];
      document.writeln("<tr>");
      document.writeln("<td>"+obj.id+"</td>");
      document.writeln("<td>"+obj.first_name +" "+ obj.last_name + "</td>");
      document.writeln("<td>"+obj.email+"</td>");
      document.writeln("<td>"+obj.job_title+"</td>");
      document.writeln("<td>"+obj.salary+"</td>");
      document.writeln("</tr>");
  }

 document.writeln("</table>")