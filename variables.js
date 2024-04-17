const reddeadRemdeption2 =  200;
const Money = 200;
let message ;

if (Money < reddeadRemdeption2) {
    message = 'You do not have enough money';
} else if (Money === reddeadRemdeption2) {
    message = 'Confirm payment?';
} else {
message = 'purchase';
};
console.log(message);

const persoNage = 17;

const canVote = persoNage >=16 ? 'Pode votar!.' : 'Não pode votar!.'
console.log(canVote);

const grade = 100;

const aproVado = grade >=60 ? 'aprovada.' : 'reprovada.'
console.log(aproVado);

const gradeHigh = 100;
const gradeMedia = 60;
const gradeLow = 58;
let result ;

if (gradeMedia > gradeLow) {
    result = 'Você foi Aprovado, Parabéns:].';
} else if (gradeMedia <= gradeLow) {
        result = 'Você foi Reprovado, Estude mais para que no Futuro você tente novamente. S2'; 
} else {
    result = 'Você foi Aprovado, Parabéns:].';
}
    console.log(result);