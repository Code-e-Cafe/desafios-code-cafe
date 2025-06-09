
const input =  document.querySelector('#input-nome')

/* pega o conteúdo de texto que está escrito no input */
const getInputName = () => {
    return input.value
}

/* cria um novo elemento li com um nome escrito  */
const newParticipant = (name) => {
    const participant = document.createElement('li')
    const participantName = document.createElement('p')
    participant.appendChild(participantName)
    participantName.textContent = name
    return participant
}

/*  adiciona um novo participante na lista se houver um algo escrito no input */
const addParticipant = () => {
    const name = getInputName()
    if(!name) return
    const participant = newParticipant(name)
    const participantsList = document.querySelector('#participantes')
    participantsList.appendChild(participant)
    input.value = ''
}

/*   pega a quantidade de participantes na lista  */
const getAllParticipants = () => {
    const participantsList = document.querySelector('#participantes')
    const participants = participantsList.querySelectorAll('li')
    return participants.length
}

/* gera um numéro aletório entre zero e max-1 */
const randomNumberGenerator = (max) => {
    return Math.floor(Math.random() * max )
}

/* retorna o elemento do vencedor do sorteio */
const getWinner = (index) => {
    const participantsList = document.querySelector("#participantes");
	const participants = participantsList.querySelectorAll("li");

    return participants[index]
}

/* sorteia um ganhador entre uma lista de participantes */
const sortear = () => {
    const numberOfParticipants = getAllParticipants()
    const winnerIndex = randomNumberGenerator(numberOfParticipants)
    const winner = getWinner(winnerIndex)
    const winnerName = winner.textContent
    const winnerElement = document.querySelector('#vencedor')
    winnerElement.textContent = winnerName
}
