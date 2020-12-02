package day2;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Aufgabe1 {
	public static void main(String args[]) {
		
		try {
			File myObj = new File("E:\\.Programme\\workspace\\AdventOfCode\\src\\day2\\passwords.txt");
			Scanner myReader = new Scanner(myObj);
			int valide = 0;
			while (myReader.hasNextLine()) {
				String str = myReader.nextLine();
				String strArray[] = str.split(":");
				String letter = strArray[0].split(" ")[1].trim();
				String passwort = strArray[1].trim();
				String numbers[] = strArray[0].split(" ")[0].split("-");
				String password [] = passwort.split("");
				int count = 0;
				
				for (int i = 0; i < password.length; i++) {
					if (password[i].equals(letter)) {
						count++;
						
					}
				}
				if (Integer.valueOf(numbers[0]) <= count &&  Integer.valueOf(numbers[1]) >= count) {
					valide++;
				}
			}
			myReader.close();
			System.out.println(valide);
		} catch (FileNotFoundException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
		
		

		
	}
}
