# 🌈 LGBTQ Glassdoor

## https://LGBTQglassdoor.com

The LGBTQ Glassdoor is a side project developed by Oursky (https://oursky.com/), a software development agency with offices in Hong Kong and Taiwan. The LGBTQ Glassdoor aims to help LGBTQ individuals find inclusive workplaces in Hong Kong. The listings on the website are submitted by individuals, LGBTQ-identified and allies, who feel an organization (a company, NGO, or public agency) is LGBTQ-friendly.

The LGBTQ Glassdoor is an opensource directory created with Oursky's opensource backend, Skygear (https://skygear.io/). Anyone who would like to create a similar directory in their city or country can clone the LGBTQ Glassdoor repo. If you do, let us know!

You can also follow us on Facebook (https://facebook.com/lgbtqglassdoor) and Twitter (https://twitter.com/lgbtqglassdoor).


## Technology

* Backend: [Skygear](https://skygear.io) with Python cloud code
* Frontend: VueJS
* Frontend Template: `vue-bootstrap`

## Folder Structure

The root directory contains a Skygear could functions project, while `public_html` contains the static HTMLs for deployment.

Entry point for cloud function Cloud code is `__init__.py`

The Frontend VueJS project is contained under `/vue-project`.


### Run Development
* `cd vue-project`
* `npm install`
* `npm start`

### Build for production
* `cd vue-project`
* `npm install`
* `npm run build`

The exported build will be at `/dist`, which can be deployed using [`skygear cli`](https://github.com/SkygearIO/skycli).

## Pages
* Landing
* Lising of Companies
* Company details
* Add a new company (Disclaimer, Contributor info, Company Info, Confirm page)
* About us page

## Table Schema
* Contributor
* Company

## CMS

* [CMS at Skygear](https://lgbtq.skygeario.com/cms)

## Localization

* Using [vue-localization](https://github.com/valterlorran/vuejs-localization)
* Please update language text under `/lang`
