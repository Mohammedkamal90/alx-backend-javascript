// Define interfaces with nominal typing using brand properties
interface MajorCredits {
  credits: number;
  __brand: "MajorCredits"; // Unique brand property
}

interface MinorCredits {
  credits: number;
  __brand: "MinorCredits"; // Unique brand property
}

// Define functions to sum credits of major and minor subjects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits" // Ensure the returned value has the correct brand
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits" // Ensure the returned value has the correct brand
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, __brand: "MajorCredits" };
const majorSubject2: MajorCredits = { credits: 4, __brand: "MajorCredits" };
const minorSubject1: MinorCredits = { credits: 2, __brand: "MinorCredits" };
const minorSubject2: MinorCredits = { credits: 1, __brand: "MinorCredits" };

const sumMajor = sumMajorCredits(majorSubject1, majorSubject2);
const sumMinor = sumMinorCredits(minorSubject1, minorSubject2);

console.log("Sum of major credits:", sumMajor);
console.log("Sum of minor credits:", sumMinor);
