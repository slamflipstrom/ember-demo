import Ember from "ember";

export default Ember.Controller.extend({
    selectedCountry: null,
    currentCities: null,
    countries: [
        {
            name: 'United States',
            states: [],
            cities: ['Chicago', 'Miami']
        },
        {
            name: 'Brazil',
            cities: ['Sao Paulo', 'Rio de Janeiro']
        }
    ],        
    selectedCountryChanged: function() {        
        this.set('currentCities', this.get('selectedCountry.cities'));    
    }.observes('selectedCountry') 
});
