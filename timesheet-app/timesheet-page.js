document.querySelector('#home-page').addEventListener('click', e => {
    location.assign('./index.html')
})

// listener for team member name
document.querySelector('#team-members-name').addEventListener('input', (e) => {
    console.log(e)
    console.log(e.target.value)
})