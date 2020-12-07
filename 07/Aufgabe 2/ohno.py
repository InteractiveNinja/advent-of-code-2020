import re

bags = {}

with open('C:\\Users\\gabri\\Desktop\\advent-of-code-2020\\07\\tool\\rules2Json\\coal.txt') as file:
    for line in file:
        bag, sub = line.strip().split(" bags contain ")
        bags[bag] = []
        if sub == "no other bags." : continue
        for subbag in [bag.strip() for bag in sub.split(',')]:
            num,typ = re.match(r'(\d+) (.+) bag.*', subbag).groups()
            bags[bag].append((typ,int(num)))


def count_2(bag):
    return 1 + sum(n * count_2(sub) for sub, n in bags[bag])
print("I failed ): , ", count_2('shiny gold') -1)