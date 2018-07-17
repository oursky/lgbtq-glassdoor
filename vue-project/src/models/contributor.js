import skygear from 'skygear'

class Contributor {
  construcrtor () {
    this.firstName = ''
    this.lastName = ''
    this.company = ''
    this.role = ''
    this.email = ''
    this.identify = []
    this.pronoun = []
  }

  save () {
    return new Promise((resolve, reject) => {
      const ContributorRecord = skygear.Record.extend('Contributor')
      let jsonObject = this.toJSON()

      console.log(jsonObject)

      let json = this.toJSON()
      json.authUser = skygear.auth.currentUser.id

      const contributorRecord = new ContributorRecord(json)

      skygear.publicDB.save(contributorRecord).then((record) => {
        resolve(record)
      }, (error) => {
        reject(error)
      })
    })
  }

  toJSON () {
    let { firstName, lastName, company, role, email, identify, pronoun } = this
    return { firstName, lastName, company, role, email, identify, pronoun }
  }
}

export default Contributor
