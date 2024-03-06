// File: 9-try.js
import divideFunction from './8-try';

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`${error}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}