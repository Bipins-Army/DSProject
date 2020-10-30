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
    },
    PersonID:{},
  },
  created() {
    this.fetchPUser();
  },

  methods: {
    fetchPUser() {
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
      this.persons=json;
     this.createPersonList = this.newPersonData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.createPersonList);
  },
  deleteMember(){
  console.log(this.PersonID)
  fetch('api/person/delete_mem.php', {
      method: 'POST',
      body: JSON.stringify(this.PersonID),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })

  console.log("Creating (POSTing)...!");
  console.log(this.PersonID);
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
      return moment(d).format("MMMM Do YYYY");
    }
  }
})
