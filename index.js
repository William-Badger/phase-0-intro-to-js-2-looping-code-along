// Code your solutions in this file
const surprise = ['surprise'];
const guests = ['Lisa', 'Kaitlin', 'Jan'];
function writeCards(guests, surprise) {
    let message = []
    for (let a = 0; a < guests.length; a++) {
        console.log(message.push(`Thank you, ${guests[a]}, for the wonderful ${surprise} gift!`));
    }
    return message;
}

function countDown() {
for (let countDown = 10; countDown >= 0; countDown--) {
    console.log(countDown);
}
}