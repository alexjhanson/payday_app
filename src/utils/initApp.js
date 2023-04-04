

export default function initApp(setAppState) {
     fetch('http://localhost:3001/employees')
        .then(res => res.json())
        .then(employee => setAppState(employee));
}