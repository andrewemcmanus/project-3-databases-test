const models = require('./models');
// separate model that draws on
models.User.create({
  name: 'Jimmy Page',
  email: 'jimmy@ledzeppelin.com',
  password: '#Rnfdsj#)@JJFNFJnfhfh4h3q12M',
  username: {
    username: 'jimmy-page',
    primary_inst: 'guitar',
    stage_name: 'Led Zeppelin',
    comments: {
      songsterr_id: $$,
      content: 'amazing',
      timestamp: '12-20-2020...'
    },
    song_list: {
      songsterr_id: $$,
      title: 'xxxxxxxxxx',
      artist: {
        name: 'xxxxx',
        nameWithoutThePrefix: 'x',
        useThePrefix: true
      },
      chordsPresent: true
    },
    beats_list: {
      title: 'beat-1',
      description: 'rock ballad',
      beats_url: 'http://externalhost'
    }
  }
}).then(() => {console.log('done!')});
