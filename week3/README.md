# CSS

* CSS je markup jezik (jezik za označavanje) koj koristimo za stilizovanje HTML dokumenta
* CSS-om opisujemo kako želimo da se HTML element prikazuje (gde da bude pozicioniran, koje boje, veličine itd)

## CSS Selektori

CSS selektori nam pružaju različite mogućnost da stilizujemo HTML elemete. 

## Osnovni selektori 

### 1. CSS element selector

Omogućava da selektujemo HTML element na osnovu njegovog imena.


Primer: 

```css
p {
  color: red;
}

```

```html
<p>Text crvene boje</p>
 ```


### 2. ID selector

Id je HTML atribut koji jedinstveno identifikuje HTML element.
Nije dozvoljeno da na stranici imamo više id atributa sa istom vrednošću!

> 📖 [(https://www.w3schools.com/html/html_id.asp](https://www.w3schools.com/html/html_id.asp)

id selektor omogućava da selektujemo HTML element na osnovu vrednosti id atributa.

Primer: 

```css
#naslov {
  color: blue;
}

```

```html
<h1 id="naslov">Naslov plave sam boje</h1>
 ```

Napomena: 
* Naziv id je case-sensitive (razlikuje mala i velika slova)
* Naziv ne sme sadžati razmake, tabove itd.
* Naziv mora imati barem jedan karakter.
* Naziv ne sme početi brojem.


### 3. CLASS selector

Slektor klase omogućava da selektujemo HTML element sa određenim atributom klase.

Da bismo selektovali odredjeni element koji sadrži određenu vrednost atributa klase navodimo tacku (.) zatim sledi naziv klase.


```css
.text-green {
  color: green;
}
```

```html
<p class="text-green">Ja sam text zelene boje</p>
<h2 class="text-green">I ja sam text zelene boje</h2>
```

Napomena: 
* Naziv klase ne sme početi brojem.

> 📖 https://www.w3schools.com/html/html_classes.asp


### 4. Univerzalni selektor 

Univerzalni selektor omogućava da selektujemo sve elemente na stranici.

```css
* {
  text-align: center;
}
```

Svi elementi na stranici ce biti centrirani.

## Grupisanje selektora


Kada više elemenata na stranci imaju istu css definiciju možemo da ih grupisemo.

Ovaj kod:
```css
h1 {
  margin: 0;
  padding: 0;
}

h2 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}
```

možemo zameniti ovim:

```css
h1, h2, p {
  margin: 0;
  padding: 0;
}

```

Dakle, kada css selektori imaju isto pravilo možemo ih grupisati tako što ćemo ih razdvojiti zarezom.

Na ovaj način imamo manje linija kod i kod je čitljiviji.



**CSS** - Cassading Style Sheet

### Tri načina kako uključiti css u HTML dokument

1.  Inline style
2.  Unutar style taga
3.  External fajl

#### Inline style

Inline stilizacija direktno utiču na tag, bez korišćenja selektora.

```html
<p style="color:red;">This is a paragraph.</p>
```

#### Style tag

```html
<!-- Used for adding in-document CSS -->
<style>
  /* ... */
</style>
```

#### External fajl

```html

<!-- Link to an external CSS file -->
<link rel="stylesheet" href="styles.css">
```

#### [**⬆ back to top**](#)

#### **Komentari u CSS**

---

Komentari nemaju uticaja na layout HTML dokumenta. Služe da bliže objasne kod ili da spreče pretraživač da interpretira određena pravila koja su deo css-a.

```css
/* Jednolinijski komentar */

/*
Komentar može da
se piše i u
više linija
*/

/* Komentar ispod služi da onemogući definisanu stilizaciju */

/*
.card {
    padding: 1rem; 
}
*/
```
