//Search for Artist:

  GET https://api.spotify.com/v1/search

  curl -X "GET" "https://api.spotify.com/v1/search?q=Justice&type=Artist" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAAIlbbtbO_RmUfVsh0IJhDbj3iusqIRxK5LleNwO6kXQFecLOiAY4vyw8ZOd01KDe2NskTKiEaasYJjosTDUcccTc9Zt9Go-iUq6jE5FXYlLTRlVajwkABTyvDNQcZIBBODBS3XpgJYGZFcC8"

  
 {
  "artists": {
    "href": "https://api.spotify.com/v1/search?query=Justice&type=artist&market=US&offset=0&limit=1",
    "items": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1gR0gsQYfi6joyO1dlp76N"
        },
        "followers": {
          "href": null,
          "total": 651315
        },
        "genres": [
          "alternative dance",
          "dance-punk",
          "disco house",
          "electro house",
          "electronic",
          "filter house",
          "indietronica",
          "new rave"
        ],
        "href": "https://api.spotify.com/v1/artists/1gR0gsQYfi6joyO1dlp76N",
        "id": "1gR0gsQYfi6joyO1dlp76N",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/58d9c87c082d3af6f8ea8dc7ac44dd3823280b45",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/01a786afab31738885eaf683872cf9b7ea9ee150",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/218299a94e8af3a5b324af8fe14055076f7371b7",
            "width": 160
          }
        ],
        "name": "Justice",
        "popularity": 63,
        "type": "artist",
        "uri": "spotify:artist:1gR0gsQYfi6joyO1dlp76N"
      }
    ],
    "limit": 1,
    "next": "https://api.spotify.com/v1/search?query=Justice&type=artist&market=US&offset=1&limit=1",
    "offset": 0,
    "previous": null,
    "total": 464
  }
}