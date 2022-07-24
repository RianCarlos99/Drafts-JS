function sendPostCards(amount) {
  console.log('Postcard ' + amount, 'sent!');
  if (amount === 1) {
    console.log('All Postcards sents!');
    return amount;
  }
  else {
    let amountremaining = amount - 1;
    console.log('Call function again.');
    return sendPostCards(amountremaining);
  }
}
sendPostCards(4);
