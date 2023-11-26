const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  // Listing all the titles with more than six words
  fetchData('https://jsonplaceholder.typicode.com/posts')
    .then((posts) => {
      const length = posts.filter((post) => {
        const words = post.title.split(' ');
        return words.length > 6;
      });

      const lengthList = length.map((post) => post.title).join('<br>');

      document.getElementById('JSON').innerHTML += `<h2>Titles with more than six words:</h2>${lengthList}`;
    })
    .catch((error) => console.error(error));

  // Show a word frequency map for post body contents
  fetchData('https://jsonplaceholder.typicode.com/posts')
    .then((posts) => {
      const bodyText = posts.map((post) => post.body);

      const joinText = bodyText.join(' ');

      const words = joinText
        .toLowerCase()
        .replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, '')
        .split(' ');

      const frqency = words.reduce((map, word) => {
        if (word !== '') {
          map[word] = (map[word] || 0) + 1;
        }
        return map;
      }, {});

      const wordFrequencyList = Object.entries(frqency)
        .map(([word, count]) => `${word}: ${count}`)
        .join('<br>');

      document.getElementById('JSON').innerHTML += `<h2>Word frequency for post:</h2>${wordFrequencyList}`;
    })
    .catch((error) => console.error(error));