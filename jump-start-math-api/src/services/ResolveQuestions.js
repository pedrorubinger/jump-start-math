const resolve = ( nivel, resposta, valores ) => {
  let result;

  switch (nivel) {
    case 1:
      result = resolveQuestion1(resposta, valores);
      break;
      
      case 2:
      result = resolveQuestion2(resposta, valores);
      break;
      
      case 3:
      result = resolveQuestion3(resposta, valores);
      break;
  
    default:
      throw new Error("Formato errado");
  }

  return result;
}

const resolveQuestion1 = (resposta, { radius }) => {
  const area = parseFloat((3.14 * radius**2).toFixed(2));

  return { respostaEsperada: area, acerto: resposta === area };
}

const resolveQuestion2 = (resposta, { radius, height }) => {
  const area = parseFloat((3.14 * radius**2).toFixed(2)) * height;
  
  return { respostaEsperada: area, acerto: resposta === area }
}

const resolveQuestion3 = (resposta, { side }) => {
  const height = parseFloat(Math.sqrt(side*side - (side/2)**2).toFixed(2));
  const area = parseFloat(((side*height)/2).toFixed(2));

  return { respostaEsperada: area, acerto: resposta === area };
}


module.exports = resolve