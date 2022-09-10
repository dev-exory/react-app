import images from "../assets/flags/importImages";
import countries from "../assets/flags/countries.json";

const validateUsername = async (username) => {
  let returnValue = false;
  const requestOptions = {
    method: "GET",
  };
  if (username.length > 3) {
    await fetch(
      `https://api-v2.exory.dev/user/pub/${username}`,
      requestOptions
    ).then((response) => {
      if (!response.ok) {
        returnValue = true;
        console.log(returnValue);
      } else {
        returnValue = false;
        console.log(returnValue);
      }
    });
  }
  return returnValue;
};

const validateCountryCode = (countryCode) => {
  const country = {
    path: "",
    value: false,
  };

  countries.every((element) => {
    if (element.dial_code === countryCode) {
      country.path = images[`${element.code.toLowerCase()}.svg`];
      country.value = true;
      return false;
    } else {
      country.value = false;
      return true;
    }
  });

  return [country.value, country.path];
};

const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber.length > 0) {
    if (phoneNumber.length >= 4 && phoneNumber.length <= 21) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const validatePasswords = (password, repeatPassword) => {
  if (password != "" && repeatPassword != "") {
    if (password.length >= 8 && repeatPassword.length >= 8) {
      if (password === repeatPassword) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export {
  validateUsername,
  validateCountryCode,
  validatePhoneNumber,
  validatePasswords,
};
