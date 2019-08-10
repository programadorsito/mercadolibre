import React from 'react';

class Barra extends React.Component{

    state={term:''};//no es trabajo del Barra hacer la busqueda con este term (lo que el usuario ingresa), por eso debeos pasarselo al componente padre(App)

    onFormSubmit=event=>{

        event.preventDefault();//para que la pagina no se refresque cada vez que presionamos enter
        this.props.onSubmit(this.state.term); //referencia a la funcion que esta en App.js como props de Barra
    }

    render(){

        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <h6>Buscar producto</h6>
                    <div className="field">
                        <input type="text" placeholder="Buscar producto..." value={this.state.term} onChange={(event)=>this.setState({term: event.target.value})}/>
                    </div>
                </form>
            </div>
            );

    }

}
export default Barra;