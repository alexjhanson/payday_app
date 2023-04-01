import './Form.scss';

export default function Form(props) {
    return (  
        <div className="mask">
            <div className="form" onSubmit={e => e.preventDefault()}>
                <button className="form__cxl-btn scale-btn" onClick={() => props.toggleForm()}>X</button>
                {props.render}
            </div>
        </div>
    );
}
 
