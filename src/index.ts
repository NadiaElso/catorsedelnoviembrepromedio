//DESARROLLE UN ALGORITMO QUE PERMITA CARGAR ALUMNOS
//Y SUS NOTAS EN LOS TRES TRIMESTRES
//SE DEBE PERMITIR OBTENER EL PROMEDIO ANUAL (ES DECIR
//DE SUS TRES NOTAS) DE UN ALUMNO INGRESADO POR EL USUARIO


function promedioanual(dimension:any) {
   let nombrealumno:string=prompt()

let nota1:any[]=new Array(dimension);
let nota2:any[]=new Array(dimension);
let nota3:any[]=new Array(dimension);
let promedio:any[]=new Array(dimension);


  for (let index = 0; index < dimension.length; index++) {
    nota1[index]=Number(prompt("Ingrese nota primer trimestre"));
    nota2[index]=Number(prompt("Ingrese nota segundo trimestre"));
    nota3[index]=Number(prompt("Ingrese nota tercer trimestre"));

promedio[index]=(nota1[index]+nota2[index]+nota3[index])/3;



}
   }

promedioanual(3);
console.log(promedioanual);