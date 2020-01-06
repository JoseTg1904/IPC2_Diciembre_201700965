import React from 'react';
import Barra from './Barra_Admin';

class Estus_Info extends React.Component {

    constructor() {
        super();

        this.state = {
            admins: [],
            aux: [],
            actis: []
        };
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    componentDidMount() {
        this.obtenerDatos()
    }

    generarPdf() {

    }

    obtenerDatos() {
        fetch("http://localhost:4000/Puntuacion")
            .then(res => res.json())
            .then(data => {
                var aux=[]
                for(var i=0;i<data.length;i++){
                    if(data[i]['tipo']==="Visita tecnica"){
                        aux.push(data[i])
                    }
                }
                var numero = 0;
                for(i=0;i<aux.length;i++){
                    numero = 0;
                    if(aux[i]['puntuaciones'].length>0){
                        for(var j=0;j<aux[i]['puntuaciones'].length;j++){
                            numero = numero + Number(aux[i]['puntuaciones'][j]['puntuacion'])
                        }
                        numero = numero / aux[i]['puntuaciones'].length
                        aux[i]['puntuaciones'] = numero
                    }
                }
                this.ordenarDes(aux,'puntuaciones')
                aux=[]
            });
    }

    ordenarDes(arreglo, parametro) {
        arreglo.sort(function (a, b) {
            var x = a[parametro], y= b[parametro]
            return ( (x>y) ? -1 : ((x<y)?1:0) )
        });
        this.setState({admins:arreglo})
     }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Puntuacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.nick}>
                                        <td>{admin.descripcion}</td>
                                        <td>{admin.puntuaciones}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="row justify-content-center">
                    <button type="button" className="btn but btn-primary" onClick={this.generarPdf}>Generar pdf</button>
                </div>
            </div>
        )
    }
}

export default Estus_Info;