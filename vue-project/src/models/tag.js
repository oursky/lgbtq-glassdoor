// import skygear from 'skygear'

class Tag {
  static defaultTags = {
    visibility: {
      'LGB_colleagues': { en: 'LGB colleagues', zh: '同性戀同事' },
      'Trans,_genderqueer_colleagues': { en: 'Trans, genderqueer colleagues', zh: '跨性別同事' },
      'Allies': { en: 'Allies', zh: '支持同志的同事' }
    },
    benefits: {
      'Same-sex_benefits': { en: 'Same-sex benefits', zh: '同性戀伴侶褔利' },
      'Rainbow_families': { en: 'Rainbow families', zh: '彩虹家庭支援' },
      'Trans_benefits': { en: 'Trans benefits', zh: '跨性別人士褔利' },
      'Informal_Benefits': { en: 'Informal Benefits', zh: '非正式的福利' }
    },
    policies: {
      'Generic_non-discrimination': { en: 'Generic non-discrimination', zh: '反歧視政策' },
      'Same-sex_policies': { en: 'Same-sex policies', zh: '同志友善政策' },
      'Trans_policies': { en: 'Trans policies', zh: '跨性別友善政策' },
      'Informal_policies': { en: 'Informal policies', zh: '非正式的反歧視援助' },
      'Unenforced_policies': { en: 'Unenforced policies', zh: '有反歧視政策但沒有執行' }
    },
    space: {
      'Trans_washrooms': { en: 'Trans washrooms', zh: '性別友善洗手間' }
    },
    community: {
      'Allies': { en: 'Allies', zh: '有同志盟友' },
      'Inclusive_culture': { en: 'Inclusive culture', zh: 'Inclusive culture' },
      'Comfortable_calling_out': { en: 'Comfortable calling out', zh: 'Inclusive culture' },
      'LGBTQ_network': { en: 'LGBTQ network', zh: '公司有LGBTQ社群' },
      'D&I_events': { en: 'D&I events', zh: 'D&I 活動' }
    },
    sponsorship: {
      'Public_events': { en: 'Public events', zh: '舉辦公開活動' },
      'Event_sponsorships': { en: 'Event sponsorships', zh: '贊助活動' },
      'NGO_sponsorships': { en: 'NGO sponsorships', zh: '贊助NGO' },
      'Advocacy': { en: 'Advocacy', zh: '為LGBTQ社群發聲' }
    },
    companySize: {
      '0-5': { en: '0-5', zh: '0-5' },
      '6-10': { en: '6-10', zh: '6-10' },
      '11-20': { en: '11-20', zh: '11-20' },
      '21-50': { en: '21-50', zh: '21-50' },
      '51-100': { en: '51-100', zh: '51-100' },
      '101-200': { en: '101-200', zh: '101-200' },
      '201-500': { en: '201-500', zh: '201-500' },
      '500+': { en: '500+', zh: '500+' }
    }
  }

  static fetchAllTags () {
    return this.defaultTags
  }
}

export default Tag
