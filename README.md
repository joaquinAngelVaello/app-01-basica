

# Ejercicio Básico de Angular

Este es un ejercicio con los siguientes elementos.

- crear una aplicación nueva.

```
ng new basica
```

Dimos la opción a crear el archivo de rutas.

- Creamos el primer componente

```
ng g c colegios
```

- Creamos el primer servicio

```
ng g s services/colegios
```

## Conceptos nuevos.

Directivas estructurales *ngFor, *ngIf
Usamos en el html la interpolación de string con {{ expesión válida de
javascript}}
Otro concepto fué el de templates literales con ``

Creamos en el componente unos eventos para añadir o borrar colegios.

Vimos algo del ciclo de vida de los componentes de angular. En nuestro caso
OnInit ( para cuando se carga un componente )

Usamos en el html ng-template

Inyectamos el servicio en el componente.