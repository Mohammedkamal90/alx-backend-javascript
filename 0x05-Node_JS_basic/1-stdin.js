// 1-stdin.js

// Display initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read user input
process.stdin.once('data', (data) => {
  const input = data.toString().trim();

  // Display user's name
  if (input.length > 0) {
    process.stdout.write(`Your name is: ${input}\n`);
  }

  // End the process after handling input
  process.stdin.destroy();
});

// Display closing message after input event handler has finished
process.stdin.on("close", () => {
  process.stdout.write('This important software is now closing\n');
});
