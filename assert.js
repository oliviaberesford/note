var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },
  toEqual: function(leftsideassertion, assertionToCheck) {
    if (assertionToCheck !== leftsideassertion) {
      throw new Error("Assertion failed: " + leftsideassertion + " is not equal to" + assertionToCheck);
    }
  },

  toContain: function(array, objectToCheckFor) {
    if (array.includes(objectToCheckFor) == false) {
      throw new Error("Assertion failed: " + array + " doesn't include " + objectToCheckFor);
    }
  }

};
