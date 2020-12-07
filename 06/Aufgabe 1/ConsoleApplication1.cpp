//// basic file operations
//#include <iostream>
//#include <fstream>
//#include <string>
//#include <algorithm>
//using namespace std;
//
//
//int main() {
//	string myText;
//
//	// Read from the text file
//	ifstream MyReadFile("C:\\Users\\Elias\\Desktop\\advent-of-code-2020\\06\\ninja-input.txt");
//	
//	
//	int count = 0;
//	
//
//
//	
//	while (getline(MyReadFile, myText)) {
//		char safe[26] = {};
//		int count1 = 0;
//		for (size_t i = 0; i < myText.length(); i++)
//		{
//			bool found = false;
//			for (size_t ii = 0; ii < 26; ii++)
//			{
//				if (safe[ii] ==  myText[i])
//				{
//					found = true;
//				}
//				
//			}
//			if (found == false)
//			{
//				safe[count1] = myText[i];
//				count1++;
//			}
//		}
//		count += count1;
//	}
//	cout << count;
//	
//	// Close the file
//	MyReadFile.close();
//	/*ifstream infile;
//	infile.open("C:\\Users\\Elias\\Desktop\\advent-of-code-2020\\06\\coal-input.json");
//	string data = infile.getline;
//	cout << data;*/
//}