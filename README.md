# Cars CSV Chart

I made this project to practice:

* Handling of CSV data with JS.
* Asynchronous functions and promises.
* Chart JS library.
* While loop.

This program receives data from a CSV local file and makes a graph comparing it's data.

In this case, the CSV file contains information about a list of cars and their characteristics. The JS code takes from the CSV file the name of a car and it's horsepower value at random. It does so 5 times. With these 5 entries it creates a comparative graph using the Chart JS library.

JavaScript file:

The first asynchronous function in line 3 called "chartIt" contains the code given from the Chart JS Library. The key aspect in this function is the way it receives the information needed to make the chart. In line 4 I called the getRandomCarData that contains the data I want to use and, in line 9 and 12, I specify the variables that the charIt function needs.

In order to use the data from the CSV file, I created the "getRandomCarData" function.

I get the data by using the fetch method in line 66. However, JavaScript doesn't understand the format that the data has so I need to use the "text" method to make it comprehensible for JavaScript. 

Now that I can use the data, I have to divide it into different elements of an array for each car. I do so in line 71 by using the "split" method. Then, in line 80 I convert those elements into an array and push them into another array called carsArray. Therefore, I end up with a carsArray that has in it an array for each different car and it's elements are the characteristics of them. 

The getRandomNumber function in line 73 returns a random number from 0 to 406, exactly the amount of cars that the CSV file contains. In the while loop on line 88 I include 7 random numbers into an array called "validRandomIndex". This numbers will represent 7 cars that are in the carsArray. In order to not get repeated numbers, I created an if clause in line 91. Though, not all of those cars have their horsepower figure defined, so if their 4th element is equal to 0, that number cannot be added to the validRandomIndex array. 

Then, in line 102 I use the "map" method to convert the numbers in the validRandomIndex array into their corresponding array within the carsArray.

Finally, I create the model and horsePower variables to specify which elements I will be using to make the chart (the car name and it's horsepower) and return them.