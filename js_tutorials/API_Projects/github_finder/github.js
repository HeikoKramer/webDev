class GitHub {
  constructor() {
    this.client_id = 'b5161bd448c99b9d2aab';
    this.client_secret = '1e3ca46c807c71826012edc4c407d65085b41bf8';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}