var app = new Vue({
  el: '#memberPage',
  data: {
    memberList: [],
    activeMember: null,
    memberForm: {},
    newMemberForm: {}
  },
  methods: {
    newMemberData() {
      return {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        email: "",
        dateofBirth: "",
        startDate: "",
        gender: "",
        position: "",
        radioNumber: "",
        stationNumber: "",
        isActive: "",
        sexAtBirth: ""
      }
    },
    handleNewMemberForm( evt ){
      //evt.preventDefault();  // Redundant w/ Vue's submit.prevent
    fetch('api/records/post.php', {
          method:'POST',
          body: JSON.stringify(this.newMemberForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.memberList.push(json[0]);
          this.newMemberForm = this.newMemberData();
        });

        console.log("Creating (POSTing)...!");
        console.log(this.newMemberForm);
      },
      handleMemberForm( evt ) {
        console.log("Member form submitted!");

        if (!this.activeMember) {
          alert("ERROR: No member selected!");
          return false;
        }
        this.memberForm.PersonalID = this.activeMember.PersonalID;

        console.log(this.memberForm);

        fetch('api/records/create.php', {
          method:'POST',
          body: JSON.stringify(this.memberForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from member create:", json);
          this.memberList = json;
          this.newMemberForm = this.newMemberData();
        });
      }
    },
})
