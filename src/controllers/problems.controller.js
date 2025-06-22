
const {StatusCodes} = require('http-status-codes')
const {ProblemRepository} = require('../repositories')
const {ProblemService} = require('../services')
const NotFound = require('../errors/notfound.error')

 
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

async function getProblem(req,res,next){

    try {
        const problem = await problemService.getProblem(req.params.id)

        
        if(!problem){
            throw new NotFound("Invalid id",{'Problem' : req.params.id})
        }

        return res.status(StatusCodes.OK).json({
            success : true,
                message : "Successfully get the problem by ID",
                error : {},
                data : problem
        })

    } catch (error) {
        
        console.log(error)
        next(error)
        
    }
        
}

async function getProblems(req,res,next){

    try {
        
        const response = await problemService.getAllProblems()


        return res.status(StatusCodes.OK).json({
                success : true,
                message : "Successfully fetched",
                error : {},
                data : response
        })

    } catch (error) {
        // console.log(error)
        next(error)
    }

}

async function updateProblem(req,res,next){

    // console.log(`${req.params.id} Params  ${req.body} from body`)

    try {
        const updatedProblem = await problemService.updateProblem(req.params.id,req.body)

        // console.log(updatedProblem, " From Controller")
        
         if(!updatedProblem){
            throw new NotFound("Invalid id",{'Problem' : req.params.id})
        }
        
        return res.status(StatusCodes.OK).json({
                success : true,
                message : "Successfully created",
                error : {},
                data : updatedProblem
    })

    } catch (error) {
        // console.log(error)
        next(error)
    }


}

async function deleteProblem(req,res,next){
   try {
     
     const problem = await problemService.deleteProblem(req.params.id)
    
    if(!problem){
           
            throw new NotFound("Invalid id",{'Problem' : req.params.id})
        }
    
    return res.status(StatusCodes.OK).json({
        success : true,
                message : "Problem deleted Successfully",
                error : {},
                data : problem
    })  

   } catch (error) {
        // console.log(error)
        next(error)
   }  

}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    problemPing
}