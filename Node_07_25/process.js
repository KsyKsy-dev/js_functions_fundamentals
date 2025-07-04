let role = ["User", "Dev", "Admin"];
function checkRole(i) {
  process.stdin.write(`Your role is ${role[i]}`);
}
checkRole(0);
