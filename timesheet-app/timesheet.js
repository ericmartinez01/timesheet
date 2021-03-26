const workers = [{
    teamMember: 'Eric Grissett',
    id: uuidv4(),  
}]

const addTeamMember = (name) => {
    return workers.push({
        teamMember: name,
        id: uuidv4()
    })
}

const removeTeamMember = (id) => {

}

let paragraphEl = document.createElement('p')
let workerSummaryEl = document.querySelector('#worker-summary')

const updateWorkers = (workers) => {
    workers.forEach((worker) => {
        paragraphEl.textContent = `${worker.teamMember} hours = 42hrs`
        workerSummaryEl.appendChild(paragraphEl)
    })
}

updateWorkers(workers)