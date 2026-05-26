export default function Exercicio7({ fah, kel, cel }) {

    let fahrenheit = Number(fah)
    let kelvin = Number(kel);
    let celsius = Number(cel);

    const fahcal = (cel * 9 / 5) + 32;
    const kelcal = cel + 273.15;

    return (

        <div>
            <br />
            {cel}°C equivale a {fahcal}°F e {kelcal}K
        </div>

)
}
