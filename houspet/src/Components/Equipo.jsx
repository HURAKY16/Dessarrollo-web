import React from "react";
import Navbar from "./Navbar";

function Equipo() {
    return (
        <>
        <Navbar/>
        <div className="body2">
        <h1 className="titulo2"> Nuestros equipos</h1>
            <div>
                <h1 className="subtitulos">Sobre nostros:</h1>
                <p className="parrafos">En nuestra veterinaria nos dedicamos con amor y compromiso al cuidado de tus mascotas. Somos un equipo de profesionales apasionados por los animales, que trabaja cada día para brindarles atención médica de calidad, en un ambiente cálido y confiable.
                    Ofrecemos servicios de consulta general, vacunación, cirugías, desparasitación, y mucho más.
                    Sabemos lo importantes que son tus compañeros de cuatro patas, por eso los tratamos como parte de nuestra familia. ¡Tu mascota está en buenas manos con nosotros!</p>
            </div>

            <section id="Historias" className="recuadrosvarios">
                <div className="recuadros">
                    <h1>1. Veterinario/a clínico principal</h1>
                    <ul>
                        <li>Realiza consultas, diagnósticos, tratamientos</li>
                        <li>Cirugías menores, vacunación, etc.</li>
                        <li>Puede ser el dueño/a también si sos vos.</li>
                    </ul>
                </div>
                <div className="recuadros">
                    <h1>2. Asistente o auxiliar veterinario</h1>
                    <p>Luna era una gatita tímida que pasó meses sin ser adoptada. Todos decían que era muy callada. Pero cuando Marta la conoció, supo que eran el match perfecto. Ahora Luna vive entre plantas, libros y mimos infinitos.
                        "No hace falta que diga mucho… con sus ronroneos me lo dice todo" - Marta</p>
                </div>
                <div className="recuadros">
                    <h1>Rocky, el guerrero de cuatro patas</h1>
                    <p>Rocky fue encontrado con una pata lastimada y una mirada triste, tras haber vivido solo en las calles durante meses. Al principio, no dejaba que nadie se acercara. Pero poco a poco, con cuidados, paseos suaves y muchos premios, Rocky volvió a confiar.
                        Hoy corre feliz por la playa junto a su nueva familia, que lo adoptó sin dudar cuando vieron su foto.
                        "Es fuerte, noble y amoroso. Rocky no solo sanó su pata… también sanó una parte de nosotros" - Familia Gómez</p>
                </div>
            </section>
        </div>
        </>
    );
}
export default Equipo;