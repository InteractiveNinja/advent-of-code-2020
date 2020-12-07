// basic file operations
#include <iostream>
#include <fstream>
#include <string>
#include <algorithm>
using namespace std;


int main() {
	string myText;
	string groups[5];
	ifstream MyReadFile("C:\\Users\\Elias\\Desktop\\advent-of-code-2020\\06\\org-ninja-input.txt");

	int groupCount = 0;
	int summe = 0;
	   	 
	while (getline(MyReadFile, myText)) {
		if (myText == ""|| myText == "end")
		{
			bool found = false;
			char check[26] = {};
			int countCheck = 0;
			for (size_t i = 0; i < groupCount; i++)
			{
				string groupText = groups[i];
				for (size_t ii = 0; ii < groupText.length(); ii++)
				{
					for (size_t iii = 0; iii < countCheck; iii++)
					{
						if (check[iii] == groupText[ii])
						{
							found = true;
						}

					}
					if (found == false)
					{
						check[countCheck] = groupText[ii];
						countCheck++;
					}
				}
			}
			for (size_t i = 0; i < countCheck; i++)
			{
				char searchChar = check[i];
				int groupValueCounter = 0;
				for (size_t ii = 0; ii < groupCount; ii++) 
				{
					string groupText = groups[ii];
					for (size_t iii = 0; iii < groupText.length(); iii++)
					{
						if (searchChar == groupText[iii])
						{
							groupValueCounter++;
						}
					}
				}
				/*cout << groupValueCounter << endl;*/
				if (groupValueCounter == groupCount)
				{
					summe++;
				}
			}
			groupCount = 0;
		}
		else {
			groups[groupCount] = myText;
			groupCount++;
		}

		
	}
	cout << summe;
	
}