let summaryEl = document.createElement('span')

// Listener to add a person #create-worker
document.querySelector('#create-worker').addEventListener('click', (e) => {
    addTeamMember('Pete')
    let p = document.createElement('p')
    p.textContent = 'new person'
    document.querySelector('#worker-summary').appendChild(p)
    // location.assign('./timesheet.html')
    updateWorkers(workers)
})