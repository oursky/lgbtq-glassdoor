import skygear from 'skygear'

class Company {
  static allCompanies = []

  constructor (options = {}) {
    this.name = ''
    this.companySize = ''
    this.website = ''
    this.linkedin = ''
    this.visibility = []
    this.industry = ''
    this.policies = []
    this.community = []
    this.benefits = []
    this.space = []
    this.sponsorship = []
    this.thoughts = ''
    this.submittedBy = null

    for (let key in options) {
      if (this.hasOwnProperty(key)) {
        this[key] = options[key]
      }
    }
  }

  static fetchAllCompanies () {
    console.log('fetching....')
    return new Promise((resolve, reject) => {
      skygear.lambda('fetch_all_listings').then(companies => {
        console.log('The result is a live one')
        Company.allCompanies = Array.from(companies)
        resolve(Company.allCompanies)
      })
    })
  }

  static getCompany (companyName) {
    const result = this.allCompanies.filter(company => company.name === companyName)
    return result
  }

  referenceAuthor (author) {
    const submittedBy = new skygear.Reference(author)
    this.submittedBy = submittedBy
  }

  save () {
    const SkygearCompany = skygear.Record.extend('company')
    let jsonObject = this.toJSON()

    console.log(jsonObject)

    let company = new SkygearCompany(jsonObject)
    console.log(company)
    skygear.publicDB.save(company).then((result) => {
      Company.allCompanies.push(result)
    }, (error) => {
      console.error(error)
    })
  }

  toJSON () {
    let { name, companySize, website, linkedin, visibility, industry, policies, benefits, community, space, sponsorship, thoughts, submittedBy, live } = this
    return { name, companySize, website, linkedin, visibility, industry, policies, benefits, community, space, sponsorship, thoughts, submittedBy, live }
  }
}

export default Company
