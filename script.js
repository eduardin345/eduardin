// 1. Definindo a classe Carro
class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.velocidade = 0;
        this.ligado = false;
        this.mensagemElement = document.getElementById("mensagem");
        this.somLigar = document.getElementById("som-ligar");
        this.volumeAtual = 0.1; // Volume inicial
        this.somLigar.volume = this.volumeAtual; // Define o volume inicial
    }

    // Métodos do carro
    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            this.exibirMensagem("Carro ligado!");
            this.aumentarVolumeSomLigar(); // Aumenta o volume
            this.tocarSomLigar(); // Toca o som
        } else {
            this.exibirMensagem("O carro já está ligado.");
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            this.velocidade = 0;
            atualizarVelocidadeNaTela();
            this.exibirMensagem("Carro desligado!");
        } else {
            this.exibirMensagem("O carro já está desligado.");
        }
    }

    acelerar() {
        if (this.ligado) {
            this.velocidade += 15;
            atualizarVelocidadeNaTela();
            this.exibirMensagem("Acelerando! Velocidade atual: " + this.velocidade);
        } else {
            this.exibirMensagem("O carro precisa estar ligado para acelerar.");
        }
    }

    // Método para exibir mensagens na tela
    exibirMensagem(mensagem) {
        this.mensagemElement.textContent = mensagem;
    }

    // Método para tocar o som ao ligar
    tocarSomLigar() {
        this.somLigar.play();
    }

    // Método para aumentar o volume do som
    aumentarVolumeSomLigar() {
        this.volumeAtual += 5; // Aumenta o volume em 0.1
        if (this.volumeAtual > 1) {
            this.volumeAtual = 100; // Limita o volume máximo a 1
        }
        this.somLigar.volume = this.volumeAtual; // Define o novo volume
        console.log("Volume aumentado para: " + this.volumeAtual); // Opcional: Exibe o volume no console
    }
}

// 2. Criando um objeto Carro
const meuCarro = new Carro("Coupe", "vermelho");

// 3. Atualizando as informações do carro na página
document.getElementById("modelo").textContent = meuCarro.modelo;
document.getElementById("cor").textContent = meuCarro.cor;

// 4. Funções para interagir com os botões
function ligarCarro() {
    meuCarro.ligar();
}

function desligarCarro() {
    meuCarro.desligar();
}

function acelerarCarro() {
    meuCarro.acelerar();
}

// 5. Adicionando os "ouvintes" de evento aos botões
document.getElementById("ligar").addEventListener("click", ligarCarro);
document.getElementById("desligar").addEventListener("click", desligarCarro);
document.getElementById("acelerar").addEventListener("click", acelerarCarro);

// 6. Função para atualizar a velocidade na tela
function atualizarVelocidadeNaTela() {
    document.getElementById("velocidade").textContent = meuCarro.velocidade;
}