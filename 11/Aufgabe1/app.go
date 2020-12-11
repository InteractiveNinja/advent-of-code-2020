package main

import (
	"io/ioutil"
	"strings"
)

func main() {
	data := dotheStuff("test.txt")
	var linestring string
	for i := 0; i < len(data); i++ {
		if i < len(data) {
			linestring += data[i]
			continue
		}
		linestring += data[i] + "\n"
	}
	ioutil.WriteFile("test.txt", []byte(linestring), 02)
}

func dotheStuff(filename string) []string {
	data, _ := ioutil.ReadFile(filename)
	lines := strings.Split(string(data), "\n")
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
			if left && right && above && below && leftup && leftdown && rightdown && rightup {
				counter++
				newchars += "#"

			} else {
				newchars += "L"
			}
		}
		updatedline = append(updatedline, newchars)
	}
	return updatedline
}

func checkLeftRight(line []string, index int) (bool, bool) {
	left := false
	right := false
	if index-1 < 0 {
		left = true
	}
	if index+1 >= len(line) {
		right = true
	}
	if !left {
		if line[index-1] != "#" {
			left = true
		}
	}
	if !right {
		if line[index+1] != "#" {
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
	if linesindex-1 < 0 {
		leftup = true
		rightup = true
	}
	if linesindex+1 >= len(lines) {
		leftdown = true
		rightdown = true
	}

	if !leftup && !rightup {
		chars := strings.Split(lines[linesindex-1], "")
		if index-1 < 0 {
			leftup = true
		} else {
			if chars[index-1] != "#" {
				leftup = true
			}
		}
		if index+1 > len(chars) {
			rightup = true
		} else {
			if chars[index+1] != "#" {
				rightup = true
			}
		}
	}

	if !rightdown && !leftdown {
		chars := strings.Split(lines[linesindex+1], "")
		if index-1 < 0 {
			leftdown = true
		} else {
			if chars[index-1] != "#" {
				leftdown = true
			}
		}
		if index+1 >= len(chars) {
			rightdown = true
		} else {
			if chars[index+1] != "#" {
				rightdown = true
			}
		}
	}

	return leftup, rightup, leftdown, rightdown
}
func checkAboveBelow(lines []string, linesindex int, index int) (bool, bool) {
	above := false
	below := false
	if linesindex-1 < 0 {
		above = true
	}
	if linesindex+1 >= len(lines) {
		below = true
	}
	if !above {
		char := strings.Split(lines[linesindex-1], "")[index]

		if char != "#" {
			above = true
		}
	}
	if !below {
		char := strings.Split(lines[linesindex+1], "")[index]
		if char != "#" {
			below = true
		}
	}
	return above, below
}
