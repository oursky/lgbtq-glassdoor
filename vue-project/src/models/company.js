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

  // constructor () {
  // }

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
}

export default Company
