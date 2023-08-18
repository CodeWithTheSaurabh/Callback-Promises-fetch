// Double using Callback -:
// Write a function that takes an array of integer and a callback function , and return a new array
// where each element is doubled using the callback.

function makeDouble(arr, callback) {
    const doublearr = arr.map((num) => {
      return callback(num);
    });
    return doublearr;
  }
  
  function callbackFunction(num) {
    return num * 2;
  }
  
  const arr = [12, 2, 13, 15];
  console.log(makeDouble(arr, callbackFunction));
  
  // Output -> [ 24, 4, 26, 30 ]
  //----------------------------------------------------------------------------------------------------
  
  // String Manipulation -:
  // Write a function "manipulatString" that takes in a string and convert the character to uppercase
  // letter. The function should return a callback function "logString" that logs the senetence. The
  // Manipulated string is :along with the manipulated string or new string to the console.
  
  function manipulatString(inputString, callback) {
    const manipulatedString = inputString.toUpperCase();
    callback(manipulatedString);
  }
  
  function logString(manipulatedString) {
    console.log(`The manipulated string is : ${manipulatedString}`);
  }
  
  manipulatString("Hello world", logString);
  
  // Expected output : The manipulated string is : HELLO WORLd
  
  //-----------------------------------------------------------------------------------------------------------
  /*
  Write a JavaScript function called ageInDays that accepts an object containing a person's first 
  name, last name, and age in years as input. The function should concatenate the first and last 
  name into a single string and store it in a variable called fullName. It should then calculate 
  the person's age in days and store it in a variable called ageInDays.
  
  The ageInDays function should then return a callback function that logs a message to the console.
   The message should include the person's full name and age in days, and should be in the format: 
   "The person's full name is [full name] and their age in days is [age in days]."
  
   Note that the ageInDays function should not log the message to the console directly, but should
   instead return a callback function that can be used to log the message at a later time.
  */
  
  const person = {
    fname: "Sourabh",
    lname: "Sharma",
    Age: 22,
  };
  
  function ageInDays(person, callback) {
    const fullName = person.fname + " " + person.lname;
    const ageindays = person.Age * 365;
    callback(fullName, ageindays);
  }
  
  function logResult(fullName, ageindays) {
    console.log(
      `The person fullName is : ${fullName} and their age in days is : ${ageindays}`
    );
  }
  
  ageInDays(person, logResult);
  // Output -> The person fullName is : Sourabh Sharma and their age in days is : 8030
  
  //-------------------------------------------------------------------------------------------------
  /*
  4. Arrange in alphabetical order.
  Write a program that accepts a list of objects representing books [ title, author, and year] and
  a callback function. The program should use the map function to create a new list containing
  only the titles of the books, and then pass this new list to the callback function. The
  callback function should then log the titles to the console in alphabetical order.*/
  
  let obj = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "The Catcher in the Rye",
      author: " J.D. Salinger",
      year: 1951,
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
    },
    {
      title: "The Habbit",
      author: "J.R.R. Tolkien",
      year: 1937,
    },
  ];
  
  function inputListOfBooks(obj, callback) {
    const newList = obj.map((book) => {
      return book.title; // return the title of each book
    });
    callback(newList);
  }
  
  function logTittle(newList) {
    newList.sort();
    newList.join(",");
    console.log(newList); // this will create a new array
  }
  
  inputListOfBooks(obj, logTittle);
  
  /* 
  // expected output -> 
  
  [
    'The Catcher in the Rye',
    'The Habbit',
    'The Lord of the Rings',
    'To Kill a Mockingbird'
  ] 
  
  */
  
  //------------------------------------------------------------------------------------------------
  
  /*
  5. Greeting Promise.
  You need to write a function that takes a name as input and returns a promise that resolves with 
  a greeting message. The function should greet the person using their name, with a message in the
  format "Hello, {name}!".For example, if the input to the function is "Mithun", the promise
  should resolve with the string "Hello, Mithun!".
  */
  
  function takeNameAsInput(name) {
    return new Promise((resolve, reject) => {
      resolve(`Hello , ${name} !`);
    });
  }
  
  takeNameAsInput("sourabh").then((message) => {
    console.log(message);
  });
  
  // Output -> Hello, sourabh!
  
  //--------------------------------------------------------------------------------------------------
  /*
  6. Fetch results asynchronously.
  Write a function that asynchronously fetches data from an API
  [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.
  */
  
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (value) {
      console.log(value);
    });
  // Output -> { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  
  // You can also done this with method -:>
  /*
  async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const value = await response.json();
    console.log(value)
  }
  fetchData();
  */
  
  // Output will be the same
  
  //---------------------------------------------------------------------------------------------------
  
  /*
  7. Multiple requests.
  Create an asynchronous function that retrieves data from two different API endpoints: 
  "https://jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". 
  The first API returns a to-do task, while the second API provides post details. The function 
  should combine the results from both APIs and log them as an object, where the keys are "todo"
  and "post", and the corresponding values are the responses from the respective APIs.
  */
  
  async function retriveDataFromAPi() {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  
    const value1 = await response1.json();
    const value2 = await response2.json();
  
    const combineAPI = {
      // here we combined two different api
      todo: value1,
      post: value2,
    };
    console.log(combineAPI);
  }
  retriveDataFromAPi();
  
  // OUTPUT ->
  /*
  {
    todo: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    post: {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\n' +
        'suscipit recusandae consequuntur expedita et cum\n' +
        'reprehenderit molestiae ut ut quas totam\n' +
        'nostrum rerum est autem sunt rem eveniet architecto'
    }
  }
  */
  
  //-------------------------------------------------------------------------------------------------
  
  /*
  8. Get Data from API and Display it on the browser console -:
  Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then 
  logs the data to the console. For example, you could use the API at
  https://jsonplaceholder.typicode.com/posts to retrieve a list of posts, and then display them to
  the browser console.
  */
  
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log("Don't worry sir I handled error here");
    });
  
  // Output = > retrive downloaded data
  
  //----------------------------------------------------------------------------------------------
  
  /*
  9. Error Handling -:
  Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then 
  handles errors that may occur. For example, you could use the API at 
  https://jsonplaceholder.typicode.com/posts/123456789 to simulate an error, and then display an
  error message on the webpage.
  */
  
  async function downloadData() {
    const response_1 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/123456789"
    );
    try {
      if (!response_1.ok) {
        throw new Error("Network reponse is not okay");
      } else {
        const value_1 = await response_1.json();
        console.log(value_1);
      }
    } catch (error) {
      console.log("There is been error detected but still we handled it");
    }
  }
  downloadData();
  
  // Expected output -> There is been error detected but still we handled it
  
  //-----------------------------------------------------------------------------------------------
  
  
