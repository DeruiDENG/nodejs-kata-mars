class Rover {
  private x: number;
  private y: number;
  private direction: Direction;

  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  getDirection() {
    return this.direction;
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }

  private forward() {
    if (this.direction === Direction.North) {
      this.y--;
    }
  }

  sendCommand(command: Command) {
    switch (command) {
      case Command.Forward: {
        this.forward();
        break;
      }
      default:
        throw new Error(`Unsupported command: ${command}`);
    }
  }
}

enum Direction {
  North,
  South,
  West,
  East,
}

enum Command {
  Forward = "f",
}

describe("#Mars", () => {
  it("should put the rover to a place", () => {
    const rover = new Rover(1, 2, Direction.North);
    expect(rover.getPosition()).toEqual({ x: 1, y: 2 });
    expect(rover.getDirection()).toEqual(Direction.North);
  });

  it("should command the rover with forward", () => {
    const rover = new Rover(1, 2, Direction.North);
    rover.sendCommand(Command.Forward);
    expect(rover.getPosition()).toEqual({ x: 1, y: 1 });
    expect(rover.getDirection()).toEqual(Direction.North);
  });
});
