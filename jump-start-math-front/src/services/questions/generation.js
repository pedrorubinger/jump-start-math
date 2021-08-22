export default class QuestionsGenerator {
  constructor() {
    return this.generate();
  }

  generate() {
    const q1 = {
      id: 0,
      nivel: 1,
      ...this.generateQuestion1(),
    };
    const q2 = {
      id: 1,
      nivel: 2,
      ...this.generateQuestion2(),
    };
    const q3 = {
      id: 2,
      nivel: 3,
      ...this.generateQuestion3(),
    };

    return [q1, q2, q3];
  }

  generateQuestion1(){
    let side;
    
    do{
      side = Math.round(Math.random() * 100);
    }while(side === 0);
    
    const text = `Descubra a área do triângulo equilátero com lado de ${side}cm. Não se esqueça de sempre usar números com, no máximo, duas casas decimais.`;

    return {text, values: { side }};
  }

  generateQuestion2(){
    let radius;
    
    do{
      radius = Math.round(Math.random() * 50);
    }while(radius === 0);

    const text = `Informe a área da circunferência sabendo que o raio é igual a ${radius}cm. Não se esqueça de sempre usar números com, no máximo, duas casas decimais.`;
    
    return {text, values: { radius }};
  }

  generateQuestion3(){
    let radius;
    let height;
    
    do{
      radius = Math.round(Math.random() * 50);
      height= Math.round(Math.random() * 100);
    }while(radius === 0 || height === 0);

    const text = `Informe a área do cilíndro, sabendo que seu raio é igual a ${radius}cm e sua altura mede ${height}cm. Não se esqueça de sempre usar números com, no máximo, duas casas decimais.`;
    
    return {text, values: { radius, height }};
  }

}
