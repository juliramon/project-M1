# COVID19 RUN!
## Descripción

Mi primer proyecto se trata de un juego de plataformas. El jugador tiene que atrapar el máximo de elementos posibles para sumar el máximo de puntos, esquivando los obstáculos que irán apareciendo.

## Reglas del juego

- El usuario puede desplazarse arriba y abajo mediante los eventos keydown: arrowUp = desplazará el personaje n pixels hacía arriba y arrowDown = reducirá el height del personaje a la mitad
- El usuario debe recojer la mayor cantidad de elementos positivos posibles para sumar puntos y ganar
- El usuario debe esquivar los obstáculos usando las arrows del teclado para no perder
- El usuario pierde cuando el personaje contacta con un obstáculo tipo "coronavirus"
-- Cuando el usuario pierde:
--- Se muestra la puntuación obtenida
--- Se muestre el botón "Play again"

## MPV - User stories

Para testear el MVP se requiere:
- Que se inicialize el juego
- Que se cree 1 personaje
- Que el personaje **se mueva arriba**. El usuario controlará los movimientos del personaje (eje y) 
- Que el fondo se mueva hacia la izquierda
- Que aparezca **1 tipo de elementos** que sumen puntos
- Que aparezcan obstaculos de tipo "coronavirus"
- Que si el personaje toca un obstaculo de tipo "coronavirus" se termine el juego

### User Stories
- Como jugador quiero poder saltar (arrowUp) para esquivar los obstáculos
- Como jugador quiero recojer el máximo de elementos para sumar puntos y ganar la partida
- Como jugador, si toco un obstaculo de tipo "coronavirus" se tiene que terminar el juego

## Backlog

Al cargar la página se muestra el nombre del juego, se carga el canvas y el botón "Play Now".

### User Stories

- Como jugador, quiero poder definir mi nombre
- Como jugador quiero poder seleccionar el personaje con el que jugaré
- Como jugador quiero poder saltar (arrowUp) y agacharme (arrowDown) para esquivar los obstáculos
- Como jugador quiero recojer el máximo de elementos para sumar puntos y ganar la partida
- Como jugador quiero sumar puntos para subir de nivel
- Como jugador quiero subir de nivel para incrementar la dificultad
- Como jugador, si pierdo el juego, quiero ver el total de puntos que he hecho

## Links

### Kanban
Jira: https://juli-ironhack.atlassian.net/secure/RapidBoard.jspa?projectKey=PM&rapidView=1&atlOrigin=eyJpIjoiNmE5MWU1NzE2ZWM5NDdjZGJjOGQ2NTlmOTZkZGI4OGQiLCJwIjoiaiJ9

### Git
Repositorio: https://github.com/juliramon/project-M1

### Slides

---

## Wireframes

![Alt text](https://i.imgur.com/S58VEpP.jpg)
![Alt text](https://i.imgur.com/1RvcSx7.jpg)
![Alt text](https://i.imgur.com/ymUlZls.jpg)
![Alt text](https://i.imgur.com/9wWwPxf.jpg)
![Alt text](https://i.imgur.com/jiINQQw.jpg)

## Technologies

El juego se desarrollará usando las tecnologías:

- DOM Manipulation
- Canvas