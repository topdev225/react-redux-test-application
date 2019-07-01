import mongoose from 'mongoose';

//import models
import Expense from '../models/expense.model';
import User from '../models/user.model';
const randomWord = require('random-word');

const createExpenseObj = () => {
    const startDate = new Date(2017, 2, 2);
    const endDate = new Date(2017, 3, 3);

    return {
        title: randomWord(),
        amount: Math.floor(Math.random() * 100000),
        status: Math.floor(Math.random() * 2),
        description: randomWord(),
        username: randomWord(),
    };
};

const saveImageData = () => {
    for (var i = 0; i <= 30; i++) {
        const newExpense = new Expense(createExpenseObj());
        newExpense.save((err, expense) => {
            if (err) {
                return "Invalid Request";
            }
        });
    }
}

export const getList = (req, res) => {
    Expense.find({}).sort( { createdAt: -1 } ).exec((err, expenses) => {
        if (err) {
            return res.json({ status: 400, message: 'Invalid Request!' });
        } else {
            if (expenses.length > 0) {
                return res.json({ status: 200, message: 'Feched expenses list successfuly.', expenses: expenses });
            } else {
                const saveError = saveImageData();
                if (saveError) {
                    return res.json({ status: 400, message: 'Invalid Request!' });
                }
            }
        }
    });
}

export const createExpense = (req, res) => {
    if (req.body.id) {
        Expense.findByIdAndUpdate(req.body.id, req.body, function (err, result) {
            if (err) {
                return res.json({ status: 400, message: 'Invalid Request!' });
            }
            Expense.find({}).sort( { createdAt: -1 } ).exec((err, expenses) => {
                if (err) {
                    return res.json({ status: 400, message: 'Invalid Request!' });
                } else {
                    return res.json({ status: 200, message: 'Feched expenses list successfuly.', expenses: expenses });
                }
            });
        });
    } else {
        const newExpense = new Expense(req.body);
        newExpense.save((err, expense) => {
            if (err) {
                return res.json({ status: 400, message: 'Invalid Request!' });
            }
            Expense.find({}).sort( { createdAt: -1 } ).exec((err, expenses) => {
                if (err) {
                    return res.json({ status: 400, message: 'Invalid Request!' });
                } else {
                    return res.json({ status: 200, message: 'Feched expenses list successfuly.', expenses: expenses });
                }
            });
        });
    }
}

export const deleteExpense = (req, res) => {
    if (req.body.id) {
        Expense.remove({_id:req.body.id}, function (err, result) {
            if (err) {
                return res.json({ status: 400, message: 'Invalid Request!' });
            }
            Expense.find({}).exec((err, expenses) => {
                if (err) {
                    return res.json({ status: 400, message: 'Invalid Request!' });
                } else {
                    return res.json({ status: 200, message: 'Feched expenses list successfuly.', expenses: expenses });
                }
            });
        });
    } else {
        return res.json({ status: 400, message: 'Invalid Request!' });
    }   
}

export const getFilerList = (req,res) => {
    let flag =  req.body.flag;
    let startprice = req.body.startprice;
    let endprice = req.body.endprice;
    let startdate = req.body.startdate;
    let enddate = req.body.enddate;
    var query = '';
    if(flag == "price") {
        query = { amount: { $gt: startprice, $lt: endprice } };
    }else{
        query = { createdAt: { $gt: startdate+"T00:00:00.000Z", $lt: enddate+"T00:00:00.000Z" } };
    }
    if(startdate=='' || startprice==''){
        query = {};
    }
    Expense.find( query ).exec((err, expenses) => {
        if (err) {
            return res.json({ status: 400, message: 'Invalid Request!' });
        } else {
            if (expenses.length > 0) {
                return res.json({ status: 200, message: 'Feched expenses list successfuly.', expenses: expenses });
            } else {
                const saveError = saveImageData();
                if(saveError){
                    return res.json({ status: 400, message: 'Invalid Request!' });
                }
            }
        }
    });
}