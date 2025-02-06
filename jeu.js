// Récupérer le canvas et son contexte
const canvas = document.getElementById("snakeCanvas");
const context = canvas.getContext("2d");

// Taille d'une cellule du jeu (ajustée dynamiquement)
let cellSize;

// Initialiser la position du serpent et sa direction
let snake = [{ x: 10, y: 10 }];
let direction = "right";

// Initialiser la position de la nourriture
let food = { x: 5, y: 5 };

// Initialiser le score
let score = 0;
let bestScore = 0;

// Variable pour stocker la boucle de jeu
let gameLoop;

// Fonction pour redimensionner le canvas
function resizeCanvas() {
    const container = document.getElementById("snakeContainer");
    const size = Math.min(container.clientWidth, 500); // Limiter à 500px maximum
    canvas.width = size;
    canvas.height = size;
    cellSize = size / 25; // Ajuster la taille des cellules en fonction du canvas
}

// Redimensionner le canvas au chargement et au redimensionnement de la fenêtre
window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

// Fonction pour dessiner le serpent
function drawSnake() {
    context.fillStyle = "#00FF00";
    snake.forEach((segment) => {
        context.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
    });
}

// Fonction pour dessiner la nourriture
function drawFood() {
    context.fillStyle = "#FF0000";
    context.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);
}

// Fonction pour dessiner le score
function drawScore() {
    document.getElementById("snakeScore").textContent = `Score : ${score}`;
    document.getElementById("snakeBestScore").textContent = `Meilleur Score : ${bestScore}`;
}

// Fonction pour mettre à jour le jeu à chaque frame
function update() {
    // Effacer le canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Mettre à jour la position du serpent en fonction de la direction
    const head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "left":
            head.x--;
            break;
        case "right":
            head.x++;
            break;
    }
    snake.unshift(head);

    // Vérifier si le serpent a mangé la nourriture
    if (head.x === food.x && head.y === food.y) {
        // Générer une nouvelle position pour la nourriture
        food.x = Math.floor(Math.random() * (canvas.width / cellSize));
        food.y = Math.floor(Math.random() * (canvas.height / cellSize));

        // Augmenter le score
        score++;

        // Mettre à jour le meilleur score si nécessaire
        if (score > bestScore) {
            bestScore = score;
        }
    } else {
        // Supprimer la dernière cellule du serpent s'il n'a pas mangé de nourriture
        snake.pop();
    }

    // Vérifier si le serpent a atteint les bords du canvas ou s'est mordu la queue
    if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= canvas.width / cellSize ||
        head.y >= canvas.height / cellSize ||
        hasSelfCollision()
    ) {
        // Arrêter le jeu
        clearInterval(gameLoop);
        // Afficher le score final
        alert(`Game Over! Votre score est de ${score}`);

        // Afficher le bouton de redémarrage
        document.getElementById("snakeRestartButton").style.display = "block";
    }

    // Dessiner le serpent, la nourriture et le score
    drawSnake();
    drawFood();
    drawScore();
}

// Fonction pour vérifier si le serpent s'est mordu la queue
function hasSelfCollision() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

// Fonction pour gérer les événements de touche
function handleKeyPress(event) {
    // Mettre à jour la direction en fonction de la touche pressée
    switch (event.key) {
        case "ArrowUp":
            if (direction !== "down") {
                direction = "up";
            }
            break;
        case "ArrowDown":
            if (direction !== "up") {
                direction = "down";
            }
            break;
        case "ArrowLeft":
            if (direction !== "right") {
                direction = "left";
            }
            break;
        case "ArrowRight":
            if (direction !== "left") {
                direction = "right";
            }
            break;
    }
}

// Fonction pour démarrer le jeu
function startGame() {
    // Réinitialiser les variables
    snake = [{ x: 10, y: 10 }];
    direction = "right";
    score = 0;

    // Masquer le bouton de redémarrage
    document.getElementById("snakeRestartButton").style.display = "none";

    // Redimensionner le canvas avant de démarrer
    resizeCanvas();

    // Démarrer la boucle de jeu
    gameLoop = setInterval(update, 1000 / 8);
}

// Écouter les événements de touche
document.addEventListener("keydown", handleKeyPress);