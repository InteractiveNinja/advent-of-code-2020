using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;


namespace ConsoleApp1
{
    class Program
    {


        static void Main(string[] args)
        {
            int counterCoal = 0;
            int counterNinja = 0;
            using (StreamReader reader = File.OpenText("file.json"))
            {
                JArray o = (JArray)JToken.ReadFrom(new JsonTextReader(reader));
                // do stuff
                
                for (int i = 0; i < o.Count; i++)
                {
                    if (Check1((String)o[i]["byr"])&& Check1((String)o[i]["iyr"])&& Check1((String)o[i]["eyr"]) && Check1((String)o[i]["hgt"]) && Check1((String)o[i]["hcl"]) && Check1((String)o[i]["ecl"])&& Check1((String)o[i]["pid"]))
                    {
                        if (birthYear((String)o[i]["byr"]) && iyrYear((String)o[i]["iyr"]) && eyrYear((String)o[i]["eyr"]) && hgtYear((String)o[i]["hgt"]) && hclYear((String)o[i]["hcl"]) && eclYear((String)o[i]["ecl"]) && pidYear((String)o[i]["pid"]))
                            counterCoal++;
                    }
                }
            }
            using (StreamReader reader = File.OpenText("ninja_input.json"))
            {
                JArray o = (JArray)JToken.ReadFrom(new JsonTextReader(reader));
                // do stuff

                for (int i = 0; i < o.Count; i++)
                {
                    if (Check1((String)o[i]["byr"]) && Check1((String)o[i]["iyr"]) && Check1((String)o[i]["eyr"]) && Check1((String)o[i]["hgt"]) && Check1((String)o[i]["hcl"]) && Check1((String)o[i]["ecl"]) && Check1((String)o[i]["pid"]))
                    {
                        if (birthYear((String)o[i]["byr"]) && iyrYear((String)o[i]["iyr"]) && eyrYear((String)o[i]["eyr"]) && hgtYear((String)o[i]["hgt"]) && hclYear((String)o[i]["hcl"]) && eclYear((String)o[i]["ecl"]) && pidYear((String)o[i]["pid"]))
                            counterNinja++;
                    }
                }
            }
            Console.WriteLine("coal number: " + counterCoal);
            Console.WriteLine("ninja number: " + counterNinja);
            Console.ReadKey();
        }

        public static Boolean Check1(String value)
        {
            if (String.IsNullOrEmpty(value)) return false;
            return true;
        }
        public static Boolean birthYear(String value)
        {
            int newValue = Int32.Parse(value);
            if (value.Length == 4 && newValue >= 1920 && newValue <=2002)
            {
                return true;
            }
            return false;
        }

        public static Boolean iyrYear(String value)
        {
            int newValue = Int32.Parse(value);
            if (value.Length == 4 && newValue >= 2010 && newValue <= 2020)
            {
                return true;
            }
            return false;
        }
        public static Boolean eyrYear(String value)
        {
            int newValue = Int32.Parse(value);
            if (value.Length == 4 && newValue >= 2020 && newValue <= 2030)
            {
                return true;
            }
            return false;
        }
        public static Boolean hgtYear(String value)
        {
            if (value.Contains("cm"))
            {
                String cleanString = "";
                for (int i = 0; i < value.Length; i++)
                {
                    if (int.TryParse("" + value[i], out int n))
                    {
                        cleanString += value[i];
                    }
                }
                int newValue = Int32.Parse(cleanString);
                if (newValue >= 150 && newValue <= 193)
                {
                    return true;
                }
            }
            if (value.Contains("in"))
            {
                String cleanString = "";
                for (int i = 0; i < value.Length; i++)
                {
                    if (int.TryParse("" + value[i], out int n))
                    {
                        cleanString += value[i];
                    }
                }
                int newValue = Int32.Parse(cleanString);
                if (newValue >= 59 && newValue <= 76)
                {
                    return true;
                }
            }
            return false;
        }
        public static Boolean hclYear(String value)
        {
            int counter = 0;
            if (value.Length == 7 && value[0] == '#')
            {
                for (int i = 1; i < value.Length; i++)
                {
                    if (char.IsDigit(value[i]))
                    {
                        counter++;
                    }
                    else
                    {
                        switch (value[i])
                        {
                            case 'a':
                            case 'b':
                            case 'c':
                            case 'd':
                            case 'e':
                            case 'f': counter++; break;
                            default:
                                break;
                        }
                    }
                }
                if (counter == 6)
                {
                    return true;
                }
            }
            
            return false;
        }
        public static Boolean eclYear(String value)
        {
            
            if (value == "amb" || value == "blu" || value == "brn" || value == "grn" || value == "gry" || value == "hzl" || value == "oth")
            {
                return true;
            }
            return false;
        }
        public static Boolean pidYear(String value)
        {
            int counter = 0;
            if (value.Length == 9)
            {
                for (int i = 0; i < value.Length; i++)
                {
                    if (char.IsDigit(value[i]))
                    {
                        counter++;
                    }
                }
                if (counter == 9)
                {
                    return true;
                }
            }
            return false;
        }
    }
    
}
