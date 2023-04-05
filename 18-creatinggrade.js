"use strict";
const read = require('readline-sync');
// Accept input from user
const writtenTestScore = parseFloat(read.question("Enter score for written test:"));
const labExamScore = parseFloat(read.question("Enter score for lab exams:"));
const assignmentScore = parseFloat(read.question("Enter score for assignments:"));
// Compute weighted average
const overallGrade = (writtenTestScore * 0.7) + (labExamScore * 0.2) + (assignmentScore * 0.1);
// Output the result
console.log(`Grade of the student is ${overallGrade.toFixed(1)}`);
