class Pontuacao {
  constructor(){
    this.pontos = 0;
  }
  
  exibe(){
    textAlign('right');
    fill('#fff');
    textSize(25);
    text(parseInt(this.pontos), width - 30, 50)
  }
  
  adicionarPonto(){
    this.pontos = this.pontos + 0.2;
  }
}