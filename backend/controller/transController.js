const transModel = require('../models/transcationModel')

const allTranscation = async(req,res) => {
    try {
        const result = await transModel.find().sort({date : -1});
        res.status(200).json({msg:"Transcation details",result})
    } catch (error) {
        res.status(500).json({error:"Error in getting transcation details"})
    }
}

const addfunds = async(req,res) => {
    try {
        const {runningBalance} = req.body;
        const newBalance = new transModel({runningBalance});
        await newBalance.save();
        const result = await transModel.find();
        res.status(200).json({msg:"Data inserted"});
    } catch (error) {
        res.status(500).json({error:"Error in adding"})
    }
}

const creditTranscation = async(req,res) => {
    try {
        const {description,credit} = req.body;
        const result = await transModel.find();
        let totalBalance = result[result.length-1].runningBalance;
        totalBalance = totalBalance + credit;
        const newBalance = new transModel({runningBalance:totalBalance,description,credit});
        await newBalance.save();
        const result1 = await transModel.find();
        res.status(200).json({msg:"Credited",result1});
    } catch (error) {
        res.status(500).json({error:"Error in crediting"})
    }
}

const debitTranscation = async(req,res) => {
    try {
        const {description,debit} = req.body;
        const result = await transModel.find();
        let totalBalance = result[result.length-1].runningBalance;
        totalBalance = totalBalance - debit;
        const newBalance = new transModel({runningBalance:totalBalance,description,debit});
        await newBalance.save();
        const result1 = await transModel.find();
        res.status(200).json({msg:"Debited",result1});
    } catch (error) {
        res.status(500).json({error:"Error in debiting"})
    }
}


module.exports={
    allTranscation,
    addfunds,
    creditTranscation,
    debitTranscation
}