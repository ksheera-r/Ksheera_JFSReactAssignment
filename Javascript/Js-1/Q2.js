//Question 2
var n = window.prompt();
var total = 0;
for (i=1; i<=n; i++){
if((i%3 == 0) || (i%5 == 0)){
total = total + i;
}
}
document.write(total)
