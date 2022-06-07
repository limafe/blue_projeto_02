const prompt = require('prompt-sync')();
console.clear();

let opcoes = [];
let vencido = 0;
let perdido = 0;

for (let reiniciar = 'sim'; reiniciar == 'sim'; ) {
    console.log('Bem vindo ao jokenpo');

    let rodadas = +prompt('Quantas rodadas você deseja jogar? ');
    while (isNaN(rodadas)) {
        console.log('Ei! Digite um número válido, amigo.');
        rodadas = +prompt('Quantas rodadas você deseja jogar? ');
    }

    console.log(`
Quantidade de rodadas selecionada: ${rodadas}
`);

    console.log('Pressione ENTER para continuar');
    let enter = prompt();
    console.clear();

    console.log(`Vamos começar adicionando 3 elementos para o nosso jogo (recomendação: pedra, papel e tesoura).
    Lembrando que:
    O 1º elemento perde para o 2º
    O 2º elemento perde para o 3º
    O 3º elemento perde para o 1º
    
    Digite elementos que façam sentido para você jogar!
    `);

    for (let confirmarElementos; confirmarElementos != 'sim'; ) {
        for (let contElementos = 0; contElementos < 3; contElementos++) {
            let elemento = prompt(
                `Digite o ${contElementos + 1}º elemento: `,
            ).toLowerCase();
            opcoes.push(elemento);
        }
        console.log();

        console.log(`Os elementos adicionados são:
 1º ${opcoes[0]}
 2º ${opcoes[1]}
 3º ${opcoes[2]}
 `);

        confirmarElementos = prompt(
            'Confirmar elementos escolhidos? ',
        ).toLowerCase();

        while (confirmarElementos != 'sim' && confirmarElementos != 'nao') {
            console.log('Digite "sim" ou "nao".');
            confirmarElementos = prompt(
                'Confirmar elementos escolhidos? ',
            ).toLowerCase();
        }

        if (confirmarElementos == 'nao') {
            contElementos = 0;
            opcoes = [];
            console.clear();
        }
    }

    console.log(`
Muito bem! Vamos ao jogo.
`);

    console.log('Pressione ENTER para continuar');
    enter = prompt();
    console.clear();

    for (let rodadasJogadas = 0; rodadasJogadas < rodadas; rodadasJogadas++) {
        console.log(
            'Você escolherá a sua jogada e o computador irá escolher a dele.',
        );
        console.log();

        console.log(
            `Escolha a sua jogada entre: ${opcoes[0]}, ${opcoes[1]} ou ${opcoes[2]}`,
        );
        let escolhaU = prompt('');

        while (
            escolhaU != opcoes[0] &&
            escolhaU != opcoes[1] &&
            escolhaU != opcoes[2]
        ) {
            console.log(
                'Esse elemento não existe! Digite um elemento de acordo com os escolhidos.',
            );

            escolhaU = prompt('');
        }
        console.log(`Você escolheu: ${escolhaU}
    `);

        let escolhaPc = Math.floor(Math.random() * 3);

        console.log(`O computador escolheu: ${opcoes[escolhaPc]}
    `);

        if (escolhaPc == 0) {
            escolhaPc = opcoes[0];
        } else if (escolhaPc == 1) {
            escolhaPc = opcoes[1];
        } else if (escolhaPc == 2) {
            escolhaPc = opcoes[2];
        }

        if (escolhaU == opcoes[0] && escolhaPc == opcoes[2]) {
            console.log('Você ganhou!');
            vencido++;
        } else if (escolhaU == opcoes[1] && escolhaPc == opcoes[0]) {
            console.log('Você ganhou!');
            vencido++;
        } else if (escolhaU == opcoes[2] && escolhaPc == opcoes[1]) {
            console.log('Você ganhou!');
            vencido++;
        } else if (escolhaU == opcoes[0] && escolhaPc == opcoes[1]) {
            console.log('Você perdeu!');
            perdido++;
        } else if (escolhaU == opcoes[1] && escolhaPc == opcoes[2]) {
            console.log('Você perdeu!');
            perdido++;
        } else if (escolhaU == opcoes[2] && escolhaPc == opcoes[0]) {
            console.log('Você perdeu!');
            perdido++;
        } else if (escolhaU == opcoes[0] && escolhaPc == opcoes[0]) {
            console.log('Empatou!');
        } else if (escolhaU == opcoes[1] && escolhaPc == opcoes[1]) {
            console.log('Empatou!');
        } else if (escolhaU == opcoes[2] && escolhaPc == opcoes[2]) {
            console.log('Empatou!');
        }
        console.log('Pressione ENTER para continuar');
        enter = prompt();
        console.clear();
    }

    console.log('E o grande campeão é...');
    console.log();

    if (vencido > perdido) {
        console.log('VOCÊ! Parabéns pela vitória!');
    } else if (vencido < perdido) {
        console.log('O COMPUTADOR! Talvez você ganhe numa próxima.');
    } else {
        console.log('DEU EMPATE! O duelo foi acirrado.');
    }
    console.log();

    reiniciar = prompt('Deseja reiniciar o jogo?').toLowerCase();
    while (reiniciar != 'sim' && reiniciar != 'nao') {
        console.log('Resposta inválida! Digite apenas "sim" ou "nao".');
        reiniciar = prompt('Deseja reiniciar o jogo?').toLowerCase();
    }
    opcoes = [];
    vencido = 0;
    perdido = 0;
    console.clear();
}

console.log('Obrigado pelo jogo! Até mais...');
