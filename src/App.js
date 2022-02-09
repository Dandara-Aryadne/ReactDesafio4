import React, { Component }  from 'react'

class Resultado extends Component {
mensagem = (frase) => {
return (
    <div> 
    <h4>Meu numero é 17 e meu dobro é {frase}  </h4> 
   
    </div>
)
  }
calc = (y) => {
return y * 17
}
  render(){
    return(
<div>
<h2>{this.mensagem("além de:")}</h2>
<h3>{this.calc(2)}</h3>
      </div>
    )
  }
}

export default Resultado
