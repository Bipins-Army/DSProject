var app = new Vue({
  el: '#numberPage',
  data: {
    number: [{
      PersonalID:'',
      type: '',
      phonenumber: ''
    }],
    newNumber: {
      PersonalID:'',
      type: '',
      phonenumber: ''
    }
  },
  created() {
    this.fetchnUser();
  },

  methods: {
    fetchnUser() {
      fetch('api/phone/index.php')
      .then(response => response.json())
      .then(json => {
        this.number=json;
        console.log(this.number);
      });
    },
    createNumber( ){
      //make a line for getting the // ID
      fetch('api/phone/create_phone.php',{
      method:'POST',
      body: JSON.stringify(this.newNumber),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      this.number.push(json[0]);
      this.newNumber = this.newNumberData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newNumber);
  },
  newNumberData() {
    return {
      PersonalID:'',
      type: '',
      phonenumber: ''
    }
  }
}

},
)
