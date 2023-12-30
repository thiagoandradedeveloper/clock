window.onload = function(){
    
    let hour = document.querySelectorAll(".hour").item(0);
    let minute = document.querySelectorAll(".minute").item(0);
    let second = document.querySelectorAll(".second").item(0);
    let acrescimoHora, acrescimoMinuto = 0;

    setInterval(()=>{

        const dataAtual    = new Date();
        const horaAtual    = dataAtual.getHours();
        const minutoAtual  = dataAtual.getMinutes();
        const segundoAtual = dataAtual.getSeconds();
        
        horas = horaAtual % 12 || 12;

        acrescimoHora   = 0.5 * minutoAtual;
        acrescimoMinuto = 0.1 * segundoAtual;

        hour.style.transform   = `rotate(${(360 / 12 * horas + acrescimoHora)}deg)`;
        minute.style.transform = `rotate(${(360 / 60 * minutoAtual + acrescimoMinuto)}deg)`;
        second.style.transform = `rotate(${(360 / 60 * segundoAtual)}deg)`;

    },1000)
}