const Url =
  "https://api.github.com/search/code?q=sendBeacon+in:file&sort=stars&order=asc";

const getRepoName = (arr = []) => {
  return arr.reduce((result, item) => {
    if (!(result.length < 5)) return;
    if (result.includes(item.repository.html_url))
      return [...result, item.repository.html_url];
  }, []);
};

fetch(Url, {
  headers: {
    Authorization: "Token [your_token]",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", getRepoName(data.items));
  })
  .catch((error) => {
    console.error("Error:", error);
  });
