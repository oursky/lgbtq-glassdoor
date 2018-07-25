import skygear from 'skygear'

class Company {
  static allCompanies = []
  static defaultCompanies = []

  constructor (options = {}) {
    this.name = ''
    this.companySize = ''
    this.visibility = []
    this.industry = ''
    this.policies = []
    this.community = []
    this.benefits = []
    this.space = []
    this.sponsorship = []
    this.thoughts = ''
    this.submittedBy = null
  }

  static getDefaultCompanies () {
    this.allCompanies = Company.defaultCompanies
    return this.allCompanies
  }

  static fetchAllCompanies () {
    return new Promise((resolve, reject) => {
      const SkygearCompany = skygear.Record.extend('company')
      const query = new skygear.Query(SkygearCompany)
      query.limit = 999
      query.equalTo('live', true)
      skygear.publicDB.query(query).then((companies) => {
        console.log(companies)
        this.allCompanies = this.allCompanies.concat(Array.from(companies))
        console.log(this.allCompanies)
        resolve(companies)
      }, (error) => {
        reject(error)
      })
    })
  }

  static getCompany (companyName) {
    console.log(this.allCompanies)
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
      console.log(result)
    }, (error) => {
      console.error(error)
    })
  }

  toJSON () {
    let { name, companySize, visibility, industry, policies, benefits, community, space, sponsorship, thoughts, submittedBy, live } = this
    return { name, companySize, visibility, industry, policies, benefits, community, space, sponsorship, thoughts, submittedBy, live }
  }
}

export default Company
