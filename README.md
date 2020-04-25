# COVID-19 GAME

Al cargar la página se muestra el nombre del juego, se carga el canvas y el botón "Play Now".
Al hacer click al botón "Play now" el user define su nombre via un input y selecciona el personaje con el que quiere interactuar en función del gender y color de piel.

Una vez seleccionado nombre y personaje, se carga la interfaz del juego, el cual consta de: 

- Background dinámico que corre horizontalmente hacia la izquierda
- Personaje posicionado en x: 10, y: canvas.height/1.5;

El usuario debe esquivar los diferentes obstáculos que irán apareciendo y se listan más abajo.

## Technologies

El juego se desarrollará usando las tecnologías:

- DOM Manipulation
- Canvas

## User Interaction

El usuario controlará los movimientos del personaje (eje x / y) mediante los eventos keydown:

- arrowRight = desplazará el personaje n pixels hacia la derecha
- arrowUp = desplazará el personaje n pixels hacía arriba
- arrowDown = se reduce el height del personaje a la mitad

## Levels

- El juego consta de 3 niveles.
- A mayor nivel mayor es la velocidad con que transcurre acción y más obstáculos son añadidos al juego.
- El nivel de dificultad incrementa en base a la puntuación.

## Objetivos y Puntuación

- El usuario debe recojer la mayor cantidad de mascarillas posible
- El usuario debe esquivar los obstáculos añadidos al juego usando las arrows del teclado

## Lógica Win/Loose

- El usuario gana cuando se alcanza la puntuación máxima ¿?
- El usuario pierde cuando el personaje contacta con un objeto tipo "coronavirus"
-- Cuando el usuario pierde:
--- Se muestra la puntuación obtenida
--- Se muestre el botón "Play again"

## Wireframes

![Alt text](https://i.imgur.com/S58VEpP.jpg)
![Alt text](https://i.imgur.com/NeqZy7y.jpg)
![Alt text](https://i.imgur.com/ymUlZls.jpg)
![Alt text](https://i.imgur.com/fYfkuAV.jpg)


## Specs
### Classes

- class Character();
- cass Obstacle();
- class Mask();

## Functions

- updateCanvas(); 
- keyboardControls();
