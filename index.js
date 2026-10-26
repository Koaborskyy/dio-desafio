// Classe genérica que representa um herói de uma aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método que define o ataque conforme o tipo e exibe a mensagem
  atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque básico";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Lista de heróis para demonstrar o laço de repetição e instâncias de classe
const herois = [
  new Heroi("Gandalf", 1500, "mago"),
  new Heroi("Arthur", 35, "guerreiro"),
  new Heroi("Shaolin", 40, "monge"),
  new Heroi("Hanzo", 28, "ninja")
];

// Laço de repetição executando o método atacar de cada herói
for (let i = 0; i < herois.length; i++) {
  herois[i].atacar();
}
