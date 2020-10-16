var app = new Vue({
  el: '#Person_Page',
  data: {
    Person: [{
      firstName:'',
      lastName:'',
      street:'',
      city:'',
      state:'',
      zipcode:'',
      email:'',
      dateofBirth:'',
      startDate:'',
      gender:'',
      position:'',
      radioNumber:'',
      stationNumber:'',
      isActive:''
    }]

  },

  methods: {
    fetchUser()) {
      fetch('api/person/')
      .then(response => response.json())
      .then(json => {
        this.Person=json;
        console.log(this.Person);
      });
    },
    createPerson(){
      //make a line for getting the // ID
      fetch('api/Person/get_person.php',{
      method:'POST',
      body: JSON.stringify(this.newUser),
      headers: {
        "CONTENT_TYPE": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:", json);
      this.certification.push(json[0]);
      this.newCertification = this.newCertificationData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newCertification);
  },
  newCertificationData() {
    return {
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: "",
    }
  }
},
created() {
  this.fetchCertification();
}
}
);
