const { Games } = require("../models/");

class GamesController {
  static async index(req, res) {
    var nomeError = req.flash("nomeError");
    var categoriaError = req.flash("categoriaError");
    var consoleError = req.flash("consoleError");
    var precoError = req.flash("precoError");
    var nome = req.flash("nome");
    var categoria = req.flash("categoria");
    var preco = req.flash("preco");

    nomeError =
      nomeError == undefined || nomeError.length == 0 ? undefined : nomeError;
    categoriaError =
      categoriaError == undefined || categoriaError.length == 0
        ? undefined
        : categoriaError;
    precoError =
      precoError == undefined || precoError.length == 0
        ? undefined
        : precoError;
    consoleError =
      consoleError == undefined || consoleError.length == 0
        ? undefined
        : consoleError;
    nome = nome == undefined || nome.length == 0 ? "" : nome;
    categoria =
      categoria == undefined || categoria.length == 0 ? "" : categoria;
    preco = preco == undefined || preco.length == 0 ? "" : preco;

    const games = await Games.findAll();
    res.render("home", {
      games: games,
      nomeError,
      categoriaError,
      precoError,
      consoleError,
      nome: nome,
      preco: preco,
      categoria: categoria,
    });
  }

  static async create(req, res) {
    let dados = req.body;
    var nomeError;
    var categoriaError;
    var consoleError;
    var precoError;
    var nome = req.flash("nome");
    var categoria = req.flash("categoria");
    var preco = req.flash("preco");

    if (dados.nome == undefined || dados.nome == "") {
      nomeError = "O nome do gamer deve ser preenchido*";
    }
    if (dados.nome.length <= 3) {
      nomeError = "O nome do gamer muito pequeno*";
    }
    if (dados.categoria == undefined || dados.categoria == "-") {
      categoriaError = "A categoria deve ser preenchida*";
    }
    if (dados.console == undefined || dados.console == "-") {
      consoleError = "A categoria deve ser preenchida*";
    }
    if (dados.preco == undefined || dados.preco == "") {
      precoError = "O valor do game deve ser preenchido*";
    }

    nome = nome == undefined || nome.length == 0 ? "" : nome;
    categoria =
      categoria == undefined || categoria.length == 0 ? "" : categoria;

    if (
      nomeError != undefined ||
      categoriaError != undefined ||
      precoError != undefined ||
      consoleError != undefined ||
      precoError != undefined
    ) {
      req.flash("nomeError", nomeError);
      req.flash("categoriaError", categoriaError);
      req.flash("consoleError", consoleError);
      req.flash("precoError", precoError);
      req.flash("nome", dados.nome);
      req.flash("categoria", dados.categoria);
      req.flash("preco", dados.preco);
      res.redirect("/");
    } else {
      const games = await Games.create({
        nome: dados.nome,
        categoria: dados.categoria,
        console: dados.console,
        preco: dados.preco,
        data_lancamento: dados.data,
        comentarios: dados.comentarios,
      });

      res.render("home", {
        games: games,
        nomeError,
        categoriaError,
        consoleError,
        precoError,
        nome: nome,
        categoria: categoria,
        preco: preco,
      });
    }
  }

  static async lista(req, res) {
    const games = await Games.findAll();
    res.render("games/lista", {
      games: games,
    });
  }

  static async delete(req, res) {
    let id = req.params.id;
    const games = await Games.findByPk(id);
    if (games != undefined) {
      games
        .destroy({
          where: {
            id: id,
          },
        })
        .then(() => {
          res.redirect("/games/lista");
        });
      if (isNaN(id)) {
        res.redirect("/games/lista");
      } else {
      }
    } else {
      res.redirect("/games/lista");
    }
  }
  static editar(req, res) {
    let id = req.params.id;
    Games.findByPk(id).then((games) => {
      res.render("games/edit", { games: games });
    });
  }

  static async update(req, res) {
    let id = req.body.id;
    let dados = req.body;
    Games.update(
      {
        nome: dados.nome,
        categoria: dados.categoria,
        console: dados.console,
        preco: dados.preco,
        data_lancamento: dados.data,
        comentarios: dados.comentarios,
      },
      {
        where: {
          id: id,
        },
      }
    ).then(() => {
      res.redirect("/games/lista");
    });
  }
}
module.exports = GamesController;
