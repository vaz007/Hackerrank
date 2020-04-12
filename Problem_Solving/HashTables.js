const hashTableRansomNote = (magazine, note) => {
  for (let i = 0; i < note.length; i++) {
    let finder = magazine.indexOf(note[i]);
    // console.log(finder);
    if (finder != -1) {
      magazine[finder] = "";
      if (i === note.length - 1) {
          // console.log(i)
        console.log("Yes");
      }
    } else {
      console.log("No");
      break;
    }
  }
};

hashTableRansomNote(
  ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"],
  ["ive", "got",  "coconuts"]
);
