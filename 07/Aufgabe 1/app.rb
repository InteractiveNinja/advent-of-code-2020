file = File.open("../tool/rules2Json/rules.json")
require "json"

json = JSON.parse(file.read)


founds = []
counter = 0
for line in json do
    name = line["name"]
    bags = line["bags"]
    if(bags.include?("shinygold") && !founds.include?(name))
        founds.append(name)
        counter += 1
    end
end

# Faule Lösung um einen mehrfache verschachtlung zu simulieren
100.times do
for line in json do
    name = line["name"]
    bags = line["bags"]
    for color in founds do
        if(bags.include?(color) && !founds.include?(name) )
            founds.append(name)
        end
    end
end
end
puts founds.length











