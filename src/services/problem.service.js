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

    async getProblem(id){

        const problem = await this.problemRepo.getProblem(id)

        return problem

    }

    async deleteProblem(id){

        const problem = await this.problemRepo.deleteProblem(id)

        return problem        

    }

    async updateProblem(id,problemData){

        
        problemData.description ? markDown(problemData.description) : ""
        // console.log(problemData,"From service")
        const problem = await this.problemRepo.updateProblem(id,problemData)

        return problem

    }
}


module.exports = ProblemService