import skygear from 'skygear'

class Company {
  static allCompanies = []
  static defaultCompanies = [
    { name: 'MakerBay Limited', industry: 'Co-working spaces', companySize: '6-10', visibility: ['Vocal allies in leadership'] },
    { name: 'Oursky', industry: 'Software Engineering', companySize: '51-100', visibility: ['LGB colleagues'] },
    { name: 'G.D.P.', industry: 'Graphic Design/Web Design', companySize: '0-5', visibility: ['LGB colleagues'], sponsorship: ['Sponsors NGOs/events/projects'], space: ['Gender neutral washroom'], community: ['LGBTQ group / network'], thought: '"Not much official policy since our company is really small.\nNot much black and white written benefits but everything equal between same-sex partner / rainbow family and heterosexual couple (if we can provide). "' },
    { name: 'GDotTV', industry: 'Non-Profit/Volunteering', companySize: '0-5', visibility: ['LGBTQ+ colleagues'], policies: ['LGBTQ+ policies'], sponsorship: ['Sponsors NGOs'], community: ['Internal diversity & inclusion events'] },
    { name: 'Walk in Hong Kong', industry: 'Travel/Tourism', companySize: '6-10', visibility: ['LGB colleagues'], policies: ['LGBTQ+ policies'] },
    { name: 'HSBC', industry: 'Financial Services', companySize: '500+', visibility: ['LGBTQ+ colleagues'], benefits: ['Same-sex partner benefits'], policies: ['LGBTQ+ policies'] },
    { name: 'KPMG', industry: 'Management Consulting', companySize: '500+', visibility: ['LGBTQ+ colleagues'], benefits: ['Same-sex partner benefits'], policies: ['LGBTQ+ policies'] },
    { name: 'Les Corner', industry: 'Non-Profit/Volunteering', companySize: '0-5', visibility: ['LGBTQ+ colleagues'], community: ['LGBTQ group / network'] },
    { name: 'Amazon Web Services', industry: 'Information Technology/IT', companySize: '500+', visibility: ['LGBTQ+ colleagues'], benefits: ['Same-sex spouse', 'rainbow family', 'trans support'], policies: ['LGBTQ+ policies'], sponsorship: ['Sponsors NGOs/events/projects'], space: ['Gender neutral washroom'], community: ['LGBTQ network / event'] },
    { name: 'J.P. Morgan', industry: 'Financial Services', companySize: '500+', visibility: ['LGBTQ+ colleagues'] },
    { name: 'Morgan Stanley', industry: 'Financial Services', companySize: '500+', visibility: ['LGBTQ+ colleagues'] },
    { name: 'Goldman Sachs', industry: 'Financial Services', companySize: '500+', visibility: ['LGBTQ+ colleagues'], benefits: ['Same-sex partner benefits'], policies: ['LGBTQ+ policies'] },
    { name: 'Telstra', industry: 'Information Technology/IT', companySize: '500+', visibility: ['LGBTQ+ colleagues'] },
    { name: 'Credit Suisse', industry: 'Financial Services', companySize: '500+', visibility: ['LGBTQ+ colleagues'] },
    { name: 'Bank of America Merrill Lynch', industry: 'Financial Services', companySize: '500+', visibility: ['LGBTQ+ colleagues'] },
    { name: 'Citibank', industry: 'Financial Services', companySize: '500+', visibility: ['LGBTQ+ colleagues'], benefits: ['Same-sex partner benefits'] },
    { name: 'BlackRock', industry: 'Financial Services', companySize: '500+', visibility: ['LGBTQ+ colleagues'] },
    { name: 'State Street', industry: 'Financial Services', companySize: '500+', visibility: ['LGBTQ+ colleagues'] },
    { name: 'Education First', industry: 'Education', companySize: '51-100', visibility: ['LGBTQ+ colleagues'] },
    { name: 'CBRE', industry: 'Real Estate', companySize: '51-100', visibility: ['LGB colleagues'] },
    { name: 'Pink Season', industry: 'Non-Profit/Volunteering', companySize: '21-50', visibility: ['LGBTQ+ colleagues'] }
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

  static getDefaultCompanies () {
    this.allCompanies = Company.defaultCompanies
    return this.allCompanies
  }

  static fetchAllCompanies () {
    return new Promise((resolve, reject) => {
      const SkygearCompany = skygear.Record.extend('company')
      const query = new skygear.Query(SkygearCompany)
      skygear.publicDB.query(query).then((companies) => {
        console.log('all companies')
        console.log(companies)
        this.allCompanies = this.allCompanies.concat(Array.from(companies))
        console.log('concated')
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
    let { name, companySize, visibility, industry, policies, benefits, community, space, sponsorship, thoughts, submittedBy } = this
    return { name, companySize, visibility, industry, policies, benefits, community, space, sponsorship, thoughts, submittedBy }
  }
}

export default Company
