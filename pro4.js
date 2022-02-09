const prompt = require("prompt-sync")();

const periodo = []; //Momentos do dia da história

periodo[0] = "pela manhã";
periodo[1] = "a tarde";
periodo[2] = "a noite";
periodo[3] = "pela madrugada";

const status = [];

status[0] = "Revigorado";
status[1] = "Descansado";
status[2] = "Disposto";
status[3] = "Sentindo-se bem";
status[4] = "Alimentado";
status[5] = "Cansado";
status[6] = "Debilitado";
status[7] = "Indisposto";
status[8] = "Sede";
status[9] = "Fome";
status[10] = "Frio";
status[11] = "Calor";

const humor = [];

humor[0] = "Bom";
humor[1] = "Mau";
humor[2] = "Normal";
humor[3] = "Estrssado";
humor[4] = "Excelente";

const bruxo = {
  nome: `José`,
  idade: 20,
};

function momentoAleatorio() {
  const randompro4 = Math.floor(Math.random() * periodo.length);

  const momentoInicial = periodo[randompro4];
  return momentoInicial;
}

console.log(`O Bruxo`); //será alterado depois

console.log(`
"O Bruxo" conseguiu entender seu último feito, agora passa 
por uma fase nova, ao qual jamais viveu; uma era de paz e 
tranquilidade, na qual tentará viver uma vida "normal" ou 
menos" perturbada".

Nessa aventura, 'bruxo' será interpretado por você, escolha 
todas as suas ações.
`);

const nome = prompt("Digite seu nome para iniciar: "); // Jogador colocará seu nome para haver um rappot entre o jogo e o jogador

console.log(`O bruxo ${nome} após salvar o mundo, volta para
sua antiga vila e ajuda na reconstrução total, ele sentia - se
culpado e preferiu ajeitar às coisas.
  
Conseguiu uma barraca modesta, perto da entrada da vila, para que
conseguisse ver e ouvir às possíveis ameaças chegando antes de todos,
e ao mesmo tempo, estar pronto para o dia de trabalho antes de todos.

Sua rotina começa às 4: 30h da manhã, indo até às 19: 20h da tarde,
não para nem aos domingos.Das 19: 30h até o dia seguinte ele se resguarda
para seus afazeres domésticos, treinamentos de magía e combate.`)