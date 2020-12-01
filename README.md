# README

## Project Description:

A mock twitch website that displays a list of videos in multi-language. Users can click their preferred video and link to the specified channel on twitch. (JQuery, Ajax)

--

### API: Helix Twitch API

Helix is new version of Twitch API.
[https://dev.twitch.tv/docs/api/](https://dev.twitch.tv/docs/api/)

Starting on May 1, 2020, Helix Twitch API reqire OAuth token for  all Endpoints. In other words, you need to set OAuth token in request header to access Twitch API.

**How do I get OAuth token?**

You can use 'Postman' to send a request and get OAuth token from Twitch. The following is a sample command:

```jsx
POST https://id.twitch.tv/oauth2/token
    ?client_id=<your client ID>
    &client_secret=<your client secret>
    &grant_type=client_credentials
    &scope=<space-separated list of scopes>

Sample request:
https://id.twitch.tv/oauth2/token?client_id=uo6dggojyb8d6soh92zknwmi5ej1q2&client_secret=nyo51xcdrerl8z9m56w9w6wg&grant_type=client_credentials
```

A Response will look like follows. The access_token is your OAuth token.. The access_token is your OAuth token.

```jsx
{
    "access_token": "26pqfsvtrq7wylkvfsbgr9rc8e1860",
    "expires_in": 5656644,
    "token_type": "bearer"
}
```
--
### Function:

Implemented infinite scroll

Implemented multi-language switch