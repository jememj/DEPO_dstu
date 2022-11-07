export default function generateRandomId() {
  return `${(~~(Math.random() * 1e8)).toString(16)}`;
}
