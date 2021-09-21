

let teamButton = document.getElementById('random-team');
let staduimButton = document.getElementById('random-venue');
let joeButton = document.getElementById('randomPlayer');
// document.getElementById('response').innerHTML = res.data
// teamButton.addEventListener('mouseover', () => {
//     teamButton.style.backgroundColor = 'blue'
//     teamButton.style.color = "black"
// })


const randomTeam = () => {
    const results = axios.get('/teams').then((res) => {
        console.log(res.data)
        document.getElementById('response').innerHTML = res.data
    })
}
const randomStadium = ()=> {
    const results = axios.get('/venues').then((res) => {
        console.log(res.data)
        document.getElementById('response').innerHTML = res.data
        const myJSON = JSON.stringify(res.data);
    })

}
const randomPlayer = ()=> {
    const results = axios.get('/players').then((res) => {
        console.log(res.data)
        document.getElementById('response').innerHTML = res.data
        const myJSON = JSON.stringify(res.data);
    })

}

teamButton.addEventListener('click', randomTeam)
staduimButton.addEventListener('click', randomStadium)
joeButton.addEventListener('click', randomPlayer)
