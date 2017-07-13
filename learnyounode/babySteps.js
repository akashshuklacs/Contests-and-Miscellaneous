var len=process.argv.length;  //length of command line arguments
var sum=0;
for(var i=2; i<len; i++){
	sum+=Number(process.argv[i]);    //start adding from third argument as first 2 arguments are reserved
}
console.log(sum); 
