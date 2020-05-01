
#  <a href="https://pwsz.jetbrains.space/p/nos/checklists">![Space_Icon](./docs/space_icon.svg)</a>[M-Book Project](https://pwsz.jetbrains.space/p/nos/checklists)

### Koncept
* Baza Tytułów Książek (ok. 10 MB) jest przechowywana lokalnie 
* Aplikacja PWA umożliwia w pełni wyszukiwanie książek offline (po pierwszym pobraniu bazy oczywiście) :smirk: :innocent:

### Projekty wzorcowe 

* Pierwsza iteracja [projektu](https://github.com/informacja/szukaj) [**Katalogu ZST**](https://katalog.zst-tarnow.pl) - strona internetowa (like OPAC)
* [Passionate People](https://passionatepeople.io/#our-expertise)
* [Nuxt Cheat Sheet](https://github.com/Mario62/PWA_TS/raw/dev/docs/Nuxtjs-Cheat-Sheet.pdf)

## Schemat bazy danych
![vue_crate_app](./docs/All.png)


#### Uruchamianie aplikacji np. w WebStorm
![vue_crate_app](./docs/inteli.png)


#### Uruchamianie aplikacji np. w WebStorm
![vue_crate_app_nice](./docs/inteli.png) 

 
### Klasy w Vue 
![Klasy](./docs/class.png)

## RegExp

> https://pythex.org


```ts
    (3[12][0-9]{3}).+\\x22([A-Za-z]+.[a-zA-Z]+)\\x22
```
> https://regex101.com

> [pwsz.jetbrains.space](https://pwsz.jetbrains.space)
> 
> [Chat](https://pwsz.jetbrains.space/im/group/1Bdbrz1w1iEc)

> [Commits](https://pwsz.jetbrains.space/p/nos/code/vuePWA/commits)

```puml
A -> B
```
```mermaid
classDiagram
      Animal <|-- Duck
      Animal <|-- Fish
      Animal <|-- Zebra
      Animal : +int age
      Animal : +String gender
      Animal: +isMammal()
      Animal: +mate()
      class Duck{
          +String beakColor
          +swim()
          +quack()
      }
      class Fish{
          -int sizeInFeet
          -canEat()
      }
      class Zebra{
          +bool is_wild
          +run()
      }
```
