import Ember from 'ember';

export default Ember.Component.extend({
  selectedCountry: null,
  selectedState: null,
    currentStates: null,
    countries: [
        {
            name: 'United States',
            states: ["Alabama",
                     "Alaska",
                     "American Samoa",
                     "Arizona",
                     "Arkansas",
                     "California",
                     "Colorado",
                     "Connecticut",
                     "Delaware",
                     "District Of Columbia",
                     "Federated States Of Micronesia",
                     "Florida",
                     "Georgia",
                     "Guam",
                     "Hawaii",
                     "Idaho",
                     "Illinois",
                     "Indiana",
                     "Iowa",
                     "Kansas",
                     "Kentucky",
                     "Louisiana",
                     "Maine",
                     "Marshall Islands",
                     "Maryland",
                     "Massachusetts",
                     "Michigan",
                     "Minnesota",
                     "Mississippi",
                     "Missouri",
                     "Montana",
                     "Nebraska",
                     "Nevada",
                     "New Hampshire",
                     "New Jersey",
                     "New Mexico",
                     "New York",
                     "North Carolina",
                     "North Dakota",
                     "Northern Mariana Islands",
                     "Ohio",
                     "Oklahoma",
                     "Oregon",
                     "Palau",
                     "Pennsylvania",
                     "Puerto Rico",
                     "Rhode Island",
                     "South Carolina",
                     "South Dakota",
                     "Tennessee",
                     "Texas",
                     "Utah",
                     "Vermont",
                     "Virgin Islands",
                     "Virginia",
                     "Washington",
                     "West Virginia",
                     "Wisconsin",
                     "Wyoming"]
        },
        {
					name: 'Canada',
					states: ['Alberta',
									 'British Columbia',
									 'Manitoba',
									 'Newfoundland',
									 'New Brunswick',
									 'Nova Scotia',
									 'Ontario',
									 'Prince Edward Island',
									 'Quebec',
									 'Saskatchewan']
				},
        {
          name: 'Mexico',
          states: [ 'Distrito Federal',
	                  'Aguascalientes',
	                  'Baja California',
	                  'Baja California Sur',
	                  'Campeche',
	                  'Chiapas',
	                  'Chihuahua',
	                  'Coahuila',
	                  'Colima',
	                  'Durango',
	                  'Guanajuato',
	                  'Guerrero',
	                  'Hidalgo',
	                  'Jalisco',
	                  'Mexico',
	                  'Michoacan',
	                  'Morelos',
	                  'Nayarit',
	                  'Nuevo Leon',
	                  'Oaxaca',
	                  'Puebla',
	                  'Queretaro',
	                  'Quintana Roo',
	                  'San Luis Potosi',
	                  'Sinaloa',
	                  'Sonora',
	                  'Tabasco',
	                  'Tamaulipas',
	                  'Tlaxcala',
	                  'Veracruz',
	                  'Yucatan',

	                  'Zacatecas']
        }
    ],
    selectedCountryChanged: function() {
        this.set('currentStates', this.get('selectedCountry.states'));
        var selectedCountry = this.get('selectedCountry.name');
        this.sendAction('countrySelected', selectedCountry);
    }.observes('selectedCountry'),

    selectedStateChanged: function(){
      if (this.get('selectedState')) {
        this.sendAction('stateSelected', this.get('selectedState'));
      }
    }.observes('selectedState')

  });
