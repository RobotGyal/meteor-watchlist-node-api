# Meteor Watchlist

> An awesome project with meteors.
> Create meteors to be added to a watchlist

---

# Full Documentation (via Docsify)
https://robotgyal.github.io/meteor-watchlist-node-api/#/

----

# Introduction
## What does your API do?
This API allows users to create their own meteors! This allows for later viewing, editing, and deleting.

---

# Overview
## Things that the developers should know about.
The data at watchlist/all is from the NASA datset

---

# Authentication
## What is the preferred way of using the API?

Through Postman

---

# Error Codes


When attempting to access any route without authentication, expect a **`Status: 403`** error. To resolve, go to the `auth` route to acquire token for use in authentication.

---

# Authentication Routes

## '.../auth/'
```
POST
http://localhost:8000/auth

```

Main watchlist route to show whats in watchlist


---

# Meteor Watchlist Routes
> The following are locked without authentication


## '/'
```
GET
http://localhost:800/

```
show homepage

## '.../watchlist/'
```
GET
http://localhost:8000/watchlist

```

Main watchlist route to show whats in watchlist

## '.../watchlist/:id'
```
GET
http://localhost:8000/watchlist/:id
```

View one meteor on watchlist

## '.../watchlist/delete/:id/'
```
DELETE
http://localhost:8000/watchlist/delete/:id
```

Delete meteor from watchlist

## '.../watchlist/edit/:id'
```
PATCH
http://localhost:8000/watchlist/edit/:id
```

Update meteor from watchlist

## '.../watchlist/add'
```
POST
http://localhost:8000/watchlist/add
```

Add meteor to watchlist

## '.../watchlist/all'
```
GET
http://localhost:8000/watchlist/all
```

View all meteorites in the dataset as json

