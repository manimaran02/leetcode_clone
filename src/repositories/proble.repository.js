const { Problem } = require("../models");

class ProblemRepository{

    async createProblem(problemData){
        
       
        // console.log("Repo",problemData)
        
         const problem = await Problem.create({
            title : problemData.title,
            description : problemData.description,
            testCases : (problemData.testCases) ? problemData.testCases : []
        })
        // console.log("Problem created from repo",problem)
        return problem
       

    }

    async getAllProblems(){
        const problem = await Problem.find({})
        return problem
    }

    async getProblem(id){

        const problem = await Problem.findById(id)
        return problem

    }

}


module.exports = ProblemRepository