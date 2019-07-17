function calculatePayroll(hours) {
  if (hours <= 40)
    return (hours * 15);
  else
    return ((40 * 15) + ((hours - 40) * 1.5 * 15));
}
function startPayroll() {
  var pay_array = [];
  var i = 1,
    total = 0;
  while (true) {
    var employee = parseInt(prompt("Please input number of hours worked by Emp #" + (i) + ": \n(Please enter -1 to end payroll)", 0));
    if (employee == -1)
      break;
    pay_array.push(employee);
    i++;
  }
  document.write("<table border=1 align=\"center\"><tr><th>Employee No.</th><th>No. Hours Worked</th><th>Weekly Pay $</th></tr>");
  for (i = 0; i < pay_array.length; i++) {
    var pay = calculatePayroll(pay_array[i]);
    document.write("<tr><td>" + (i + 1) + "</td><td>" + pay_array[i] + "</td><td>$" + pay + "</td></tr>");
    total += pay;
  }
  document.write("<tr><td colspan=3>Total: $" + total + "</td></tr>");
  document.write("</table>");
}

startPayroll();