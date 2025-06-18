const markDown = require("../utils/markdownSanitizer")

class ProblemService{
    constructor(problemRepo){
        this.problemRepo = problemRepo
    }

    async createProblem(problemData){
        

           
            problemData.description = markDown(problemData.description)

            // console.log("Service" , problemData)

            const problem = await this.problemRepo.createProblem(problemData)
            //  console.log("Problem created from service",problem)
            return problem
          

    }

    async getAllProblems(){

        const problem = await this.problemRepo.getAllProblems()

        return problem

    }
}


module.exports = ProblemService