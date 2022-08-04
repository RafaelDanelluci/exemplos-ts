enum Profissao {
  Cantora,
  Atriz,
  Desenvolvedora,
  pintor
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao: Profissao
}

const pessoa1 = {
  name: "mariana",
  idade: 28,
  profissao: Profissao.Desenvolvedora
}

pessoa1.idade = 25;

const andre: {name: string, idade: number, profissao: string} = {
  name: 'andre',
  idade: 25,
  profissao: 'pintor'
}

const paula: {name: string, idade: number, profissao: string} = {
  name: 'paula',
  idade: 25,
  profissao: 'pintor'
}

console.log(pessoa1)