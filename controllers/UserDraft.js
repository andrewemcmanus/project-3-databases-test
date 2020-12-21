// <!-- GET comments, associated usernames and timestamps to display on a tab's page: -->
router.get('/:id', (req, res) => {
    const usersWithSongComments = db.User.find({ "userProfile.comments.songsterr_id": req.params.id} );
    const usernames = usersWithSongComments.userProfile.username;
    const comments = usersWithSongComments.userProfile.comments.content;
    const timestamps = usersWithSongComments.userProfile.comments.timestamp;
}).then()

// <!-- PUT: a new comment: -->
// <!-- look up "_id" for currentUser -->
// <!-- curreentTimestamp = some props or state? How to log this? -->
router.put('/', (req, res) => {
    const commentContent = req.body;
    // const currentTimestamp = state;
    const tabId = req.params.id; // or props?
    const userInfo = db.User.find({ email: props.currentUser? });
    const userId = userInfo._id;
    db.User.update({ _id : `ObjectID(${userId}`},
      { $addToSet : {"userProfile.comments" :
        { songsterr_id: tabId,
          content: commentContent,
          timestamp: currentTimestamp }
        }
      });
}).then()

// <!-- PUT: a tab into the user's favorites list -->
router.put('/', (req, res) => {
    const tabId = req.params.id // or props?
    const tabTitle = props.title // state?
    const tabArtist = props.artist // state?
    const linkToTab = `http://www.songsterr.com/a/wa/song?id=${tabId}`
    const userInfo = db.User.find({ email: props.currentUser }); // or equivalent
    const user_id = userInfo._id;
    db.User.update({ _id : `ObjectID(${user_id})`}, { $addToSet : {"userProfile.songList" : { songsterr_id: tabId, title: tabTitle, artist: tabArtist, url: linkToTab }}});
}).then()
