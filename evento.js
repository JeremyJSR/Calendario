new Vue({
    el: '#app',
    data: {
        days: Array.from({ length: 30 }, (_, i) => i + 1),
        newEvent: '',
        events: []
    },
    methods: {
        selectDay(day) {
            const event = prompt('Agregar evento para el día ' + day);
            if (event) {
                this.events.push({ day, event });
            }
        },
        addEvent() {
            if (this.newEvent) {
                const day = prompt('¿Para qué día quieres agregar el evento?');
                if (day && day > 0 && day <= 30) {
                    this.events.push({ day: parseInt(day), event: this.newEvent });
                    this.newEvent = '';
                } else {
                    alert('Día inválido');
                }
            }
        },
        removeEvent() {
            const day = prompt('¿De qué día quieres eliminar el evento?');
            if (day && day > 0 && day <= 30) {
                this.events = this.events.filter(e => e.day !== parseInt(day));
            } else {
                alert('Día inválido');
            }
        }
    }
});
