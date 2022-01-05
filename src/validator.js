class Validator {
  constructor(){
    this.isPasswordValid = false
    this.errorMessage = ''
  }
  validate(pw){
    if(pw.length < 8){
      this.errorMessage = 'Password must be at least 8 characters'
    }
    return [this.isPasswordValid , this.errorMessage]
  }
}

module.exports = Validator