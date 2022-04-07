// Suerte :)


Vue.createApp({
    data() {
      return {
        countries: [],
        search:'',
        region:''
      }     
    },
    created() {
        this.countries=this.fetchData();
    },
    methods: {
        async fetchData(){
            const response = await fetch("https://restcountries.com/v3.1/all");
            this.countries = await response.json();
        },
        updateSearch(e){
            this.search=e.target.value;
            console.log(e.target);
            if (this.search!='') {
                this.countries=this.countries.filter((c)=>(c.name.common.toLowerCase()).includes(this.search));
            }  
            console.log(this.countries.length);
        },
        updateRegion(i){
            this.region=i.target.value;
            if (this.region!='' || this.region!='all') {
                this.countries=this.countries.filter((c)=>c.region.toLowerCase()==this.region);
            }                      
            console.log(this.countries.length,this.region);
        }
    },
  }).mount('#app')
