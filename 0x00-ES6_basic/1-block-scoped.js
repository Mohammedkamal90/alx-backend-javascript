export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Linst Disable
    const task2 = false; // Linst Disable
  }

  return [task, task2];
}
