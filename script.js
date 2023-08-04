// Selectionner les élément HTML
let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

// Quand on click sur le bouton start/restart
btn.onclick = function () {
    let score = 0;
    let time = 10;
    container.innerHTML = "";

    // Executer la function showtarget tous les 1seconde
    let interval = setInterval(function showtarget() {
        // création de la cible
        let target = document.createElement('img');
        target.id = "target";
        target.src = "photos.png";
        container.appendChild(target);
        target.style.top = Math.random() * (400 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (500 - target.offsetWidth) + 'px';

        // Faire disparaitre la cible
        setTimeout(function () {
            target.remove();
        }, 1500)

        // Quand on click sur le target
        target.onclick = function () {
            score += 1;
            target.style.display = 'none';
        }
        time -= 1;


        // Afficher les infos
        scoreContainer.innerHTML = `Score: ${score}`
        timeContainer.innerHTML = `Temps: ${time}`

        // Fin du jeu quand le temp est écoulé
        if (time == 0) {
            clearInterval(interval);
            container.innerHTML = "Le jeu est terminé"
        }
    }, 1000);



}