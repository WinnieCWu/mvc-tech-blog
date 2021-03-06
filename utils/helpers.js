//use methods built into Date object to avoid using unneeded dependencies
module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date).getFullYear()}`;
    },
    format_url: url => {
      return url
          //.replace returns the modified string
          .replace("http://", "")
          .replace("https://", "")
          .replace("www.", "")
          .split("/")[0]
          .split("?")[0]
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
      return word;
    }
  };
  