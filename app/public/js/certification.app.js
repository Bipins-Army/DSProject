var app = new Vue({
  el: '#certificationPage',
  data: {
<<<<<<< HEAD
    certification: [{
      CertificationID:'',
      certifyingAgency: '',
      certificationName: '',
      standardExpiry: ''
    }],
    newCertification: {
      CertificationID:'',
      certifyingAgency: '',
      certificationName: '',
      standardExpiry: ''
    }
=======
    certification: {
      CertificationID:"",
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: ""
    },
    newCertification: {
      CertificationID:"",
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: ""
    }
  },
  created() {
    this.fetchUser();
>>>>>>> a49806df0074ee313b9a88b34b5e603c170c61f1
  },

  methods: {
    fetchUser() {
      fetch('api/Certification/index.php')
      .then(response => response.json() )
      .then(json => {
        this.certification=json;
        console.log(this.certification);
      });
    },
    createCertification( ){
      //make a line for getting the // ID
      fetch('api/Certification/create_cert.php',{
      method:'POST',
      body: JSON.stringify(this.newCertification),
      headers: {
        "CONTENT_TYPE": "application/json; charset=utf-8"
<<<<<<< HEAD
      }
    })
    .then( response => response.json())
=======
      }}
    )
    .then( response => response.json() )
>>>>>>> a49806df0074ee313b9a88b34b5e603c170c61f1
    .then( json => {
      console.log("Returned from post:", json);
      this.certification=json;
      this.newCertification = this.newCertificationData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newCertification);
  },
<<<<<<< HEAD
  newCertificationData() {
    return {
      CertificationID:"",
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: ""
    }
=======
newCertificationData(){
  return{
    CertificationID:"",
    certifyingAgency: "",
    certificationName: "",
    standardExpiry: ""
>>>>>>> a49806df0074ee313b9a88b34b5e603c170c61f1
  }
}

},
})
