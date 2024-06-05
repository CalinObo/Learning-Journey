// A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

// Complete the getAverage function which takes in an array of test scores and returns the average score.

// The average is calculated by adding up all the scores and dividing by the total number of scores.

// average = sum of all scores / total number of scores
// A couple of function calls have been provided for you so you can test out your code.

// Tips

// You can use a loop to iterate over the scores array and add up all the scores.
// You can use the length property to get the total number of scores.

function getAverage(scores){
    let sum=0;
    for(let i=0; i<scores.length;i++){
        sum=sum+scores[i]
    }
    return sum/scores.length
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// Step 2
// Now the teacher needs your help converting the student score to a letter grade.

// Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

// Here are the scores and their corresponding letter grades:

// Score Range	Grade
// 100	"A++"
// 90 - 99	"A"
// 80 - 89	"B"
// 70 - 79	"C"
// 60 - 69	"D"
// 0 - 59	"F"

function getGrade(score) {
    if (score >= 0 && score <= 59) {
      return "F"
    } else if (score >= 60 && score <= 69) {
      return "D"
    } else if (score >= 70 && score <= 79) {
      return "C"
    } else if (score >= 80 && score <= 89) {
      return "B"
    } else if (score >= 90 && score <= 99) {
      return "A"
    } else if (score ===100)  {
      return "A++"
    }
  
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));

// //   The teacher is really happy with the program you have created so far. 
// But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".

// // Complete the function hasPassingGrade that takes a student score as a parameter. 
// Your function should return true if the student has a passing grade and false if they do not.

function hasPassingGrade(score) {
    if(getGrade(score)==="F"){
      return false;
    }
    else{
      return true;
    }
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));

//   Step 4
// Now that the teacher has all of the information they need, they want to be able to message the student with the results.

// Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.

// If the student passed the course, the string should follow this format:

// Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
// If the student failed the course, the string should follow this format:

// Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
// Replace average-goes-here with the average of the total scores. Replace grade-goes-here with the student's grade.

function studentMsg(totalScores, studentScore) {
    let average=getAverage(totalScores)
    if (hasPassingGrade(studentScore)){
      return "Class average: "+ average+". Your grade: "+getGrade(studentScore)+". You passed the course."
    }
    else{
      return "Class average: "+ average+". Your grade: "+getGrade(studentScore)+". You failed the course."
    }
  
  }
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));