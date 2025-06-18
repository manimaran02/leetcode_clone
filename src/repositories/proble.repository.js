const { Problem } = require("../models");

class ProblemRepository{

    async createProblem(problemData){
        
       try {
        // console.log("Repo",problemData)
        
         const problem = await Problem.create({
            title : problemData.title,
            description : problemData.description,
            testcase : (problemData.testcase) ? problemData.testcase : []
        })
        // console.log("Problem created from repo",problem)
        return problem
       } catch (error) {

            console.log(error)
            throw error

        }

    }

}


module.exports = ProblemRepository