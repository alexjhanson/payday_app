
export default function getEmployee() {
    return fetch('/employees')
            .then(res => res.json())
            .then(result => result[0]);
}