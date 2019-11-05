import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class EstudentsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            carnet: "",
            horario: ""
        }
    }

    handleChage = (e) => {
        let student = {
            name: this.state.name,
            carnet: this.state.carnet,
            horario: this.state.horario,
            tarde: this.state.tarde,
            eliminar: this.state.eliminar
        }
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <td>Nombre</td>
                <input type="text" name="name" onChange={this.handleChage}></input>


                <td>Carnet</td>
                <input type="text" name="carnet" onChange={this.handleChage}></input>


                <td>Hora de Laboratorio</td>
                <ListHorario></ListHorario>

                <input type="checkbox" class="custom-control-input" id="late_switch"></input>
                <label class="custom-control-label" for="late_switch">Llegó tarde</label>

                <br></br>
                <br></br>

                <button onClick={(e) => {
                    e.preventDefault();
                    this.props.onSubmit(this.state);
                }}>Ingresar</button>

               

            </form>
        );
    }
}

class ListHorario extends React.Component {
    render() {
        return (
            <select name="schedule" class="form-control" id="schedule_field">
                <option>Lunes de 9:00 a 11.00</option>
                <option>Martes de 13:30 a 15:30</option>
                <option>Miércoles de 9:00 a 11.00</option>
                <option>Jueves de 13:30 a 15:30</option>
                <option>Viernes de 9:00 a 11.00</option>
                <option>Viernes de 15:30 a 17:30</option>
            </select>
        );
    }
}

class ListEstudents extends React.Component {
    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Carnet</th>
                        <th scope="col">Horario de laboratorio</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.studentList.map(student => {
                        return (
                            <tr>
                                <td>{student.name}</td>
                                <td>{student.carnet}</td>
                                <td>{student.horario}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            estudiantes: []
        };
    }

    handlesubmit(estudiante) {
        console.log(estudiante);

        const aux = this.state.estudiantes.slice();

        this.setState({
            estudiantes: aux.concat(estudiante)
        });
    }

    render() {
        return (
            <div>
                <h1>Registro de Laboratorio</h1>
                <EstudentsForm onSubmit={(estudiante) => { this.handlesubmit(estudiante) }}></EstudentsForm>
                <ListEstudents studentList={this.state.estudiantes}></ListEstudents>
            </div>
        );


    }
}

ReactDOM.render(<App />, document.getElementById('root'));

