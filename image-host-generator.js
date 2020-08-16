// You are developing an image hosting website.

// You have to create a function for generating random and unique image filenames.

// Create a function for generating a random 6 character string which will be used to access the photo URL.

// To make sure the name is not already in use, you are given access to an PhotoManager object.

// You can call it like so to make sure the name is unique

const generateName = () => photoManager.nameExists(n = (Math.random() + 1).toString(36).substr(2, 6)) ? generateName() : n

// or

const generateName = () =>
  Math.random()
    .toString(36)
    .slice(2,8)