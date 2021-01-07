OFFSETS = [(-1,-1),(-1,0),(-1,1) ,(0,-1),(0,1),(1,-1) ,(1,0),(1,1)]

def load_data():
    with open('input.txt') as file:
        return [list(line.strip()) for line in file]

def occupied_1(col,row):
    occupied = -1 * int(grid[row][col] == '#')
    for dx in range(-1,2):
        for dy in range(-1,2):
            xp, yp = col + dx, row + dy
            if 0 <= xp < len(grid[0]) and 0 <= yp <len(grid):
                occupied += int(grid[yp][xp]== '#')
    return occupied

def occupied_2(col, row):
    adjacent = 0
    for dy,dx in OFFSETS:
        step = 1
        while True:
            y = row + step * dy
            x = col + step * dx
            if y < 0 or x < 0:
                break
            else:
                try:
                    seat = grid[y][x]
                except IndexError:
                    break
            if seat == "#":
                adjacent += 1
                break
            elif seat == "L":
                break
            step += 1
        return adjacent

def round(adjacent,func):+
    new = []
    last = False
    for y in range(len(grid)):
        new.append(list(" " * len(grid[0])))
        for x in range(len(grid[0])):
            new[y][x] = grid[y][x]
            occupied = func(x,y)
            if grid[y][x] == 'L' and occupied == 0:
                new[y][x]= '#'
                last = True
            elif grid[y][x] == '#' and occupied >= adjacent:
                new[y][x] = 'L'
                last = True
    return new, last



grid = load_data()
change = True
while change:
    grid, change = round(4,occupied_1)
print(sum(seat.count('#') for seat in grid))

grid = load_data()
change = True
while change:
    grid, change = round(5,occupied_2)
print(sum(seat.count('#') for seat in grid))