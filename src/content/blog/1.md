---
title: 'JSON.stringify()'
description: 'This is my first blog post'
date: 2025-09-28
categories: ['javascript', 'html']
author: Edoardo-Ferrini
tags: ['javascript', 'html']
hideToc: true
---
Oggi stavo vedendo un video su internet su come realizzare un semplicissimo software gestionale di oggetti

Fare questo é ovviamente possibile attraverso la compilazione di una form che al submit raccoglierá i dati e memorizzerá le coppie chiave - valore all'interno del <a href="https://it.javascript.info/localstorage">localStorage</a> di Google Chrome.

Ho iniziato a programmare con Javascript, e all'inizio mi illudevo che fosse un linguaggio “facile per cominciare”, ma col tempo mi sono reso conto che non è affatto un buon primo linguaggio — almeno non se il tuo obiettivo è capire davvero come funziona il “dietro le quinte”.

Per quale motivo? Perché ti permette di fare cose complesse senza che tu capisca cosa stá succedendo sotto il cofano.

Usi fetch, localStorage, JSON.stringify()… e tutto “funziona”. Ma capisci davvero cosa stai facendo?

Io no. E questo mi dava fastidio.

Così ho adottato una regola personale, che ora condivido con te:

“Se non sai ricreare una cosa, non l’hai capita.” 

E allora ho deciso di mettermi alla prova: proviamo a scrivere da zero una versione semplificata di JSON.stringify().


---

## CodePen Interactive Demo

<iframe height="400" style="width: 100%;" scrolling="no" title="Retro Terminal" src="https://codepen.io/EdoardoFerrini/embed/emJJqaK?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/EdoardoFerrini/pen/emJJqaK">Retro Terminal</a> by MillerTime (<a href="https://codepen.io/EdoardoFerrini">@MillerTime</a>) on <a href="https://codepen.io">CodePen</a>.
</iframe>

<br>