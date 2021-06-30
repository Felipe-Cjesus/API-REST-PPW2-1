const Curso = require("./models/Curso");

const curso = new Curso({
  curso: "Ciência da Computação",
  duracao: "9 semestres",
  tipoDeCurso: "Graduação",
  modalidade: "Presencial",
  mensalidade: 1014.32,
});

curso.save().then(function () {
  console.log("salvo");
});

const Artista = require('./models/Artista')

const a = new Artista({
    nome: "Artista 02",
    pais: "Portugal"
})

// a.save().then(function(){
//     console.log('salvo')
// })
