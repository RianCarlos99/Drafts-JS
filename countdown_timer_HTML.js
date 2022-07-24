import Countdown from './countdown.js';

const TempoParaOnatal = new Countdown('24 December 2021 23:59:59')
const TempoParaAniversario = new Countdown('21 October 2022 23:59:59')
const TempoReal = document.querySelector('.time')

setInterval(() => {
TempoReal.innerText = TempoParaAniversario.total
}, 1000);



