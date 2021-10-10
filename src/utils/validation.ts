const REG_WHITE_SPACE = /[\s]/

/**
 * Validate email address.
 * @param email email
 * @returns true: valid, false: invalid
 */
export const validateEmail = (email: string): boolean => {
  const regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regexp.test(email)
}

/**
 * Validate text.
 * Accept only alphabets, numbers, symbols and space.
 * @param text text
 * @returns true: valid, false: invalid
 */
export const validateTextOnlyEnglish = (text: string): boolean => {
  const regexp = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/
  return regexp.test(text)
}
