const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async(req, res, next) => {
    try{
        var data = await User.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await User.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByUsername = async(req, res, next) => {
    try{
        var data = await User.find({ username: `${req.params.username}` }, 'name username password email');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try{
        var user = new User(req.body);
        await user.save();
        res.status(201).send({
            message: 'Usuário cadastrado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.put = async(req, res, next) => {
    try{
        await User.findOneAndUpdate(req.params.id , {
            $set:{
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            }
        });
        res.status(201).send({
            message: 'Usuário alterado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao tentar update'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await User.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Usuário removido com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};