var z = 1;

while( z < 52) {
    document.getElementById("line1").innerHTML += + z + ", ";
    z=z+2;
}

var x = 1;

do{
    document.getElementById("line2").innerHTML += (x*2) + ", ";
    x++;  
}while (x <= 25)

for(var y=1; y <= 4096; y=y*2){
    document.getElementById("line3").innerHTML += y + ", ";
}



