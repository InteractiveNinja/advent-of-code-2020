with open('ninja-input.txt') as file:
    code = [[cmd, int(val)] for cmd, val in
    [line.strip().split() for line in file]]

def run():
    seen = set()
    acc = pointer = terminated = 0
    while not terminated and not pointer in seen:
        seen.add(pointer)
        cmd,val = code[pointer]
        if cmd == 'acc':
            acc += val
        elif cmd == 'jmp':
            pointer +=(val -1)
        pointer += 1
        terminated = pointer >= len(code)
    return terminated, acc


print(run()[1])

complement = {"nop":"jmp","jmp":"nop"}

for idx, (cmd,val) in enumerate(code):
    if cmd != 'acc':
        code[idx][0] = complement[cmd]
        terminated, accu = run()
        if terminated:
            print(accu)
            break
        code[idx][0] = cmd