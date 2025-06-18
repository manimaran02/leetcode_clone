
const {StatusCodes} = require('http-status-codes')
const {ProblemRepository} = require('../repositories')
const {ProblemService} = require('../services')
 
const problemService = new ProblemService(new ProblemRepository())

function problemPing(req,res){
    
    return res.json({
        msg : "Problem controller is live up ping check"
    })
}

async function addProblem(req,res,next){
        try {
             
            // console.log("Controller",req.body)
            const newProblem = await problemService.createProblem(req.body)

            return res.status(StatusCodes.CREATED).json({
                success : true,
                message : "Successfully created",
                error : {},
                data : newProblem
            })


        } catch (error) {
            next(error)
        }
}

function getProblem(req,res){

}

function getProblems(req,res){

}

function updateProblem(req,res){

}

function deleteProblem(req,res){

}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    problemPing
}