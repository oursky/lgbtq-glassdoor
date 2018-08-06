class FormOptions {
  constructor ($lang) {
    this.$lang = $lang
  }

  get identifyOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: 'lesbian', text: lang.lesbian },
      { value: 'gay', text: lang.gay },
      { value: 'bisexual', text: lang.bisexual },
      { value: 'trans', text: lang.trans },
      { value: 'genderqueer', text: lang.genderqueer },
      { value: 'queer', text: lang.queer },
      { value: 'ally', text: lang.ally },
      { value: 'other', text: lang.other }
    ]
  }

  get pronounOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: 'she', text: lang.she },
      { value: 'he', text: lang.he },
      { value: 'they', text: lang.they }
    ]
  }

  get industryOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: 'Accounting', text: lang.accounting },
      { value: 'Airlines/Aviation', text: lang.airlines },
      { value: 'Alternative Dispute Resolution', text: lang.alternativeDisputeResolution },
      { value: 'Alternative Medicine', text: lang.alternativeMedicine },
      { value: 'Animation', text: lang.animation },
      { value: 'Architecture/Planning', text: lang.architecture },
      { value: 'Arts/Crafts', text: lang.arts },
      { value: 'Automotive', text: lang.automotive },
      { value: 'Aviation/Aerospace', text: lang.aviation },
      { value: 'Banking/Mortgage', text: lang.banking },
      { value: 'Biotechnology/Greentech', text: lang.biotechnology },
      { value: 'Broadcast Media', text: lang.broadcastMedia },
      { value: 'Building Materials', text: lang.buildingMaterials },
      { value: 'Business Supplies/Equipment', text: lang.businessSupplies },
      { value: 'Capital Markets/Hedge Fund/Private Equity', text: lang.capitalMarkets },
      { value: 'Chemicals', text: lang.chemicals },
      { value: 'Civic/Social Organization', text: lang.civic },
      { value: 'Civil Engineering', text: lang.civilEngineering },
      { value: 'Commercial Real Estate', text: lang.commercialRealEstate },
      { value: 'Computer Games', text: lang.computerGames },
      { value: 'Computer Hardware', text: lang.computerHardware },
      { value: 'Computer Networking', text: lang.computerNetworking },
      { value: 'Computer Software Engineering', text: lang.computerSoftwareEngineering },
      { value: 'Computer Network Security', text: lang.computerNetworkSecurity },
      { value: 'Construction', text: lang.construction },
      { value: 'Consumer Electronics', text: lang.consumerElectronics },
      { value: 'Consumer Goods', text: lang.consumerGoods },
      { value: 'Consumer Services', text: lang.consumerServices },
      { value: 'Cosmetics', text: lang.cosmetics },
      { value: 'Co-working spaces / Event Spaces', text: lang.coworkingSpaces },
      { value: 'Dairy', text: lang.dairy },
      { value: 'Defense/Space', text: lang.defense },
      { value: 'Design', text: lang.design },
      { value: 'E-Learning', text: lang.eLearning },
      { value: 'Education', text: lang.education },
      { value: 'Electrical/Electronic Manufacturing', text: lang.electrical },
      { value: 'Entertainment/Movie Production', text: lang.entertainment },
      { value: 'Environmental Services', text: lang.environmentalServices },
      { value: 'Events Services', text: lang.eventsServices },
      { value: 'Executive Office', text: lang.executiveOffice },
      { value: 'Facilities Services', text: lang.facilitiesServices },
      { value: 'Farming', text: lang.farming },
      { value: 'Fashion/Apparel', text: lang.fashion },
      { value: 'Financial Services', text: lang.financialServices },
      { value: 'Fine Art', text: lang.fineArt },
      { value: 'Fishery', text: lang.fishery },
      { value: 'Food Production', text: lang.foodProduction },
      { value: 'Food/Beverages', text: lang.foodNBeverages },
      { value: 'Fundraising', text: lang.fundraising },
      { value: 'Furniture', text: lang.furniture },
      { value: 'Gambling/Casinos', text: lang.gambling },
      { value: 'Glass/Ceramics/Concrete', text: lang.glass_ceramics_Concrete },
      { value: 'Government Administration', text: lang.governmentAdministration },
      { value: 'Government Relations', text: lang.governmentRelations },
      { value: 'Graphic Design/Web Design', text: lang.graphicDesign_WebDesign },
      { value: 'Health/Fitness', text: lang.health },
      { value: 'Higher Education/Acadamia', text: lang.higherEducation },
      { value: 'Hospital/Health Care', text: lang.hospital },
      { value: 'Hospitality', text: lang.hospitality },
      { value: 'Human Resources/HR', text: lang.humanResources },
      { value: 'Import/Export', text: lang.import_Export },
      { value: 'Individual/Family Services', text: lang.individual },
      { value: 'Industrial Automation', text: lang.industrialAutomation },
      { value: 'Information Services', text: lang.informationServices },
      { value: 'Information Technology/IT', text: lang.informationTechnology },
      { value: 'Insurance', text: lang.insurance },
      { value: 'International Affairs', text: lang.internationalAffairs },
      { value: 'International Trade/Development', text: lang.internationalTrade },
      { value: 'Internet', text: lang.internet },
      { value: 'Investment Banking/Venture', text: lang.investmentBanking },
      { value: 'Investment Management/Hedge Fund/Private Equity', text: lang.investmentManagement },
      { value: 'Judiciary', text: lang.judiciary },
      { value: 'Law Enforcement', text: lang.lawEnforcement },
      { value: 'Law Practice/Law Firms', text: lang.lawPractice },
      { value: 'Legal Services', text: lang.legalServices },
      { value: 'Legislative Office', text: lang.legislativeOffice },
      { value: 'Leisure/Travel', text: lang.leisureNTravel },
      { value: 'Library', text: lang.library },
      { value: 'Logistics/Procurement', text: lang.logisticsNProcurement },
      { value: 'Luxury Goods/Jewelry', text: lang.luxuryGoodsNJewelry },
      { value: 'Machinery', text: lang.machinery },
      { value: 'Management Consulting', text: lang.managementConsulting },
      { value: 'Maritime', text: lang.maritime },
      { value: 'Market Research', text: lang.marketResearch },
      { value: 'Marketing/Advertising/Sales', text: lang.marketing },
      { value: 'Mechanical or Industrial Engineering', text: lang.mechanical },
      { value: 'Media Production', text: lang.mediaProduction },
      { value: 'Medical Equipment', text: lang.medicalEquipment },
      { value: 'Medical Practice', text: lang.medicalPractice },
      { value: 'Mental Health Care', text: lang.mentalHealthCare },
      { value: 'Military Industry', text: lang.militaryIndustry },
      { value: 'Mining/Metals', text: lang.miningNMetals },
      { value: 'Motion Pictures/Film', text: lang.motionPictures },
      { value: 'Museums/Institutions', text: lang.museumsNInstitutions },
      { value: 'Music', text: lang.music },
      { value: 'Nanotechnology', text: lang.nanotechnology },
      { value: 'Newspapers/Journalism', text: lang.newspapersNJournalism },
      { value: 'Non-Profit/Volunteering', text: lang.nonProfit },
      { value: 'Oil/Energy/Solar/Greentech', text: lang.oilNEnergy },
      { value: 'Online Publishing', text: lang.onlinePublishing },
      { value: 'Other Industry', text: lang.otherIndustry },
      { value: 'Outsourcing/Offshoring', text: lang.outsourcing },
      { value: 'Package/Freight Delivery', text: lang.packageNFreightDelivery },
      { value: 'Packaging/Containers', text: lang.packaging },
      { value: 'Paper/Forest Products', text: lang.paper },
      { value: 'Performing Arts', text: lang.performingArts },
      { value: 'Pharmaceuticals', text: lang.pharmaceuticals },
      { value: 'Philanthropy', text: lang.philanthropy },
      { value: 'Photography', text: lang.photography },
      { value: 'Plastics', text: lang.plastics },
      { value: 'Political Organization', text: lang.politicalOrganization },
      { value: 'Primary/Secondary Education', text: lang.schoolEducation },
      { value: 'Printing', text: lang.printing },
      { value: 'Professional Training', text: lang.professionalTraining },
      { value: 'Program Development', text: lang.programDevelopment },
      { value: 'Public Relations/PR', text: lang.publicRelations },
      { value: 'Public Safety', text: lang.publicSafety },
      { value: 'Publishing Industry', text: lang.publishingIndustry },
      { value: 'Railroad Manufacture', text: lang.railroadManufacture },
      { value: 'Ranching', text: lang.ranching },
      { value: 'Real Estate/Mortgage', text: lang.realEstate },
      { value: 'Recreational Facilities/Services', text: lang.recreationalFacilities },
      { value: 'Religious Institutions', text: lang.religiousInstitutions },
      { value: 'Renewables/Environment', text: lang.renewables },
      { value: 'Research Industry', text: lang.researchIndustry },
      { value: 'Restaurants', text: lang.restaurants },
      { value: 'Retail Industry', text: lang.retailIndustry },
      { value: 'Security/Investigations', text: lang.security },
      { value: 'Semiconductors', text: lang.semiconductors },
      { value: 'Shipbuilding', text: lang.shipbuilding },
      { value: 'Sporting Goods', text: lang.sportingGoods },
      { value: 'Sports', text: lang.sports },
      { value: 'Social Enterprise', text: lang.socialEnterprise },
      { value: 'Staffing/Recruiting', text: lang.staffing },
      { value: 'Supermarkets', text: lang.supermarkets },
      { value: 'Telecommunications', text: lang.telecommunications },
      { value: 'Textiles', text: lang.textiles },
      { value: 'Think Tanks', text: lang.thinkTanks },
      { value: 'Tobacco', text: lang.tobacco },
      { value: 'Translation/Localization', text: lang.translation },
      { value: 'Transportation', text: lang.transportation },
      { value: 'Travel/Tourism', text: lang.tourism },
      { value: 'Utilities', text: lang.utilities },
      { value: 'Venture Capital/VC', text: lang.ventureCapital },
      { value: 'Veterinary', text: lang.veterinary },
      { value: 'Warehousing', text: lang.warehousing },
      { value: 'Wholesale', text: lang.wholesale },
      { value: 'Wine/Spirits', text: lang.wine },
      { value: 'Wireless', text: lang.wireless },
      { value: 'Writing/Editing', text: lang.writing }
    ]
  }

  get sizeOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: '0-5', text: lang.zeroToFive },
      { value: '6-10', text: lang.sixToTen },
      { value: '11-20', text: lang.tenToTwenty },
      { value: '21-50', text: lang.upTofifty },
      { value: '51-100', text: lang.upToHundred },
      { value: '101-200', text: lang.upToTwoHundreds },
      { value: '201-500', text: lang.upToFiveHundreds },
      { value: '500+', text: lang.fiveHundredsAbove }
    ]
  }

  get visibilityOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: 'LGB_colleagues', text: lang.lgbColleagues },
      { value: 'Trans,_genderqueer_colleagues', text: lang.transGenderqueerColleagues },
      { value: 'Allies', text: lang.strongAndVocalAllies }
    ]
  }

  get benefitsOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: 'Same-sex_benefits', text: lang.sameSexBenefits },
      { value: 'Rainbow_families', text: lang.rainbowFamilySupport },
      { value: 'Trans_benefits', text: lang.transBenefits_transitionSupport },
      { value: 'Informal_Benefits', text: lang.informalBenefits }
    ]
  }

  get policiesOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: 'Generic_non-discrimination', text: lang.generic_nonDiscrimination },
      { value: 'Same-sex_policies', text: lang.sameSexPolicies },
      { value: 'Trans_policies', text: lang.transPolicies },
      { value: 'Informal_policies', text: lang.informalPolicies },
      { value: 'Unenforced_policies', text: lang.unenforcedPolicies }
    ]
  }

  get spaceOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: 'Trans_washrooms', text: lang.transWashrooms }
    ]
  }

  get communityOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: 'Allies', text: lang.allies },
      { value: 'Inclusive_culture', text: lang.inclusiveCulture },
      { value: 'Comfortable_calling_out', text: lang.comfortableCallingOut },
      { value: 'LGBTQ_network', text: lang.lgbtqNetwork },
      { value: 'D&I_events', text: lang.dNIEvents }
    ]
  }

  get sponsorshipOptions () {
    let lang = this.$lang.formOptions
    return [
      { value: 'Public_events', text: lang.publicEvents },
      { value: 'Event_sponsorships', text: lang.eventSponsorships },
      { value: 'NGO_sponsorships', text: lang.ngoSponsorships },
      { value: 'Advocacy', text: lang.advocacy }
    ]
  }
}

export default FormOptions
