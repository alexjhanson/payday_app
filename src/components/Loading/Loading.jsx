import './Loading.scss';

const Loading = (props) => {
    return ( 
        <div className="loading">
            <div style={{backgroundColor: props.color}}></div>
            <div style={{backgroundColor: props.color}}></div>
            <div style={{backgroundColor: props.color}}></div>
        </div>
     );
}
 
export default Loading;