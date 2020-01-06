import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import App from './App';

class egreso extends React.Component {

    constructor() {
        super()
        this.state =
        {
            reporte: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/Crear_Estu")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                var estu = []
                var asi = []
                for(var i=0;i<data.length;i++){
                    if(data.pago===true){
                        asi.push(data[i])
                    }else{
                        estu.push(data[i])
                    }
                }
                document.getElementById("noEstudiantes").value = estu.length;
                document.getElementById("noAsistentes").value = asi.length;
            })
    }

    generarPdf(e) {
    }

    


    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card carta4 mx-auto mb-3 text-white bg-primary">
                        <div className="card-header">Estudiantes vs Asistentes</div>
                        <div className="card-body">
                            <div className="form-group mx-auto">
                                <label htmlFor="noAsistentes">No de asistentes</label>
                                <input readOnly type="number" className="form-control" id="noAsistentes" />
                            </div>
                            <div className="form-group mx-auto">
                                <label htmlFor="noEstudiantes">No de estudiantes</label>
                                <input readOnly type="number" className="form-control" id="noEstudiantes" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {App}
                    <button type="button" className="btn but btn-primary" onClick={e=>this.generarPdf(e)}>Generar pdf</button>
                </div>
            </div>
        )
    };
}

export default egreso;