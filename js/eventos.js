new Vue({
    el: '#app',
    data: {
        nombre: '',
        contrasena: '',
        tipoCuenta: 'Estandar',
        eventos: [
            {
                "establecimiento": "Bar Perales",
                "domicilio": "Calle Ancha, 23",
                "fecha": "2025-01-01",
                "contenido": "Año Nuevo - Canta Camela",
            },
            {
                "establecimiento": "Teatro Central",
                "domicilio": "Avenida Principal, 45",
                "fecha": "2025-02-14",
                "contenido": "Día de San Valentín - Obra de Teatro 'Amor y Desamor'",
            }
            // Puedes agregar más eventos aquí.
        ],
        nuevoEvento: { 
            establecimiento: '', 
            domicilio: '', 
            fecha: '', 
            contenido: ''
        },
        calendario: []
    },
    methods: {
        acceder: function() {
            if (this.nombre === 'usuario' && this.contrasena === '123456') {
                this.tipoCuenta = 'administrador';
            } else {
                alert('Credenciales incorrectas');
            }
        },
        agregarEvento: function() {
            this.eventos.push({
                establecimiento: this.nuevoEvento.establecimiento,
                domicilio: this.nuevoEvento.domicilio,
                fecha: this.nuevoEvento.fecha,
                contenido: this.nuevoEvento.contenido,
                cartel: this.nuevoEvento.cartel
            });
            this.nuevoEvento = { establecimiento: '', domicilio: '', fecha: '', contenido: ''};
            this.generarCalendario();
        },
        eliminarEvento: function(fecha) {
            this.eventos = this.eventos.filter(evento => evento.fecha !== fecha);
            this.generarCalendario();
        },
        generarCalendario: function() {
            const meses = [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];
            this.calendario = [];

            for (let mes = 0; mes < 12; mes++) {
                const diasDelMes = new Date(2025, mes + 1, 0).getDate();
                const dias = [];

                for (let dia = 1; dia <= diasDelMes; dia++) {
                    const fecha = `2025-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
                    const evento = this.eventos.find(e => e.fecha === fecha);
                    dias.push({ 
                        dia,  // Solo el día
                        fecha,
                        evento: evento ? evento.evento : null,
                        establecimiento: evento ? evento.establecimiento : null,
                        domicilio: evento ? evento.domicilio : null,
                        contenido: evento ? evento.contenido : null,
                        cartel: evento ? evento.cartel : null
                    });
                }

                this.calendario.push({ mes: mes + 1, nombre: meses[mes], dias });
            }
        }
    },
    mounted() {
        this.generarCalendario();
    }
});
