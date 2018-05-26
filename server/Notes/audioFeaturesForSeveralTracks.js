/*
Description   Get Audio Features for Several Tracks DOCS
Endpoint  https://api.spotify.com/v1/audio-features
HTTP Method   GET
OAuth   Required
*/

// ids:

33yAEqzKXexYM3WlOYtTfQ,0Dx2JcexaaBU11URKp9Fc1,4wSmqFg31t6LsQWtzYAJob,5pqbHlHaVbkHJQlsAxhcZM,2eGHyarZyRvUgFI4d3G8GN,2X1XxaSRBqdJBcfyothrjT

// OAuthToken:

BQAfGXjjsD-3el3tQkpep8DczvO0MnzFhxzQzLyDQSAvBaAjda0n-5DM3x6k0M5KHLuPMcokHNsKik7wCoXbFXx_JbOpd273xh6Vln8oIAQyejJalM1PM9-J73p8LzJdzsfliA9PiQX-Xpnspac


GET https://api.spotify.com/v1/audio-features

curl -X "GET" "https://api.spotify.com/v1/audio-features?ids=33yAEqzKXexYM3WlOYtTfQ%2C0Dx2JcexaaBU11URKp9Fc1%2C4wSmqFg31t6LsQWtzYAJob%2C5pqbHlHaVbkHJQlsAxhcZM%2C2eGHyarZyRvUgFI4d3G8GN%2C2X1XxaSRBqdJBcfyothrjT" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAfGXjjsD-3el3tQkpep8DczvO0MnzFhxzQzLyDQSAvBaAjda0n-5DM3x6k0M5KHLuPMcokHNsKik7wCoXbFXx_JbOpd273xh6Vln8oIAQyejJalM1PM9-J73p8LzJdzsfliA9PiQX-Xpnspac"



{
  "audio_features": [
    {
      "danceability": 0.613,
      "energy": 0.962,
      "key": 6,
      "loudness": -5.07,
      "mode": 0,
      "speechiness": 0.278,
      "acousticness": 0.034,
      "instrumentalness": 0,
      "liveness": 0.824,
      "valence": 0.496,
      "tempo": 113.015,
      "type": "audio_features",
      "id": "33yAEqzKXexYM3WlOYtTfQ",
      "uri": "spotify:track:33yAEqzKXexYM3WlOYtTfQ",
      "track_href": "https://api.spotify.com/v1/tracks/33yAEqzKXexYM3WlOYtTfQ",
      "analysis_url": "https://api.spotify.com/v1/audio-analysis/33yAEqzKXexYM3WlOYtTfQ",
      "duration_ms": 242267,
      "time_signature": 4
    },
    {
      "danceability": 0.511,
      "energy": 0.524,
      "key": 1,
      "loudness": -8.342,
      "mode": 1,
      "speechiness": 0.0303,
      "acousticness": 0.12,
      "instrumentalness": 0.073,
      "liveness": 0.237,
      "valence": 0.491,
      "tempo": 85.03,
      "type": "audio_features",
      "id": "0Dx2JcexaaBU11URKp9Fc1",
      "uri": "spotify:track:0Dx2JcexaaBU11URKp9Fc1",
      "track_href": "https://api.spotify.com/v1/tracks/0Dx2JcexaaBU11URKp9Fc1",
      "analysis_url": "https://api.spotify.com/v1/audio-analysis/0Dx2JcexaaBU11URKp9Fc1",
      "duration_ms": 209826,
      "time_signature": 4
    },
    {
      "danceability": 0.693,
      "energy": 0.789,
      "key": 9,
      "loudness": -5.13,
      "mode": 1,
      "speechiness": 0.384,
      "acousticness": 0.0168,
      "instrumentalness": 0.366,
      "liveness": 0.0985,
      "valence": 0.283,
      "tempo": 117.055,
      "type": "audio_features",
      "id": "4wSmqFg31t6LsQWtzYAJob",
      "uri": "spotify:track:4wSmqFg31t6LsQWtzYAJob",
      "track_href": "https://api.spotify.com/v1/tracks/4wSmqFg31t6LsQWtzYAJob",
      "analysis_url": "https://api.spotify.com/v1/audio-analysis/4wSmqFg31t6LsQWtzYAJob",
      "duration_ms": 234960,
      "time_signature": 4
    },
    {
      "danceability": 0.602,
      "energy": 0.793,
      "key": 6,
      "loudness": -5.198,
      "mode": 0,
      "speechiness": 0.0623,
      "acousticness": 0.0000779,
      "instrumentalness": 0.139,
      "liveness": 0.0968,
      "valence": 0.583,
      "tempo": 115.001,
      "type": "audio_features",
      "id": "5pqbHlHaVbkHJQlsAxhcZM",
      "uri": "spotify:track:5pqbHlHaVbkHJQlsAxhcZM",
      "track_href": "https://api.spotify.com/v1/tracks/5pqbHlHaVbkHJQlsAxhcZM",
      "analysis_url": "https://api.spotify.com/v1/audio-analysis/5pqbHlHaVbkHJQlsAxhcZM",
      "duration_ms": 345304,
      "time_signature": 4
    },
    {
      "danceability": 0.625,
      "energy": 0.815,
      "key": 11,
      "loudness": -3.915,
      "mode": 1,
      "speechiness": 0.177,
      "acousticness": 0.0479,
      "instrumentalness": 0.0981,
      "liveness": 0.07,
      "valence": 0.527,
      "tempo": 107.271,
      "type": "audio_features",
      "id": "2eGHyarZyRvUgFI4d3G8GN",
      "uri": "spotify:track:2eGHyarZyRvUgFI4d3G8GN",
      "track_href": "https://api.spotify.com/v1/tracks/2eGHyarZyRvUgFI4d3G8GN",
      "analysis_url": "https://api.spotify.com/v1/audio-analysis/2eGHyarZyRvUgFI4d3G8GN",
      "duration_ms": 327387,
      "time_signature": 4
    },
    {
      "danceability": 0.584,
      "energy": 0.66,
      "key": 7,
      "loudness": -5.91,
      "mode": 0,
      "speechiness": 0.0278,
      "acousticness": 0.000664,
      "instrumentalness": 0,
      "liveness": 0.303,
      "valence": 0.508,
      "tempo": 113.046,
      "type": "audio_features",
      "id": "2X1XxaSRBqdJBcfyothrjT",
      "uri": "spotify:track:2X1XxaSRBqdJBcfyothrjT",
      "track_href": "https://api.spotify.com/v1/tracks/2X1XxaSRBqdJBcfyothrjT",
      "analysis_url": "https://api.spotify.com/v1/audio-analysis/2X1XxaSRBqdJBcfyothrjT",
      "duration_ms": 334225,
      "time_signature": 4
    }
  ]
}