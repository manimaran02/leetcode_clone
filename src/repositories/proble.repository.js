const logger = require("../config/logger.config");
const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models");

class ProblemRepository{

    async createProblem(problemData){
        
       
        // console.log("Repo",problemData)
        
         try {
            const problem = await Problem.create({
            title : problemData.title,
            description : problemData.description,
            testCases : (problemData.testCases) ? problemData.testCases : []
        })
        // console.log("Problem created from repo",problem)
        return problem
         } catch (error) {
            // console.log(error)
            throw error
         }
       

    }

    async getAllProblems(){
        try {
            const problem = await Problem.find({})
            return problem
        } catch (error) {
            // console.log(error)
            throw error
        }
    }

    async getProblem(id){

        try {
            const problem = await Problem.findById(id)
            return problem
        } catch (error) {
            // console.log(error)
            throw error   
        }

    }

    async deleteProblem(id){
        
        try {
            const problem = await Problem.findByIdAndDelete(id)
            if(!problem){
                 logger.error(`Problem ${id} is not found in db`)
                throw new NotFound()
            }    
        // console.log(problem)

            return problem
        } catch (error) {
            // console.log(error)
            throw error
        }
    }

    async updateProblem(id,updateData){
       
        try {
             const problem = await Problem.findByIdAndUpdate(id,updateData,{new: true})
              return problem
        } catch (error) {
            console.log(error)
            throw error
        }
       
    }

}


module.exports = ProblemRepository