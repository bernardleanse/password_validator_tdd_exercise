class Validator {
  constructor(){}
  validate(pw){
    return [false, 'Password must be at least 8 characters']
  }
}

module.exports = Validator