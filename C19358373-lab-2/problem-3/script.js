async function getUserInfo() {
    const username = document.getElementById('username').value;
    const userProfile = document.getElementById('user-profile');
    const userRepos = document.getElementById('user-repo');
  
    try {
      userProfile.innerHTML = '';
      userRepos.innerHTML = ''; 
  
      // Fetch user information
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const user = await userResponse.json();
  
      // Fetch user's repositories
      const reposResponse = await fetch(user.repos_url);
      const repos = await reposResponse.json();
  
      // Fetch user's gists
      const gistsResponse = await fetch(user.gists_url);
      const gists = await gistsResponse.json();
  
      // Display user information in the user-profile div
      userProfile.innerHTML = `
        <img src="${user.avatar_url}" alt="${username}'s Avatar">
        <h2>Name: ${user.name}</h2>
        <h2>Username: ${username}</h2>
        <h2>Email: ${user.email || 'No Email'}</h2>
        <h2>Location: ${user.location}</h2>
        <h2>No. Gists: ${gists.length || 'No Gists'}</h2>
      `;
  
      // Display user repositories in the user-repo div - List them
      userRepos.innerHTML = `
        <ul class="repo-list">
            ${repos.map(repo => `
            <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description || 'No description'}</p>
            </li>
            `).join('')}
        </ul>
      `;
    } catch (error) {
      userProfile.innerHTML = `<p>User not found.</p>`;
      userRepos.innerHTML = '';
    }
  }
  