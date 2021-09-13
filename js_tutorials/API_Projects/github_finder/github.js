class GitHub {
  constructor() {
    this.client_id = 'b5161bd448c99b9d2aab';
    this.client_secret = '9f93f739627497f10aacc725a6ba47b620e3ea14';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}