# COVID-19 RUN!
## Description

Mi primer proyecto se trata de un juego de plataformas. El jugador tiene que atrapar el máximo de elementos posibles para sumar el máximo de puntos, esquivando los obstáculos que irán apareciendo.

## Game rules

- El usuario puede desplazarse arriba y abajo mediante los eventos keydown: arrowUp = desplazará el personaje n pixels hacía arriba y arrowDown = reducirá el height del personaje a la mitad
- El usuario debe recojer la mayor cantidad de elementos positivos posibles para sumar puntos y ganar
- El usuario debe esquivar los obstáculos usando las arrows del teclado para no perder
- El usuario pierde cuando el personaje contacta con un obstáculo tipo "coronavirus"
-- Cuando el usuario pierde:
--- Se muestra la puntuación obtenida
--- Se muestre el botón "Play again"

## Product MVP

Para testear el MVP se requiere:
- Que se inicialize el juego
- Que se cree 1 personaje
- Que el personaje **se mueva arriba**. El usuario controlará los movimientos del personaje (eje y) 
- Que el fondo se mueva hacia la izquierda
- Que aparezca **1 tipo de elementos** que sumen puntos
- Que aparezcan obstaculos de tipo "coronavirus"
- Que si el personaje toca un obstaculo de tipo "coronavirus" se termine el juego

### User Stories
- Como jugador quiero recojer el máximo de elementos para sumar puntos y ganar la partida

## Technologies

El juego se desarrollará usando las tecnologías:

- DOM Manipulation
- Canvas

## Wireframes

![Alt text](https://i.imgur.com/S58VEpP.jpg)
![Alt text](https://i.imgur.com/1RvcSx7.jpg)
![Alt text](https://i.imgur.com/ymUlZls.jpg)
![Alt text](https://i.imgur.com/9wWwPxf.jpg)
![Alt text](https://i.imgur.com/jiINQQw.jpg)

---

# Backlog

## User Stories

- Como jugador quiero recojer el máximo de TODOS los elementos para sumar puntos y ganar la partida
- Como jugador quiero recojer elementos para sumar puntos para subir de nivel e incrementar la dificultad

## Specs

### User Name + Character Selection
Al cargar la página se muestra el nombre del juego, se carga el canvas y el botón "Play Now".
Al hacer click al botón "Play now" el user define su nombre via un input y selecciona el personaje con el que quiere interactuar en función del gender y color de piel.

Una vez seleccionado nombre y personaje, se carga la interfaz del juego, el cual consta de: 

- Background dinámico que corre horizontalmente hacia la izquierda
- Personaje posicionado en x: 10, y: canvas.height/1.5;

### Interaction

- El usuario se puede mover arriba y abajo

### Levels

- El juego consta de 3 niveles.
- A mayor nivel mayor es la velocidad con que transcurre acción y más obstáculos son añadidos al juego.
- El nivel de dificultad incrementa en base a la puntuación.

### Elements

Suman puntos:
- Mascarillas
- Papel de vater

Obstáculos:
- Coronavirus

## Classes

- class Character();
- cass Obstacle();
- class Mask();

## Functions

- updateCanvas(); 
- keyboardControls();
