/**
 * Regulation expression of Email.
 */
export const EmailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * Regulation expression of english only content.
 */
export const ContentRegExp = /^[a-zA-Z0-9!-/:-@¥[-`{-~\s]*$/

export const ErrorMessages = {
  required: 'Required.',
  emailInvalid: 'Invalid email format.',
  shortPassword: 'Password needs at leaset 6 letters.',
  unmatchPassword: "Password to confirm doesn't match to password.",
  onlyEnglish: "Please write 'English' diary!",
}
