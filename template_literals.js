// Template literals

const Marca = 'PNY'
const Modelo = 'VCNRTXA6000-PB';
const Arquitetura = 'NVIDIA Ampere';
const Tamanhodoprocesso = '8nm';
const Transistores = '28,3 bilhões';
const Tamanhodamatriz = '628,4 mm';
const NúcleosCUDA = 10752;
const Núcleostensores = 336;
const NúcleosRT = 84;

let hardwares = 
`Marca: ${Marca}
Modelo: ${Modelo}
Arquitetura: ${Arquitetura}
Tamanho do processo: ${Tamanhodoprocesso}
Transistores: ${Transistores}
Tamanho da matriz: ${Tamanhodamatriz}
NúcleosCUDA: ${NúcleosCUDA}
Núcleostensores: ${Núcleostensores}
NúcleosRT: ${NúcleosRT}`;

console.log(hardwares);