import mongoose from 'mongoose';
import faker from 'faker';




const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,

  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  phoneNumbers: [{
    type: {
      type: String,
      enum: ['mobile', 'home', 'work'] 
    },
    number: String
  }],
  

  hobbies: [String],
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String
  }
});

const User = mongoose.model('User', userSchema);


const generateDummyUser = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
   
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode()
    },
    phoneNumbers: [
      { type: 'mobile', number: faker.phone.phoneNumber() }
    ],
    hobbies: [...faker.lorem.words()],
    socialMedia: {
      facebook: faker.internet.userName(),
      twitter: `@${faker.internet.userName()}`,
      instagram: faker.internet.userName()
    }
  };
};



const createDummyUsers = async (count ,url) => {
    mongoose.connect(url);

  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(generateDummyUser());
  }
  await User.insertMany(users);
};
export default createDummyUsers;


