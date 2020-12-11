package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func main() {

	// repeat()
	doallotherstuff()
}

func doallotherstuff() {
	for i := 0; i < 100; i++ {
		repeat()
	}
	counter := 0
	data, _ := ioutil.ReadFile("test.txt")
	lines := strings.Split(string(data), ",")
	for i := 0; i < len(lines); i++ {
		line := strings.Split(lines[i], "")
		for ii := 0; ii < len(line); ii++ {
			if line[ii] == "#" {
				counter++
			}
		}
	}
	fmt.Println(counter)
}

func repeat() {
	data := dotheStuff("test.txt")
	var linestring string = ""
	for i := 0; i < len(data); i++ {
		if i+1 == len(data) {
			linestring += data[i]
			continue
		}
		linestring += data[i] + ","
	}
	ioutil.WriteFile("test.txt", []byte(linestring), 02)
}

func dotheStuff(filename string) []string {
	data, _ := ioutil.ReadFile(filename)
	lines := strings.Split(string(data), ",")
	updatedline := []string{}
	counter := 0

	for i := 0; i < len(lines); i++ {
		chars := strings.Split(lines[i], "")
		newchars := ""
		for ii := 0; ii < len(chars); ii++ {
			if chars[ii] != "L" && chars[ii] != "#" {
				newchars += chars[ii]
				continue
			}
			left, right := checkLeftRight(chars, ii)
			above, below := checkAboveBelow(lines, i, ii)
			leftup, rightup, leftdown, rightdown := upcheckLeftRight(lines, i, ii)
			counter = checkBools(left, right, above, below, leftup, leftdown, rightdown, rightup)
			if chars[ii] == "L" || chars[ii] == "#" {
				if chars[ii] == "#" && counter > 3 {
					newchars += "L"
					chars[ii] = "L"
				} else if chars[ii] == "L" && counter == 0 {

					newchars += "#"
					chars[ii] = "#"
				} else {
					newchars += chars[ii]

				}
			}

			// fmt.Println(chars[ii], ii+1, counter, "left", left, "right", right, "above", above, "below", below, "leftup", leftup, "leftdown", leftdown, "rightdown", rightdown, "rightup", rightup)

		}
		nstr := ""
		for ii := 0; ii < len(chars); ii++ {
			nstr += chars[ii]
		}
		// lines[i] = nstr
		updatedline = append(updatedline, newchars)
	}

	return updatedline
}

func checkBools(left bool, right bool, above bool, below bool, leftup bool, leftdown bool, rightdown bool, rightup bool) int {
	counter := 0
	if left {
		counter++
	}
	if right {
		counter++
	}
	if above {
		counter++
	}
	if below {
		counter++
	}
	if leftup {
		counter++
	}
	if leftdown {
		counter++
	}
	if rightdown {
		counter++
	}
	if rightup {
		counter++
	}
	return counter

}

func checkLeftRight(line []string, index int) (bool, bool) {
	left := false
	right := false
	if index-1 > 0 {
		if line[index-1] == "#" {
			left = true
		}
	}

	if index+1 < len(line) {
		if line[index+1] == "#" {
			right = true
		}
	}

	return left, right
}
func upcheckLeftRight(lines []string, linesindex int, index int) (bool, bool, bool, bool) {
	leftup := false
	rightup := false
	leftdown := false
	rightdown := false
	if linesindex-1 > 0 {
		chars := strings.Split(lines[linesindex-1], "")
		if index-1 > 0 {
			if chars[index-1] == "#" {
				leftup = true

			}
		}
		if index+1 < len(chars) {
			if chars[index+1] == "#" {
				rightup = true
			}
		}

	}
	if linesindex+1 < len(lines) {

		chars := strings.Split(lines[linesindex+1], "")

		if index-1 > 0 {
			if chars[index-1] == "#" {
				leftdown = true

			}
		}
		if index+1 < len(chars) {
			if chars[index+1] == "#" {
				rightdown = true
			}
		}

	}

	return leftup, rightup, leftdown, rightdown
}
func checkAboveBelow(lines []string, linesindex int, index int) (bool, bool) {
	above := false
	below := false
	if linesindex-1 > 0 {
		// if linesindex-1 == 0 {
		// 	index = index - 1
		// }

		char := strings.Split(lines[linesindex-1], "")[index]

		if char == "#" {
			above = true
		}
	}
	if linesindex+1 < len(lines) {
		char := strings.Split(lines[linesindex+1], "")[index]
		if char == "#" {

			below = true
		}
	}
	return above, below
}
