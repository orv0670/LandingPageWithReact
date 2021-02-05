import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron mx-3">
			<h1 className="display-4">
				Hola a todos!! Esta es mi primera app en React!! Espero la
				disfruten
			</h1>
			<p className="lead">
				React es una biblioteca Javascript para crear interfaces de
				usuario.
			</p>
			<hr className="my-4" />
			<p>
				React es mantenido por Facebook y la comunidad de software
				libre. En el proyecto hay más de mil desarrolladores libres.
			</p>
			<a
				className="btn btn-primary btn-lg"
				href="https://es.reactjs.org/"
				role="button">
				Aprende mas sobre React aqui!!
			</a>
		</div>
	);
}
