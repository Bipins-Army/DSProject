editpersonapp = new Vue ({
  el: '#editperson',
  data: {
    editperson: []
  },
  methods: {
    editPerson(evt){
      fetch('api/person/update_mem.php', {
          method: 'POST',
          body: JSON.stringify(this.editperson),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
    },

    editPersonData() {
      this.editperson={
        PersonalID:'',
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
    this.editPersonData();
}
});
