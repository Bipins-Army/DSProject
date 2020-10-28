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
    createPersonList: {
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
  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
    console.log("reached here");
    fetch('api/person/index.php')
    .then(response => response.json())
    .then(json => {
      this.persons=json;
    console.log(this.persons);
      });
    },
    createPerson(){
      fetch('api/person/create_person.php',{
      method:'POST',
      body: JSON.stringify(this.createPersonList),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:", json);
      this.persons.push(json[0]);
     this.createPersonList = this.newPersonData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.createPersonList);
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
  },
    formatDate(d){
      return moment(d).format("MMMM Do YYYY")
    }
  }
})
