# user_genrator

A Node.js package that simplifies generating realistic dummy user data using Mongoose and Faker.js.

## Installation

```bash
npm install user_genrator
```
# Usage
``` 
import createDummyUsers from 'user_genrator'

const mongoUrl = 'YOUR_MONGO_URL';
const numUsers = 10;

createDummyUsers(numUsers, mongoUrl)
  .then(() => console.log('Dummy users created successfully!'))
  .catch(error => console.error('Error creating dummy users:', error));


```