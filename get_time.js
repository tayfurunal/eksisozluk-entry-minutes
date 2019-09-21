let entries = document.getElementsByClassName('content');
let wordCount = 0;
let readingTime = 0;
const avgReadingSpeed = 180; // from wikipedia -- average words/min when reading from a monitor

String.prototype.countWords = function() {
  return this.split(/\s+/).length;
};

for (let i = 0; i < entries.length; i++) {
  const text = entries[i].innerText;
  wordCount = text.countWords();

  readingTime = Math.round(wordCount / avgReadingSpeed);
  readingTime = readingTime === 0 ? 1 : readingTime;

  let link = document.createElement('a');
  let linkText = document.createTextNode('~' + readingTime + 'dakika');
  link.appendChild(linkText);
  link.classList.add('entry-date', 'permalink');
  document.getElementsByClassName('info')[i].prepend(link);
}
