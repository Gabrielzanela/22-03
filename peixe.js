class Peixe extends Animal{

    constructor(nome, comprimento, patas, cor, ambiente, velocidade, caracteristica){
      super(nome, comprimento, patas, cor, ambiente, velocidade)
      this.caracteristica = this.caracteristica
    }

    alterarCaracteristica(caracteristica){
        this.caracteristica = caracteristica
    }

    Retornarcaracteristica(){
        return this.caracteristica
    }
}