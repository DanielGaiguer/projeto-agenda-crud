const Contato = require('../models/ContatoModel')


exports.index = async (req, res) => {
    if (req.session.user) {
        email = req.session.user.email
        console.log(email)

        const contatos = await Contato.buscaContatos({ usuario: email }) 
        res.render('index', { contatos });
        return;
    } 
    
    const contatos = { nome: "", sobrenome: "", email: "", telefone: ""} 
    res.render('index', { contatos });
    return;
}; 
 