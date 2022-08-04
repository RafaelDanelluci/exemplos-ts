"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Cantora"] = 0] = "Cantora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["pintor"] = 3] = "pintor";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    name: "mariana",
    idade: 28,
    profissao: Profissao.Desenvolvedora
};
pessoa1.idade = 25;
const andre = {
    name: 'andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    name: 'paula',
    idade: 25,
    profissao: 'pintor'
};
console.log(pessoa1);
