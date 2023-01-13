const { createApp } = Vue
createApp( {
    data() {
        return {
            cardAmazingEvents: null,
            checkboxes: null,
            valueBuscador: "",
            checked: [],
            cardsFiltradas: undefined
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(Response => Response.json() )
        .then(data => {
            if(document.title ==  "upcoming events" ){
                this.cardAmazingEvents = data.events.filter(evento => evento.date > data.currentDate)
                console.log(this.cardAmazingEvents)
            }else if(document.title ==  "past events" ){this.cardAmazingEvents = data.events.filter(evento => evento.date < data.currentDate)
                
            }else {this.cardAmazingEvents = data.events}
            this.cardsFiltradas = this.cardAmazingEvents
            this.checkboxes = [ ... new Set( this.cardAmazingEvents.map(cardAmazingEvents => cardAmazingEvents.category ) ) ]
            console.log(this.cardsFiltradas)
            console.log(this.checkboxes)
        })
        .catch()
    },
    methods:{
        filtroCruzado: function(){
            let filtroPorBuscador = this.cardAmazingEvents.filter(cardAmazingEvents => cardAmazingEvents.name.toLowerCase().includes( this.valueBuscador.toLowerCase() ) )
            let filtroPorChecks = filtroPorBuscador.filter(cardAmazingEvents => this.checked.includes(cardAmazingEvents.category) || this.checked.length === 0 )
            this.cardsFiltradas = filtroPorChecks
        }
    } 
} ).mount("#app")
