import "./style.css"

const ListaSuspensa = (props) => {
    return (
        <>
        <div className="times">
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                valor={props.valor}
                required={props.required} 
                className="itens-select">
                    <option value=""></option>
                    {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
        </>
    )
}

export default ListaSuspensa