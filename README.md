# random-urls

A firebase demonstration.

All paths serve `index.html`, because of the rewrite rule in `firebase.json`

## Schema

Note that writes to "/redirects" are disabled, only reads are allowed. This is defined in the file `database.rules.json`.

Otherwise, anyone could write data to the database!

### Database

```javascript
{
  "redirects": {
    "$id": {
      0: "url" // Firebase stores arrays like this
      // ...
    }
    // ...
  }
}
```
