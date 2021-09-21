

let teamButton = document.getElementById('random-team');
let staduimButton = document.getElementById('random-venue');
let joeButton = document.getElementById('randomPlayer');
// document.getElementById('response').innerHTML = res.data
// teamButton.addEventListener('mouseover', () => {
//     teamButton.style.backgroundColor = 'blue'
//     teamButton.style.color = "black"
// })


const randomTeam = () => {
    const team = axios.get('/teams').then((res) => {
        document.getElementById('team').textContent = `Team: ${res.data.school}`
        document.getElementById('mascot').textContent = `Mascot: ${res.data.mascot}`
        document.getElementById('location').textContent = `Stadium: ${res.data.location.name}`
        document.getElementById('conference').textContent = `Conference: ${res.data.conference}`
    })
}
const randomStadium = ()=> {
    const stadium = axios.get('/venues').then((res) => {
        document.getElementById('name').textContent = `Stadium Name: ${res.data.name}`
        document.getElementById('city').textContent = `City: ${res.data.city}`
        document.getElementById('state').textContent = `State: ${res.data.state}`
        document.getElementById('capacity').textContent = `Capacity: ${res.data.capacity}`
        document.getElementById('constructed').textContent = `Year Built: ${res.data.year_constructed}`
    })

}
const randomPlayer = ()=> {
    const results = axios.get('/players').then((res) => {
        document.getElementById('joename').textContent = `Your Joe: ${res.data.name}`
        document.getElementById('joeteam').textContent = `Team: ${res.data.team}`
        document.getElementById('position').textContent = `Position: ${res.data.position}`
        document.getElementById('jersey').textContent = `Jersey Number: ${res.data.jersey}`
        document.getElementById('hometown').textContent = `Hometown: ${res.data.hometown}`
    })

}

teamButton.addEventListener('click', randomTeam)
staduimButton.addEventListener('click', randomStadium)
joeButton.addEventListener('click', randomPlayer)


function createTeamCard(team) {
    const teamCard = document.createElement('div')
    teamCard.classList.add('team-card')

    teamCard.innerHTML = `<img alt='team logo' src=${team.logos[1]} class="team-cover-image"/>
    <p class="name">${team.school}</p>`
    
    


    teamContainer.appendChild(teamCard)
}

function displayTeams(arr) {
    teamContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTeamCard(arr[i])}
    }