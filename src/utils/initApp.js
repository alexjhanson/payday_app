

export default function initApp(setAppState) {
     fetch('/employees')
        .then(res => res.json())
        .then(employee => setAppState(employee));
}