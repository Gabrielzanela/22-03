class Animal {
    constructor(nome, comprimento, patas, cor, ambiente, velocidade) {
      this.nome = nome,
      this.comprimento = comprimento,
      this.patas = patas,
      this,cor = cor,
      this.ambiente = ambiente,
      this.velocidade = velocidade
    }
  
    AlterarNome(nome){
      this.nome
    }
    alterarComprimento(comprimento){
      this.comprimento = comprimento
    }

    alterarPatas(patas){
      this.patas = patas
    }

    alterarCor(cor){
      this.cor = cor
    }

    alterarAmbiente(ambiente){
      this.ambiente = ambiente
    }

    AlterarVelocidade(velocidade){
      this.velocidade = velocidade
    }
     Dados(obj){
      console.table(obj)
     }

    }