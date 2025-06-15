function problemPing(req,res){
    
    return res.json({
        msg : "Problem controller is live up ping check"
    })
}

function addProblem(req,res){
        
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