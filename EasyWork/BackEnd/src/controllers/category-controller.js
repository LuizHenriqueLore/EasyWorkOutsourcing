const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.get = async(req, res, next) => {
    try{
        var data = await Category.find({});
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getById = async(req, res, next) => {
    try{
        var data = await Category.findById(req.params.id);
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.getByCategoryname = async(req, res, next) => {
    try{
        var data = await Category.find({ categoryname: `${req.params.categoryname}` }, 'categoryname');
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try{
        var category = new Category(req.body);
        await category.save();
        res.status(201).send({
            message: 'Categoria cadastrada com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};

exports.put = async(req, res, next) => {
    try{
        await Category.findOneAndUpdate(req.params.id , {
            $set:{
                categoryname: req.body.categoryname
            }
        });
        res.status(201).send({
            message: 'Categoria alterada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao tentar update'
        })
    }
};

exports.delete = async(req, res, next) => {
    try{
        await Category.findOneAndDelete({_id: req.params.id});
        res.status(200).send({
            message: 'Categoria removida com sucesso!'
        });
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
};