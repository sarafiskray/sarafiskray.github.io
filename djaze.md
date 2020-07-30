# DJAZE iOS

<img src="images/spotifyfire.png?raw=true" width="100%" />

**Project Description:**
DJAZE is an iOS application designed to give everyone a voice when it comes to music selection at bars or parties.  It includes a live song request system, using the Spotify Web API and Firebase Firestore, as well as a democratic upvote and downvote feature.  It is a two-sided system, with pages for both DJs/hosts and regular users.  DJAZE is still under development as there are a few features we are still looking to add.

## Code Samples:

Here are a couple examples of functions that I wrote in Swift.

The first is the **search** function, where the entire Spotify database is queried based on a search term, and the top three results are placed on buttons, ready to be selected.

```swift
func search(_ searchTerm: String) {
    searchInfo = []
    let numSongstoReturn = 3
    var count = 0
    spotifyManager.find(SpotifyTrack.self, searchTerm) {
        tracks in
            for track in tracks {
                var searchResult = songInfo(uri: track.uri, name: track.name, artist: track.artist.name)
                self.searchInfo.append(searchResult)
                count += 1
                if (count == numSongstoReturn) {
                    self.updateButtons(self.searchInfo)
                    break
                }
            }
        }
    }
```

The next is the **getCurrentSong** function, which gets the song that is currently playing using a song counter in the database.

```swift
func getCurrentSong() {
        db.collection("SongsPlayed").order(by: "Counter", descending: true).limit(to: 1)
            .getDocuments()  { (querySnapshot, err) in
                if let err = err {
                    print("Error getting documents: \(err)")
                } else {
                    for document in querySnapshot!.documents {
                        self.currentSongTitle = document.data()["Artist"]! as! String
                        self.currentSongArtist = document.data()["SongName"]! as! String
                        self.currentSongID = document.data()["Track ID"]! as! String
                        self.updateCurrentSongLabel(self.currentSongTitle, self.currentSongArtist)
                    }
                }
        }
    }
```

### You can view the full code at the GitHub Repository [here](https://github.com/sarafiskray/DJAZE).