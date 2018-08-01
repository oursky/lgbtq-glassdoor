class FormOptions {
  static identifyOptions = [
    { value: 'lesbian', text: 'Lesbian', zh: '女同性戀者' },
    { value: 'gay', text: 'Gay', zh: '男同性戀者' },
    { value: 'bisexual', text: 'Bisexual', zh: '雙性戀者' },
    { value: 'trans', text: 'Trans', zh: '跨性別者' },
    { value: 'genderqueer', text: 'Genderqueer', zh: '性別酷兒' },
    { value: 'queer', text: 'Queer', zh: '酷兒' },
    { value: 'ally', text: 'Ally', zh: 'LGBTQ盟友' },
    { value: 'other', text: 'Other', zh: '其他' }
  ]

  static pronounOptions = [
    { value: 'she', text: 'She / Her', zh: '她' },
    { value: 'he', text: 'He / Him', zh: '他' },
    { value: 'they', text: 'They / Them', zh: '他們' }
  ]

  static industryOptions = [
    { value: 'Accounting', text: 'Accounting', zh: '會計' },
    { value: 'Airlines/Aviation', text: 'Airlines/Aviation', zh: '航空/航空' },
    { value: 'Alternative Dispute Resolution', text: 'Alternative Dispute Resolution', zh: '替代性糾紛解決' },
    { value: 'Alternative Medicine', text: 'Alternative Medicine', zh: '替代藥物' },
    { value: 'Animation', text: 'Animation', zh: '動畫' },
    { value: 'Architecture/Planning', text: 'Architecture/Planning', zh: '建築/規劃' },
    { value: 'Arts/Crafts', text: 'Arts/Crafts', zh: '工藝品' },
    { value: 'Automotive', text: 'Automotive', zh: '汽車' },
    { value: 'Aviation/Aerospace', text: 'Aviation/Aerospace', zh: '航空/航天' },
    { value: 'Banking/Mortgage', text: 'Banking/Mortgage', zh: '銀行/抵押貸款' },
    { value: 'Biotechnology/Greentech', text: 'Biotechnology/Greentech ', zh: '生物技術/綠色科技' },
    { value: 'Broadcast Media', text: 'Broadcast Media', zh: '廣播媒體' },
    { value: 'Building Materials', text: 'Building Materials', zh: '建築材料' },
    { value: 'Business Supplies/Equipment', text: 'Business Supplies/Equipment', zh: '商務用品/設備' },
    { value: 'Capital Markets/Hedge Fund/Private Equity', text: 'Capital Markets/Hedge Fund/Private Equity', zh: '資本市場/對沖基金/私募股權' },
    { value: 'Chemicals', text: 'Chemicals', zh: '化學製品' },
    { value: 'Civic/Social Organization', text: 'Civic/Social Organization', zh: '思域/社會組織' },
    { value: 'Civil Engineering', text: 'Civil Engineering', zh: '土木工程' },
    { value: 'Commercial Real Estate', text: 'Commercial Real Estate', zh: '商業房地產' },
    { value: 'Computer Games', text: 'Computer Games', zh: '電腦遊戲' },
    { value: 'Computer Hardware', text: 'Computer Hardware', zh: '電腦硬件' },
    { value: 'Computer Networking', text: 'Computer Networking', zh: '計算機網絡' },
    { value: 'Computer Software Engineering', text: 'Computer Software Engineering', zh: '計算機軟件工程' },
    { value: 'Computer Network Security', text: 'Computer Network Security', zh: '計算機網絡安全' },
    { value: 'Construction', text: 'Construction', zh: '施工' },
    { value: 'Consumer Electronics', text: 'Consumer Electronics', zh: '消費類電子產品' },
    { value: 'Consumer Goods', text: 'Consumer Goods', zh: '消費品 ' },
    { value: 'Consumer Services', text: 'Consumer Services', zh: '消費服務' },
    { value: 'Cosmetics', text: 'Cosmetics', zh: '化妝品 ' },
    { value: 'Co-working spaces / Event Spaces', text: 'Co-working spaces / Event Spaces', zh: '聯合工作空間/活動空間' },
    { value: 'Dairy', text: 'Dairy', zh: '乳業' },
    { value: 'Defense/Space', text: 'Defense/Space', zh: '國防/太空' },
    { value: 'Design', text: 'Design', zh: '設計' },
    { value: 'E-Learning', text: 'E-Learning', zh: '電子學習' },
    { value: 'Education', text: 'Education', zh: '教育' },
    { value: 'Electrical/Electronic Manufacturing ', text: 'Electrical/Electronic Manufacturing', zh: '電氣/電子製造' },
    { value: 'Entertainment/Movie Production', text: 'Entertainment/Movie Production', zh: '娛樂/電影製作' },
    { value: 'Environmental Services', text: 'Environmental Services', zh: '環境服務' },
    { value: 'Events Services', text: 'Events Services', zh: '活動服務' },
    { value: 'Executive Office', text: 'Executive Office', zh: '行政辦公室' },
    { value: 'Facilities Services', text: 'Facilities Services', zh: '設施服務' },
    { value: 'Farming', text: 'Farming', zh: '農業' },
    { value: 'Fashion/Apparel', text: 'Fashion/Apparel', zh: '時尚/服裝' },
    { value: 'Financial Services', text: 'Financial Services', zh: '金融服務' },
    { value: 'Fine Art', text: 'Fine Art', zh: '美術' },
    { value: 'Fishery', text: 'Fishery ', zh: '漁業' },
    { value: 'Food Production', text: 'Food Production', zh: '食品生產' },
    { value: 'Food/Beverages', text: 'Food/Beverages', zh: '食品/飲料' },
    { value: 'Fundraising', text: 'Fundraising', zh: '籌款' },
    { value: 'Furniture', text: 'Furniture', zh: '家具' },
    { value: 'Gambling/Casinos', text: 'Gambling/Casinos', zh: '賭博/賭場' },
    { value: 'Glass/Ceramics/Concrete', text: 'Glass/Ceramics/Concrete', zh: '玻璃/陶瓷/混凝土' },
    { value: 'Government Administration', text: 'Government Administration', zh: '政府管理' },
    { value: 'Government Relations', text: 'Government Relations', zh: '政府關係' },
    { value: 'Graphic Design/Web Design', text: 'Graphic Design/Web Design', zh: '平面設計/網頁設計' },
    { value: 'Health/Fitness', text: 'Health/Fitness', zh: '健康與健身' },
    { value: 'Higher Education/Acadamia', text: 'Higher Education/Acadamia', zh: '高等教育/ Acadamia' },
    { value: 'Hospital/Health Care', text: 'Hospital/Health Care', zh: '醫院/保健' },
    { value: 'Hospitality', text: 'Hospitality', zh: '招待費 ' },
    { value: 'Human Resources/HR', text: 'Human Resources/HR', zh: '人力資源/ HR' },
    { value: 'Import/Export', text: 'Import/Export', zh: '進出口' },
    { value: 'Individual/Family Services', text: 'Individual/Family Services', zh: '個人/家庭服務' },
    { value: 'Industrial Automation', text: 'Industrial Automation', zh: '工業自動化' },
    { value: 'Information Services', text: 'Information Services', zh: '信息服務' },
    { value: 'Information Technology/IT', text: 'Information Technology/IT', zh: '資訊科技/ IT' },
    { value: 'Insurance', text: 'Insurance', zh: '保險' },
    { value: 'International Affairs', text: 'International Affairs', zh: '國際事務' },
    { value: 'International Trade/Development', text: 'International Trade/Development', zh: '國際貿易/發展' },
    { value: 'Internet', text: 'Internet', zh: '互聯網' },
    { value: 'Investment Banking/Venture', text: 'Investment Banking/Venture', zh: '投資銀行/風險' },
    { value: 'Investment Management/Hedge Fund/Private Equity ', text: 'Investment Management/Hedge Fund/Private Equity', zh: '投資管理/對沖基金/私募股權' },
    { value: 'Judiciary', text: 'Judiciary', zh: '司法' },
    { value: 'Law Enforcement ', text: 'Law Enforcement', zh: '執法' },
    { value: 'Law Practice/Law Firms', text: 'Law Practice/Law Firms', zh: '法律實踐/律師事務所' },
    { value: 'Legal Services', text: 'Legal Services', zh: '法律服務' },
    { value: 'Legislative Office', text: 'Legislative Office', zh: '立法機關' },
    { value: 'Leisure/Travel', text: 'Leisure/Travel', zh: '休閒/旅遊' },
    { value: 'Library', text: 'Library', zh: '圖書館' },
    { value: 'Logistics/Procurement', text: 'Logistics/Procurement', zh: '物流/採購' },
    { value: 'Luxury Goods/Jewelry', text: 'Luxury Goods/Jewelry', zh: '奢侈品/珠寶' },
    { value: 'Machinery', text: 'Machinery', zh: '機械' },
    { value: 'Management Consulting', text: 'Management Consulting', zh: '管理諮詢' },
    { value: 'Maritime', text: 'Maritime', zh: '海上' },
    { value: 'Market Research', text: 'Market Research ', zh: '市場調查' },
    { value: 'Marketing/Advertising/Sales', text: 'Marketing/Advertising/Sales', zh: '市場/廣告/銷售' },
    { value: 'Mechanical or Industrial Engineering', text: 'Mechanical or Industrial Engineering', zh: '機械或工業工程 ' },
    { value: 'Media Production', text: 'Media Production', zh: '媒體製作' },
    { value: 'Medical Equipment', text: 'Medical Equipment', zh: '醫用器材' },
    { value: 'Medical Practice', text: 'Medical Practice', zh: '醫療實踐' },
    { value: 'Mental Health Care', text: 'Mental Health Care', zh: '心理保健' },
    { value: 'Military Industry', text: 'Military Industry', zh: '軍工' },
    { value: 'Mining/Metals', text: 'Mining/Metals', zh: '採礦/五金' },
    { value: 'Motion Pictures/Film', text: 'Motion Pictures/Film', zh: '運動圖片/電影 ' },
    { value: 'Museums/Institutions', text: 'Museums/Institutions', zh: '博物館/機構' },
    { value: 'Music', text: 'Music', zh: '音樂' },
    { value: 'Nanotechnology', text: 'Nanotechnology', zh: '納米技術' },
    { value: 'Newspapers/Journalism', text: 'Newspapers/Journalism', zh: '報紙/新聞' },
    { value: 'Non-Profit/Volunteering ', text: 'Non-Profit/Volunteering ', zh: '非營利/志工' },
    { value: 'Oil/Energy/Solar/Greentech', text: 'Oil/Energy/Solar/Greentech', zh: '石油/能源/太陽能/綠色科技' },
    { value: 'Online Publishing', text: 'Online Publishing', zh: '在線出版' },
    { value: 'Other Industry', text: 'Other Industry', zh: '其他行業' },
    { value: 'Outsourcing/Offshoring', text: 'Outsourcing/Offshoring', zh: '外包/ ' },
    { value: 'Package/Freight Delivery', text: 'Package/Freight Delivery', zh: '封裝/提貨' },
    { value: 'Packaging/Containers', text: 'Packaging/Containers', zh: '包裝/容器' },
    { value: 'Paper/Forest Products', text: 'Paper/Forest Products', zh: '紙/林產品' },
    { value: 'Performing Arts ', text: 'Performing Arts ', zh: '表演藝術' },
    { value: 'Pharmaceuticals ', text: 'Pharmaceuticals ', zh: '製藥' },
    { value: 'Philanthropy', text: 'Philanthropy', zh: '慈善事業' },
    { value: 'Photography ', text: 'Photography ', zh: '攝影' },
    { value: 'Plastics', text: 'Plastics', zh: '塑料' },
    { value: 'Political Organization', text: 'Political Organization', zh: '政治機構' },
    { value: 'Primary/Secondary Education', text: 'Primary/Secondary Education', zh: '小學/中學教育' },
    { value: 'Printing', text: 'Printing', zh: '印花' },
    { value: 'Professional Training', text: 'Professional Training', zh: '專業培訓' },
    { value: 'Program Development', text: 'Program Development', zh: '程序開發' },
    { value: 'Public Relations/PR', text: 'Public Relations/PR', zh: '公共關係/公關 ' },
    { value: 'Public Safety', text: 'Public Safety', zh: '公共安全' },
    { value: 'Publishing Industry ', text: 'Publishing Industry', zh: '出版業 ' },
    { value: 'Railroad Manufacture', text: 'Railroad Manufacture', zh: '鐵路建造' },
    { value: 'Ranching', text: 'Ranching', zh: '牧場' },
    { value: 'Real Estate/Mortgage', text: 'Real Estate/Mortgage', zh: '房地產/按揭' },
    { value: 'Recreational Facilities/Services', text: 'Recreational Facilities/Services', zh: '娛樂設施/服務 ' },
    { value: 'Religious Institutions', text: 'Religious Institutions', zh: '宗教機構' },
    { value: 'Renewables/Environment', text: 'Renewables/Environment', zh: '可再生能源/環境' },
    { value: 'Research Industry', text: 'Research Industry', zh: '行業研究' },
    { value: 'Restaurants', text: 'Restaurants', zh: '餐館' },
    { value: 'Retail Industry', text: 'Retail Industry', zh: '零售業' },
    { value: 'Security/Investigations', text: 'Security/Investigations', zh: '安全/調查' },
    { value: 'Semiconductors', text: 'Semiconductors', zh: '半導體 ' },
    { value: 'Shipbuilding', text: 'Shipbuilding', zh: '造船' },
    { value: 'Sporting Goods', text: 'Sporting Goods', zh: '體育用品' },
    { value: 'Sports', text: 'Sports', zh: '體育' },
    { value: 'Social Enterprise', text: 'Social Enterprise', zh: '社會企業' },
    { value: 'Staffing/Recruiting', text: 'Staffing/Recruiting', zh: '人員編制/招聘' },
    { value: 'Supermarkets', text: 'Supermarkets', zh: '超級市場' },
    { value: 'Telecommunications', text: 'Telecommunications', zh: '電訊' },
    { value: 'Textiles', text: 'Textiles', zh: '紡織品' },
    { value: 'Think Tanks', text: 'Think Tanks ', zh: '智庫' },
    { value: 'Tobacco', text: 'Tobacco', zh: '煙草' },
    { value: 'Translation/Localization', text: 'Translation/Localization', zh: '翻譯/本地化' },
    { value: 'Transportation', text: 'Transportation', zh: '運輸' },
    { value: 'Travel/Tourism', text: 'Travel/Tourism', zh: '旅行/旅遊' },
    { value: 'Utilities', text: 'Utilities', zh: '公用事業' },
    { value: 'Venture Capital/VC', text: 'Venture Capital/VC', zh: '風險投資/ VC' },
    { value: 'Veterinary', text: 'Veterinary', zh: '獸醫' },
    { value: 'Warehousing', text: 'Warehousing', zh: '倉儲' },
    { value: 'Wholesale', text: 'Wholesale', zh: '批發' },
    { value: 'Wine/Spirits', text: 'Wine/Spirits', zh: '葡萄酒/烈酒' },
    { value: 'Wireless', text: 'Wireless', zh: '無線' },
    { value: 'Writing/Editing', text: 'Writing/Editing', zh: '寫作/編輯' }
  ]

  static sizeOptions = [
    { value: '0-5', text: '0-5' },
    { value: '6-10', text: '6-10' },
    { value: '11-20', text: '11-20' },
    { value: '21-50', text: '21-50' },
    { value: '51-100', text: '51-100' },
    { value: '101-200', text: '101-200' },
    { value: '201-500', text: '201-500' },
    { value: '500+', text: '500+' }
  ]

  static visibilityOptions = [
    { value: 'LGB_colleagues', text: 'LGB colleagues', zh: '同性戀同事' },
    { value: 'Trans,_genderqueer_colleagues', text: 'Trans / Genderqueer colleagues', zh: '跨性別同事' },
    { value: 'Allies', text: 'Strong and vocal allies', zh: '支持同志的同事' }
  ]

  static benefitsOptions = [
    { value: 'Same-sex_benefits', text: 'Same-sex benefits', zh: '同性戀伴侶褔利' },
    { value: 'Rainbow_families', text: 'Rainbow family support', zh: '彩虹家庭支援' },
    { value: 'Trans_benefits', text: 'Trans benefits / transition support', zh: '跨性別人士褔利' },
    { value: 'Informal_Benefits', text: 'Nothing official, but LGBTQ benefits provided for individual cases.', zh: '非正式的福利' }
  ]

  static policiesOptions = [
    { value: 'Generic_non-discrimination', text: 'Generic non-discrimination', zh: '反歧視政策' },
    { value: 'Same-sex_policies', text: 'Same-sex policies', zh: '同志友善政策' },
    { value: 'Trans_policies', text: 'Trans policies', zh: '跨性別友善政策' },
    { value: 'Informal_policies', text: 'No policies, but leadership actively helps for individual cases.', zh: '非正式的反歧視援助' },
    { value: 'Unenforced_policies', text: 'Has same-sex/trans policies, but they are not enforced.', zh: '有反歧視政策但沒有執行' }
  ]

  static spaceOptions = [
    { value: 'Trans washrooms', text: 'Trans washrooms', zh: '性別友善洗手間' }
  ]

  static communityOptions = [
    { value: 'Allies', text: 'There are allies to turn to for help or raise issues with.', zh: '有同志盟友' },
    { value: 'Inclusive_culture', text: 'Generally an inclusive company.', zh: 'Inclusive culture' },
    { value: 'Comfortable_calling_out', text: 'I feel comfortable calling out discrimination.', zh: 'Inclusive culture' },
    { value: 'LGBTQ_network', text: 'Internal LGBTQ Network', zh: '公司有社群' },
    { value: 'D&I_events', text: 'Internal Diversity & Inclusion Events', zh: 'D&I 活動' }
  ]

  static sponsorshipOptions = [
    { value: 'Public_events', text: 'Hosts public events / LGBTQ initiatives', zh: '舉辦公開活動' },
    { value: 'Event_sponsorships', text: 'Sponsors LGBTQ events', zh: '贊助活動' },
    { value: 'NGO_sponsorships', text: 'Sponsors LGBTQ NGOs', zh: '贊助NGO' },
    { value: 'Advocacy', text: 'Company does public advocacy', zh: '為LGBTQ社群發聲' }
  ]
}

export default FormOptions
