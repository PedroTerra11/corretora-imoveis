const prompt = require("prompt-sync")();

const corretora = require("./corretora.js");
const cliente = require("./cliente.js");
const corretor = require("./corretor.js");
const imovel = require("./imovel.js");
const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  let id_imovel = 0;
  let id_corretor = 0;
  let id_cliente = 0;

  if (imovel.index()) {
    id_imovel = parseInt(prompt("ID da corretora: "));
  } else console.log("Cadastre uma corretora para inserir um corretor");
  if (corretor.index()) {
    id_corretor = parseInt(prompt("ID da corretor: "));
  } else console.log("Não há corretores.");
  if (cliente.index()) {
    id_cliente = parseInt(prompt("ID do cliente: "));
  } else console.log("Não há clientes.");

  if (
    imovel.show(id_imovel) &&
    corretor.show(id_corretor) &&
    cliente.show(id_cliente) &&


  ) {
    return {
      id_corretora,
      id_corretor,
      id_cliente,
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);
    console.log("Venda adicionada com sucesso!");
  }
};

const index = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado!");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
};

const show = (id) => db.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("Id: "));
    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado.");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("Id: "));
    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Registro removido com sucesso.");
    } else console.log("Registro não encontrado.");
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
