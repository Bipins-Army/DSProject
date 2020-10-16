var app = new Vue({
  el: '#person_certificationPage',
  data: {
    person_certification: [{
      CertificationID: "",
      PersonalID: "",
      certificationStatus: "",
      expirationDate: "",
    }],
    newPerson_Certification: {
      CertificationID: "",
      PersonalID: "",
      certificationStatus: "",
      expirationDate: "",
    },
  },

  methods: {
    fetchPerson_Certification() {
      fetch('api/Person_Certification/')
      .then(response => response.json())
      .then(json => {
        this.person_certification=json;
        console.log(this.person_certification);
      });
    },
    createPerson_Certification(){
      //make a line for getting the // ID
      fetch('api/Person_Certification/createPC.php',{
      method:'POST',
      body: JSON.stringify(this.newPerson_Certification),
      headers: {
        "CONTENT_TYPE": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:", json);
      this.person_certification.push(json[0]);
      this.newPerson_Certification = this.newPerson_CertificationData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newPerson_Certification);
  },
  newPerson_CertificationData() {
    return {
      CertificationID: "",
      PersonalID: "",
      certificationStatus: "",
      expirationDate: "",
    }
  }
},
created() {
  this.fetchPerson_Certification();
}
}
);
