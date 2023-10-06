var elecciones = new Array();
var numero = Math.random() * (10 - 5) + 5;

elecciones[0] = new Array("Sedes", "PV", "OV", "VpSI", "UPV");
elecciones[1] = new Array("Ayuntamiento", "","","","");
elecciones[2] = new Array("Polideportivo", "","","","");
elecciones[3] = new Array("Instituto", "","","","");
elecciones[4] = new Array("Mercado", "","","","");
elecciones[5] = new Array("Colegio", "","","","");

console.table(elecciones);

for(i=1;i<elecciones.length;i++){
for(j=1;j<elecciones[i].length;j++){
    elecciones[i][j]=Math.floor(Math.random() * (10 - 5) + 5);
}

}
console.table(elecciones);