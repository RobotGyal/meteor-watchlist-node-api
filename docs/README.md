# Meteor Watchlist

> An awesome project with meteors.
> Create meteors to be added to a watchlist

---

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
What errors and status codes can a user expect?

---

# Rate limit
Is there a limit to the number of requests an user can send?

---

# Routes

## '.../watchlist/'
```http://localhost:8000/watchlist```

Main watchlist route to show whats in watchlist

## '.../watchlist/:id'
```http://localhost:8000/watchlist/:id```

View one meteor on watchlist

## '.../watchlist/delete/:id/'
```http://localhost:8000/watchlist/delete/:id```

Delete meteor from watchlist

## '.../watchlist/edit/:id'
```http://localhost:8000/watchlist/edit/:id```

Update meteor from watchlist

## '.../watchlist/add'
```http://localhost:8000/watchlist/add```

Add meteor to watchlist

## '.../watchlist/all'
```http://localhost:8000/watchlist/all```

View all meteorites in the dataset as json

