// Rover object goes here:
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [
    {
      x: 0,
      y: 0,
    },
  ],
};

// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }

  console.log("turnLeft was called!");
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }

  console.log("turnRight was called!");
}

function moveForward(rover) {
  console.log("moveForward was called");
  let proposal;

  switch (rover.direction) {
    case "N":
      proposal = rover.y - 1;
      if (proposal >= 0 && proposal <= 9) {
        if (grid[proposal][rover.x] == " ") {
          grid[rover.y][rover.x] = " ";
          grid[proposal][rover.x] = "R";
          rover.y--;
        } else if (grid[proposal][rover.x] == "*") {
          console.log(
            "STOP!!You can't continue, obstacle in the way, change the route "
          );
        } else {
          console.log(
            "STOP!!You can't continue, other rover is on the way, change the route "
          );
        }
      } else {
        console.log("You can't go outside of the grid mars can be danger");
      }
      break;

    case "E":
      proposal = rover.x + 1;
      if (proposal >= 0 && proposal <= 9) {
        if (grid[rover.y][proposal] == " ") {
          grid[rover.y][rover.x] = " ";
          grid[rover.y][proposal] = "R";
          rover.x++;
        } else if (grid[rover.y][proposal] == "*") {
          console.log(
            "STOP!!You can't continue, obstacle in the way, change the route "
          );
        } else {
          console.log(
            "STOP!!You can't continue, other rover is on the way, change the route "
          );
        }
      } else {
        console.log("You can't go outside of the grid mars can be danger");
      }
      break;

    case "S":
      proposal = rover.y + 1;
      if (proposal >= 0 && proposal <= 9) {
        if (grid[proposal][rover.x] == " ") {
          grid[rover.y][rover.x] = " ";
          grid[proposal][rover.x] = "R";
          rover.y++;
        } else if (grid[proposal][rover.x] == "*") {
          console.log(
            "STOP!!You can't continue, obstacle in the way, change the route "
          );
        } else {
          console.log(
            "STOP!!You can't continue, other rover is on the way, change the route "
          );
        }
      } else {
        console.log("You can't go outside of the grid mars can be danger");
      }
      break;

    case "W":
      proposal = rover.x - 1;
      if (proposal >= 0 && proposal <= 9) {
        if (grid[rover.y][proposal] == " ") {
          grid[rover.y][rover.x] = " ";
          grid[rover.y][proposal] = "R";
          rover.x--;
        } else if (grid[rover.y][proposal] == "*") {
          console.log(
            "STOP!!You can't continue, obstacle in the way, change the route "
          );
        } else {
          console.log(
            "STOP!!You can't continue, other rover is on the way, change the route "
          );
        }
      } else {
        console.log("You can't go outside of the grid mars can be danger");
      }
      break;
  }

  console.log(`the current position is x=${rover.x},y=${rover.y}`);
  let currentPosition = {
    x: rover.x,
    y: rover.y,
  };
  rover.travelLog.push(currentPosition);
}

function moveBackward(rover) {
  console.log("function moveBackward was called");
  let proposal;

  switch (rover.direction) {
    case "N":
      proposal = rover.y + 1;
      if (proposal >= 0 && proposal <= 9) {
        if (grid[proposal][rover.x] == " ") {
          grid[rover.y][rover.x] = " ";
          grid[proposal][rover.x] = "R";
          rover.y++;
        } else if (grid[proposal][rover.x] == "*") {
          console.log(
            "STOP!!You can't continue, obstacle in the way, change the route "
          );
        } else {
          console.log(
            "STOP!!You can't continue, other rover is on the way, change the route "
          );
        }
      } else {
        console.log("You can't go outside of the grid mars can be danger");
      }
      break;

    case "E":
      proposal = rover.x - 1;
      if (proposal >= 0 && proposal <= 9) {
        if (grid[rover.y][proposal] == " ") {
          grid[rover.y][rover.x] = " ";
          grid[rover.y][proposal] = "R";
          rover.x--;
        } else if (grid[rover.y][proposal] == "*") {
          console.log(
            "STOP!!You can't continue, obstacle in the way, change the route "
          );
        } else {
          console.log(
            "STOP!!You can't continue, other rover is on the way, change the route "
          );
        }
      } else {
        console.log("You can't go outside of the grid mars can be danger");
      }
      break;

    case "S":
      proposal = rover.y - 1;
      if (proposal >= 0 && proposal <= 9) {
        if (grid[proposal][rover.x] == " ") {
          grid[rover.y][rover.x] = " ";
          grid[proposal][rover.x] = "R";
          rover.y--;
        } else if (grid[proposal][rover.x] == "*") {
          console.log(
            "STOP!!You can't continue, obstacle in the way, change the route "
          );
        } else {
          console.log(
            "STOP!!You can't continue, other rover is on the way, change the route "
          );
        }
      } else {
        console.log("You can't go outside of the grid mars can be danger");
      }
      break;

    case "W":
      proposal = rover.x + 1;
      if (proposal >= 0 && proposal <= 9) {
        if (grid[rover.y][proposal] == " ") {
          grid[rover.y][rover.x] = " ";
          grid[rover.y][proposal] = "R";
          rover.x++;
        } else if (grid[rover.y][proposal] == "*") {
          console.log(
            "STOP!!You can't continue, obstacle in the way, change the route "
          );
        } else {
          console.log(
            "STOP!!You can't continue, other rover is on the way, change the route "
          );
        }
      } else {
        console.log("You can't go outside of the grid mars can be danger");
      }
      break;
  }

  console.log(`the current position is x=${rover.x},y=${rover.y}`);
  let currentPosition = {
    x: rover.x,
    y: rover.y,
  };
  rover.travelLog.push(currentPosition);
}

function command(rover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    if (order == "f" || order == "b" || order == "r" || order == "l") {
      switch (order) {
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
      }
    } else {
      console.log(`${order} is not is not an allowed command `);
    }
  }
  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(
      `Movement ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`
    );
  }
}

let grid = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

//Obstacles "*"
grid[5][5] = "*";
grid[4][5] = "*";
grid[3][5] = "*";
grid[5][6] = "*";
grid[4][6] = "*";
grid[3][6] = "*";

grid[9][3] = "*";
grid[8][3] = "*";
grid[7][3] = "*";

//Other rovers "O"

grid[9][4] = "O";
grid[8][4] = "O";

command(rover, "bbbbbbbbbb");
console.log(grid.join("\n") + "\n\n");
