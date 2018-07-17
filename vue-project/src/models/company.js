import skygear from 'skygear'

class Company {
  static defaultCompanies = [
    { name: 'MakerBay Limited', industry: 'Co-working spaces' },
    { name: 'Oursky', industry: 'Software Engineering' },
    { name: 'G.D.P.' },
    { name: 'GDotTV' },
    { name: 'Walk in Hong Kong' },
    { name: 'HSBC' },
    { name: 'KPMG' },
    { name: 'Les Corner' },
    { name: 'Amazon Web Services' },
    { name: 'J.P. Morgan' },
    { name: 'Morgan Stanley' },
    { name: 'Goldman Sachs' },
    { name: 'Telstra' },
    { name: 'Credit Suisse' },
    { name: 'Bank of America Merrill Lynch' },
    { name: 'Citibank' },
    { name: 'BlackRock' },
    { name: 'State Street' },
    { name: 'Education First' },
    { name: 'CBRE' },
    { name: 'Pink Season' }
  ]

  constructor () {
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

  static fetchAllCompanies () {
    const SkygearCompany = skygear.Record.extend('company')
    const query = new skygear.Query(SkygearCompany)
    skygear.publicDB.query(query).then((companies) => {
      // notes is an array of Note records that has its "title" equals "First note"
    }, (error) => {
      console.error(error)
    })

    return Company.defaultCompanies
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
    let {name, companySize, visibility, industry, policies, benefits, community, space, sponsorship, thoughts, submittedBy } = this
    return { name, companySize, visibility, industry, policies, benefits, community, space, sponsorship, thoughts, submittedBy }
  }
}

export default Company
