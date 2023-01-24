const AnguloA = 80;
const AnguloB = 40;
const AnguloC = 60;

let SomadosAngulos = AnguloA + AnguloB + AnguloC;

let todosAngulospositivos = AnguloA > 0 && AnguloB > 0 && AnguloC > 0;

if(todosAngulospositivos){
  if (SomadosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
}

else {
  console.log('Erro: ângulo inválido');
}