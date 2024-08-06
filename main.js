const prompt = require("prompt-sync")();

const corretora = require("./modulos/corretora.js");
const cliente = require("./modulos/cliente.js");
const corretor = require("./modulos/corretor.js");

const menuPrincipal = () => {
  console.log(`
    GERENCIAMENTO DE CORRETORA DE IMÓVEIS
`);

  while (true) {
    console.log(`
          ESCOLHA O MÓDULO QUE QUER GERENCIAR
      1 - CORRETORA
      2 - CLIENTE
      3 - CORRETOR
      0 - Sair
      `);

    const opcaoM = parseInt(prompt(": ")); // Opção módulo
    switch (opcaoM) {
      case 1:
        menuCorretora();
        break;

      case 2:
        menuCliente();
        break;

      case 3:
        menuCorretor();
        break;

      case 0:
        console.log("Encerrando programa.");
        process.exit();
        break;

      default:
        console.log("Opção inválida");
        break;
    }
  }
};

const menuCorretora = () => {
  console.log("GERENCIAMENTO DE CORRETORA");
  while (true) {
    console.log(`
              1 - CADASTRAR CORRETORA
              2 - LISTAR CORRETORA
              3 - ATUALIZAR CORRETORA
              4 - EXCLUIR CORRETORA
              0 - SAIR   
              `);
    const opcaoS = parseInt(prompt(": ")); // Opcão de serviço
    switch (opcaoS) {
      case 1:
        corretora.store();
        break;

      case 2:
        corretora.index();
        break;

      case 3:
        corretora.update();
        break;

      case 4:
        corretora.destroy();
        break;

      case 0:
        return;

      default:
        console.log("Opção inválida");
        break;
    }
  }
};

const menuCliente = () => {
  console.log("GERENCIAMENTO DE CLIENTE");
  while (true) {
    console.log(`
                1 - CADASTRAR CLIENTE
                2 - LISTAR CLIENTE
                3 - ATUALIZAR CLIENTE
                4 - EXCLUIR CLIENTE
                0 - SAIR   
                `);
    const opcaoS = parseInt(prompt(": ")); // Opcão de serviço
    switch (opcaoS) {
      case 1:
        cliente.store();
        break;

      case 2:
        cliente.index();
        break;

      case 3:
        cliente.update();
        break;

      case 4:
        cliente.destroy();
        break;

      case 0:
        return;

      default:
        console.log("Opção inválida");
        break;
    }
  }
};

const menuCorretor = () => {
  console.log("GERENCIAMENTO DE CORRETOR");
  while (true) {
    console.log(`
                  1 - CADASTRAR CORRETOR
                  2 - LISTAR CORRETOR
                  3 - ATUALIZAR CORRETOR
                  4 - EXCLUIR CORRETOR
                  0 - SAIR   
                  `);
    const opcaoS = parseInt(prompt(": ")); // Opcão de serviço
    switch (opcaoS) {
      case 1:
        corretor.store();
        break;

      case 2:
        corretor.index();
        break;

      case 3:
        corretor.update();
        break;

      case 4:
        corretor.destroy();
        break;

      case 0:
        return;

      default:
        console.log("Opção inválida");
        break;
    }
  }
};

menuPrincipal();
