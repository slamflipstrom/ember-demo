import DS from "ember-data";

//define the Contact model
var Contact = DS.Model.extend({
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  address: DS.attr("string"),
  city: DS.attr("string"),
  state: DS.attr("string"),
  country: DS.attr("string"),
  zip: DS.attr("string"),
  phone: DS.attr("string"),
  email: DS.attr("string")
});

//Create Contact fixtures
Contact.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: "John",
      lastName: "Elway",
      address: "4529 Bronco Blvd",
      city: "Denver",
      state: "Colorado",
      country: "United States",
      zip: "80205",
      phone: "303-555-5555",
      email: "jelway@broncos.com"
    },
    {
      id: 2,
      firstName: "Leslie",
      lastName: "Knope",
      address: "7233 Franklin St.",
      city: "Pawnee",
      state: "Indiana",
      country: "United States",
      zip: "78136",
      phone: "888-234-5533",
      email: "lknope@pawnee.net"
    },
    {
      id: 3,
      firstName: "Elon",
      lastName: "Musk",
      address: "4529 Tesla Blvd",
      city: "Los Angeles",
      state: "CA",
      country: "United States",
      zip: "48943",
      phone: "901-837-5585",
      email: "elon@spacex.com"
    },
    {
      id: 4,
      firstName: "Alex",
      lastName: "Morgan",
      address: "7233 Franklin St.",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      zip: "90285",
      phone: "651-777-5555",
      email: "amorgan@ussoccer.com"
    },
    {
      id: 5,
      firstName: "Laura",
      lastName: "Palmer",
      address: "708 33rd St.",
      city: "Twin Peaks",
      state: "Washington",
      country: "United States",
      zip: "34822",
      phone: "206-823-4444",
      email: "bobbysgurl@loglady.com"
    },
    {
      id: 6,
      firstName: "Rick",
      lastName: "Grimes",
      address: "9765 2nd Ave",
      city: "King County",
      state: "Georgia",
      country: "United States",
      zip: "74211",
      phone: "745-652-4412",
      email: "cuddlykitten@hotmail.com"
    }
  ]
});

export default Contact;
