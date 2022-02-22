const mongoose = require('mongoose');
const News = mongoose.model('News');

exports.get = async(req, res, next) => {
    try{
        var data = await News.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await News.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByTitle = async(req, res, next) => {
    try{
        var data = await News.find({ title: `${req.params.title}` }, 'title');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try{
        var news = new News(req.body);
        await news.save();
        res.status(201).send({
            message: 'Notícia cadastrada com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.put = async(req, res, next) => {
    try{
        await News.findOneAndUpdate(req.params.id , {
            $set:{
                category: req.body.category,
                title: req.body.title,
                description: req.body.description
            }
        });
        res.status(201).send({
            message: 'Notícia alterada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao tentar update'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await News.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Notícia removida com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};