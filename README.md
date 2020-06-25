# <a href="https://pwsz.jetbrains.space/p/nos/checklists">![Space_Icon](./docs/space_icon.svg)</a>[M-Book Project](https://pwsz.jetbrains.space/p/nos/checklists)

[
  ![Authors](docs/authors.png)
](https://docs.google.com/document/d/1wINwCWPQtst-vIdEWe1Ug0ty0_JZGyYkeoQt_ZbO-8c/edit?usp=sharing)

### Koncept

- Baza Tytułów Książek (ok. 10 MB) jest przechowywana lokalnie
- Aplikacja PWA umożliwia w pełni wyszukiwanie książek offline (po pierwszym pobraniu bazy oczywiście) :smirk: :innocent:

### Projekty wzorcowe, pomoce naukowe, przydasie

- Pierwsza iteracja [projektu](https://github.com/informacja/szukaj) [**Katalogu ZST**](https://katalog.zst-tarnow.pl) - strona internetowa (like OPAC)
- [Stackblitz Online Editor](https://stackblitz.com- )
- [Bootstrap-vue.org](https://bootstrap-vue.org/docs/components/badge)
- [Passionate People](https://passionatepeople.io/#our-expertise)
- [Nuxt Cheat Sheet](https://github.com/Mario62/PWA_TS/blob/dev/docs/Nuxtjs-Cheat-Sheet.pdf)
  - [Vue Mastery](https://medium.com/vue-mastery)
  - [Nuxt github examples ](https://github.com/nuxt/nuxt.js/tree/dev/examples)
  * [PWA Nuxt workbook](https://pwa.nuxtjs.org/modules/workbox.html#options)
  * [async-data](https://nuxtjs.org/guide/async-data)
  * [awesome-nux](https://github.com/nuxt-community/awesome-nux)
  * [nuxtServerInit](https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action)
  + [25 min NuxtJS data, asyncData, fetch and nuxtServerInit](https://www.youtube.com/watch?v=NDVCquHbFIM)
- [Posts About Vue.js](https://alligator.io/vuejs/)
- [Example interfaces](https://alligator.io/vuejs/using-typescript-with-vue/)
- [TS Json](http://choly.ca/post/typescript-json/)
## Schemat bazy danych

![vue_crate_app](./docs/All.png)

## RegExp

> https://pythex.org
> https://regex101.com

```r
    (3[12][0-9]{3}).+\\x22([A-Za-z]+.[a-zA-Z]+)\\x22
```

> For notepad++ Szukany tekst
```ts
    ^(\d{1,6})\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\d]+)
```
   > zamień na
```json
    {id:"$1",author:"$3",title:"$4",publisher:"$5",city:"$6",year:"$7",category:"$8" }\n
```
> GIF here ....

[StackOverflow przykład](https://stackoverflow.com/questions/2013124/regex-matching-up-to-the-first-occurrence-of-a-character)
[perl komentarze w wyrazeniach regularnych](https://linuxexpert.pl/posts/2694/perl-komentarze-w-wyrazeniach-regularnych)
[WYRAŻENIA REGULARNE DLA NIEPROGRAMISTÓW](http://namiekko.pl/2016/12/09/wyrazenia-regularne-dla-nieprogramistow)

## W momencie robienia commit-a kod jest sprawdzany :)

![vue_crate_app](./docs/lint.png)


### Decyzje

- https://vuetifyjs.com/en/getting-started/pre-made-layouts/ (nav or sied bar)
- https://vue.mdbootstrap.com/#/tables/datatableJSON (reprezentacja wyników tabela lub karty)

https://bootstrap-vue.org/docs/reference/starter-templates (global compotent)


## GUI

- https://mdbootstrap.com/docs/jquery/forms/search/
## Istotne katalogi app/:

+ compotent
+ page
+ static

### TODO

###### FronEnd:

- JEDNA WYSZUKAJKA
- Podpowiedzi z vuex store
- Mutacja
- Zapis do store (przez mutację)

##### Backend

- Store to pamiec nieulotna i init (local storage or server side)
- validacja poprawności zapytań

- Team page
  https://localforage.github.io/localForage/
 