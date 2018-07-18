import skygear from 'skygear'

class Tag {
  static defaultTags = {
    visibility: [
      'LGB colleagues',
      'Trans / genderqueer colleagues',
      'Allies',
      'Others'
      ],
    benefits: [
      'Same-sex benefits',
      'Rainbow families',
      'Trans benefits',
      'Informal Benefits',
      'Others'
      ],

    policies:[
      'Generic non-discrimination',
      'Same-sex policies',
      'Trans policies',
      'Informal policies',
      'Unenforced policies',
      'Others'
      ],

    space: [
      'Trans washrooms',
      'Gender neutral washrooms',
      'Others'
      ],

    community: [
      'Allies',
      'Inclusive culture',
      'Inclusive culture',
      'LGBTQ network',
      'D&I events',
      'Others'
      ],

    sponsorship: [
      'Public events',
      'Event sponsorships',
      'NGO sponsorships',
      'Advocacy'
      'Others'
      ]
  }

  constructor () {
  }
  static fetchAllTags () {
    // const SkygearCompany = skygear.Record.extend('tag')
    // const query = new skygear.Query(SkygearCompany)
    // skygear.publicDB.query(query).then((companies) => {
    //   // notes is an array of Note records that has its "title" equals "First note"
    // }, (error) => {
    //   console.error(error)
    // })
    return Tag.defaultCompanies
  }
}

export default Tag
