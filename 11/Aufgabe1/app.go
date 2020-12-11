package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func main() {
	data, _ := ioutil.ReadFile("test2.txt")
	lines := strings.Split(string(data), "\n")
	updatedline := []string{}
	// counter := 0
	for i := 0; i < len(lines); i++ {
		chars := strings.Split(lines[i], "")
		newchars := ""
		for ii := 0; ii < len(chars); ii++ {
			if chars[ii] != "L" {
				newchars += chars[ii]
				continue
			}

			left, right := checkLeftRight(chars, ii)
			above, below := checkAboveBelow(lines, i, ii)
			leftup, rightup, leftdown, rightdown := upcheckLeftRight(lines, i, ii)
			fmt.Println(left, right, above, below, leftup, rightup, rightdown, leftdown)
			if left && right && above && below && leftup && leftdown && rightdown && rightup {
				// counter++
				newchars += "#"

			} else {
				newchars += chars[ii]
			}
		}
		updatedline = append(updatedline, newchars)
	}
	// fmt.Println(counter)
	for i := 0; i < len(updatedline); i++ {
		fmt.Println(updatedline[i])
	}
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
			leftup = true
		} else {
			if chars[index-1] != "#" {
				leftup = true
			}
		}
		if index+1 >= len(chars) {
			rightup = true
		} else {
			if chars[index+1] != "#" {
				rightup = true
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