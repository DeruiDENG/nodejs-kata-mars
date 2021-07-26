class Rover {
  private x: number;
  private y: number;
  private direction: Direction;

  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getDirection() {
    return this.direction;
  }
}

enum Direction {
  North,
  South,
  West,
  East,
}

describe("#Mars", () => {
  it("should put the rover to a place", () => {
    const rover = new Rover(1, 2, Direction.North);
    expect(rover.getX()).toEqual(1);
    expect(rover.getY()).toEqual(2);
    expect(rover.getDirection()).toEqual(Direction.North);
  });
});
