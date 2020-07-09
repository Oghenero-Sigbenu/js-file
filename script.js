// Due date
let expiryDate = new Date("Jul 12, 2020 12:00:00").getTime();


let x = setInterval(() => {
    
    // Get curreent date and time
    let present = new Date().getTime();
    
    let duration = expiryDate - present;
    
  let days = Math.floor(duration / (1000 * 60 * 60 * 24));
  let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((duration % (1000 * 60)) / 1000);
    

  document.querySelector(".day").innerHTML = days + 'd'; 
  document.querySelector(".hour").innerHTML = hours + 'h';
  document.querySelector(".mins").innerHTML = minutes + 'm';
  document.querySelector(".sec").innerHTML = seconds + 's';

    if (duration < 0) {
    clearInterval(x);
    let box = document.querySelector(".box");
    let h = document.getElementsByTagName("h5");
    box.style.display= 'none';
    h.style.display= 'none';
    document.querySelector(".show").innerHTML = "It's Sunday";
  }
}, 1000);
