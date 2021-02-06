import React from "react";
import img1 from "../../img/ironman.jpg";
import img2 from "../../img/collie.jpg";
import img3 from "../../img/Pink_Floyd.jpg";
import img4 from "../../img/tequila.jpg";

export function Card() {
	return (
		<div className="d-flex justify-content-around">
			<div className="card mx-3" style={{ width: "18rem" }}>
				<img
					src={img2}
					className="card-img-top"
					alt="..."
					height="266.23px"
				/>
				<div className="card-body">
					<h5 className="card-title">
						Rough Collie(Collie de pelo largo)
					</h5>
					<p className="card-text">
						Soy el orgulloso dueño de una rough collie(Collie de
						pelo largo), El Collie de pelo largo o Rough Collie es
						una raza de perro de tamaño medio a grande que en su
						forma original era un tipo de Collie criado en Escocia
						para el pastoreo. Originario del siglo XIX, hoy en día
						es bien conocido a través de las obras de Albert Payson
						Terhune y la novela Lassie, así como por varios
						programas televisivos y películas.
					</p>
					<a
						href="https://es.wikipedia.org/wiki/Collie_de_pelo_largo"
						className="btn btn-info">
						Aprende más
					</a>
				</div>
			</div>

			<div className="card mx-3" style={{ width: "18rem" }}>
				<img height="266.23px" src={img1} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">Iron Man</h5>
					<p className="card-text">
						Iron Man es mi superhéroe favorito. Iron Man (conocido
						en español como El Hombre de Hierro) es un superhéroe
						ficticio que aparece en los cómics estadounidenses
						publicados por Marvel Comics. El personaje fue cocreado
						por el escritor y editor Stan Lee, desarrollado por el
						guionista Larry Lieber y diseñado por los artistas Don
						Heck y Jack Kirby. Hizo su primera aparición en Tales of
						Suspense #39 (marzo de 1963).
						<br />
						<br />
					</p>
					<a
						href="https://es.wikipedia.org/wiki/Iron_Man"
						className="btn btn-info">
						Aprende más
					</a>
				</div>
			</div>

			<div className="card mx-3" style={{ width: "18rem" }}>
				<img
					src={img3}
					className="card-img-top"
					alt="..."
					height="266.23px"
				/>
				<div className="card-body">
					<h5 className="card-title">Pink Floyd</h5>
					<p className="card-text">
						Pink Floyd es mi Banda favorita. Pink Floyd fue una
						banda de rock británica, fundada en Londres en 1965. Es
						considerada un icono cultural del siglo xx y una de las
						bandas más influyentes y aclamadas en la historia de la
						música, que obtuvo gran popularidad gracias a su música
						psicodélica que evolucionó hacia el rock progresivo y
						rock sinfónico con el paso del tiempo. Es conocida por
						sus canciones de alto contenido filosófico.
					</p>
					<a
						href="https://es.wikipedia.org/wiki/Pink_Floyd"
						className="btn btn-info">
						Aprende más
					</a>
				</div>
			</div>

			<div className="card mx-3" style={{ width: "18rem" }}>
				<img
					src={img4}
					className="card-img-top"
					alt="..."
					height="266.23px"
				/>
				<div className="card-body">
					<h5 className="card-title">Tequila</h5>
					<p className="card-text">
						Mi bebida alcoholica favorita es el Tequila. El tequila
						es una bebida alcohólica obtenida del destilado,
						originaria de Tequila, en el estado de Jalisco, México.
						Se elabora a partir de la fermentación y destilado - al
						igual que el mezcal, el cual también tiene su origen en
						Jalisco- del jugo extraído del agave, en particular el
						llamado Agave Azul (Agave tequilana , variedad Azul).
						<br />
						<br />
						<br />
					</p>
					<a
						href="https://es.wikipedia.org/wiki/Tequila"
						className="btn btn-info">
						Aprende más
					</a>
				</div>
			</div>
		</div>
	);
}
