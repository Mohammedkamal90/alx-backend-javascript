// 1-stdin.js

/**
 * Reads user input from STDIN and displays a greeting message.
 */
function welcomeMessage() {
  process.stdin.setEncoding('utf8');

  // Display initial message
  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  // Read user input
  process.stdin.on('data', (data) => {
    const input = data.trim();

    // Display user's name
    if (input.length > 0) {
      process.stdout.write(`Your name is: ${input}\n`);
    }

    // Display closing message
    process.stdout.write('This important software is now closing\n');

    // End the process
    process.exit(0);
  });
}

welcomeMessage();

module.exports = welcomeMessage;
