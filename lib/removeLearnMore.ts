export default function removeLearnMore(description: string) {
  const lastSentence = description.split(". ").at(-1);
  const firstWord = lastSentence.split(" ").at(0);

  if (firstWord == "Learn") {
    const sentences = description.split(". ");
    return sentences.slice(0, -1).join() + ".";
  }

  return description;
}
