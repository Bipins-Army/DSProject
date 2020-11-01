var app = new Vue({
  el: '#personCertificationPage',
  data: {
    personCertification: [{
      CertificationID: "",
      PersonalID: "",
      certificationStatus: "",
      expirationDate: "",
    }],
    newPersonCertification: {
      CertificationID: "",
      PersonalID: "",
      certificationStatus: "",
      expirationDate: "",
    },
  },
  created() {
    this.fetchPersonCertification();
  },
  methods: {
    fetchPersonCertification() {
      fetch('api/Person_Certification/')
      .then(response => response.json())
      .then(json => {
        this.personCertification=json;
        console.log(this.personCertification);
      });
    },
    createPersonCertification(){
      //make a line for getting the // ID
      fetch('api/Person_Certification/createPC.php',{
      method:'POST',
      body: JSON.stringify(this.newPersonCertification),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:", json);
      this.personCertification.push(json[0]);
      this.newPersonCertification = this.newPerson_CertificationData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newPersonCertification);
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

}
);
