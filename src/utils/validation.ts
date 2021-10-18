/**
 * Regulation expression of Email.
 */
export const EmailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * Validate email address.
 * @param email email
 * @returns true: valid, false: invalid
 */
export const validateEmail = (email: string): boolean => {
  return EmailRegExp.test(email)
}

/**
 * Validate text.
 * Accept only alphabets, numbers, symbols and space.
 * @param text text
 * @returns true: valid, false: invalid
 */
export const validateTextOnlyEnglish = (text: string): boolean => {
  const regexp = /^[a-zA-Z0-9!-/:-@¥[-`{-~\s]*$/
  return regexp.test(text)
}

export const ErrorMessages = {
  required: 'Required.',
  emailInvalid: 'Invalid email format.',
  shortPassword: 'Password needs at leaset 6 letters.',
  unmatchPassword: "Password to confirm doesn't match to password.",
}
