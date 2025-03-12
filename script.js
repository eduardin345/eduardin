// Definição da classe Carro
class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.velocidade = 0; // Novo atributo: velocidade
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            exibirMensagem("Carro ligado!"); // Exibe a mensagem na tela
            console.log("Carro ligado!");
        } else {
            console.log("O carro já está ligado.");
        }
        atualizarEstadoCarroNaTela(); // Atualiza o estado do carro na tela
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            this.velocidade = 0; // Reseta a velocidade ao desligar
            atualizarVelocidadeNaTela(); // Garante que a tela seja atualizada
            exibirMensagem("Carro desligado!"); // Exibe a mensagem na tela
            console.log("Carro desligado!");
        } else {
            console.log("O carro já está desligado.");
        }
        atualizarEstadoCarroNaTela(); // Atualiza o estado do carro na tela
    }

    acelerar() {
        if (this.ligado) {
            this.velocidade += 10; // Aumenta a velocidade em 10 km/h
            atualizarVelocidadeNaTela(); // Atualiza a velocidade na tela
            console.log("Acelerando! Velocidade: " + this.velocidade + " km/h");
        } else {
            exibirMensagem("O carro precisa estar ligado para acelerar."); // Exibe a mensagem na tela
            console.log("O carro precisa estar ligado para acelerar.");
        }
    }
}

// Criação de um objeto Carro
const meuCarro = new Carro("Sedan", "Vermelho");

// Exibição das informações do carro na página
document.getElementById("modeloCarro").textContent = meuCarro.modelo;
document.getElementById("corCarro").textContent = meuCarro.cor;

// Funções para atualizar a velocidade e o estado do carro na tela
function atualizarVelocidadeNaTela() {
    document.getElementById("velocidadeCarro").textContent = meuCarro.velocidade;
}

function atualizarEstadoCarroNaTela() {
  const estado = meuCarro.ligado ? "Ligado" : "Desligado";
  document.getElementById("estadoCarro").textContent = estado;
}

// Nova função para exibir mensagens
function exibirMensagem(mensagem) {
    document.getElementById("mensagemCarro").textContent = mensagem;
}

// Adicionando eventos aos botões
document.getElementById("ligarBotao").addEventListener("click", function() {
    meuCarro.ligar();
});

document.getElementById("desligarBotao").addEventListener("click", function() {
    meuCarro.desligar();
});

document.getElementById("acelerarBotao").addEventListener("click", function() {
    meuCarro.acelerar();
});

// Inicializa o estado do carro na tela
atualizarEstadoCarroNaTela();