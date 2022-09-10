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

const validateInputs = (inputs) => {
  const phoneNumber = inputs.phoneNumber;
  const password = inputs.password;
  const repeatPassword = inputs.repeatPassword;
  const result = {
    countryCode: [false, false],
    isPhoneNumberValid: [false, false],
    phoneNumber: [false, false],
    password: [false, false],
    repeatPassword: [false, false],
  };

  // validate phone number
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength > 0) {
    if (phoneNumberLength > 3 && phoneNumberLength <= 20) {
      result.isPhoneNumberValid[0] = true;
    } else {
      result.isPhoneNumberValid[0] = false;
    }
  }

  // validate password
  if (password != "" && repeatPassword != "") {
    if (password === repeatPassword) {
      if (password.length >= 8) {
        result.password[0] = true;
        result.repeatPassword[0] = true;
      } else {
        result.password[0] = false;
        result.repeatPassword[0] = false;
      }
    } else {
      result.password[0] = false;
      result.repeatPassword[0] = false;
    }
  } else {
    result.password[0] = false;
    result.repeatPassword[0] = false;
  }
  return result;
};

export { validateUsername, validateInputs };
