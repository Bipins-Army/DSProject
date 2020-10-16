var app = new Vue({
  el: '#PersonPage',
  data: {
    persons: [{
      personalID:'',
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
    }],
    newPerson: {
      personalID:'',
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
    }
  },

  methods: {
    fetchUser() {
      fetch('api/person/')
      .then(response => response.json())
      .then(json => {
        this.persons=json;
        console.log(this.persons);
      });
    },
    createPerson(){
      this.newPerson.PersonalID = (this.newPerson.firstName.substring(0,1,2,3,4,5,6,7,8,9,10,11,12)+this.newPerson.lastName+this.newPerson.street+this.newPerson.city+this.newPerson.zipcode+this.newPerson.email+this.newPerson.dateofBirth+this.newPerson.startDate+this.newPerson.gender+this.newPerson.postion+this.newPerson.radioNumber+this.newPerson.stationNumber+this.newPerson.isActive).toLowerCase();
      fetch('api/person/create_person.php',{
      method:'POST',
      body: JSON.stringify(this.newPerson),
      headers: {
        "CONTENT_TYPE": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:", json);
      this.person.push(json[0]);
     this.newPerson = this.newPersonData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newPerson);
  },
  newPersonData() {
    return {
      personalID:'',
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
    }
  }
},
created() {
  this.fetchUser();
}
});
