# Oiva-sovellus

- FrontEnd: [readme](oiva-app/blob/master/frontend.md)
- BackEnd: [readme](oiva-app/blob/master/backend.md)

:::info
**`25.11.2019`** Tietokantarakenne on _**lähes**_ ajan tasalla.

Graafinen tietokantarakenne: [Dbdiagram.io:arrow_upper_right:](https://dbdiagram.io/d/5d9b3c7eff5115114db4fbff) (**_päivitetty_**).
:::

1. Lähtötasotesti (vastataan kaikkiin kysymyksiin)
2. Toisen kirjautuminen: Osa-alueet eriteltynä 1-6, joihin voi vastata erikseen eri osa-alueisiin
3. Vertaisarviointi: skannaa toisen käyttäjän, vertaisarvioinnin voi tehdä niistä osa-alueista, joihin vertaisarvioitava on vastannut
4. Nice to have: 
5. Login: sähköposti + salasana
# 

 
## Tietokanta

SQL-tietokanta on suunniteltu PostgreSQL:lle.

### Selityset



|  |  | Selite |
| -------- | -------- | -------- |
| :key: | `PRIMARY KEY (PK)` | Primääriavain (uniikki muuttumaton arvo) |
| 🗂️ |`INDEX (SINGLE/CONCATENATED)` | Text     |
| :link: | `REFERENCE` | VIITTAUS: taulu.kolumni |
| **INT** | `INTEGER` | KOKONAISLUKU |
| **DATETIME** |  | PÄIVÄMÄÄRÄ (muotoa: YYYY-MM-DD HH:MM:SS |
| **TINYTEXT** | | Tekstimutoinen data (maksimipituus: 255 merkkiä) |


---

### Tietokantarakenne + bulkkidata

> Suunniteltu tietokannan rakenne + testidataa tietokannan suunnittelua varten. 

#### taulu: **assessments**

> ***assessments** sisältää käyttäjien tekemät arvioinnit, yksi rivi käsittää aina yhden kysymyksen vastauksen=arviointi*

| id | question | answer | answered_by | asked_by | evaluated_at |
| -------- | -------- | -------- | -------- | -------- | -------- |
| `int A_I` :key: | `int` :link:[questions.id](#taulu-questions) | `int` ~~:link:[answer_options.id](#taulu-answer_options)~~**^1)^** | `int` :link:[users.id](#taulu-users) | `int` :link:[users.id](#taulu-users) | `timestamp` |
| 37 | 30 | 12 | 42 | 42 | 2019-08-23 23:59:59 |
| .. | .. | .. | .. | .. | .. |

`1) Taulu` [answer_options](#taulu-answer_options) `ei ole tällä hetkellä käytössä`


---


#### taulu: **question_sets**

> ***question_sets** sisältää kysymyssetit (A-E(F **^2)^**))*

| id | content | letter |
| -------- | -------- | -------- |
| `int A_I` :key: | `VARCHAR(150)` | `VARCHAR(1)` |
| 8 | Tiedonhallinta | A|
| .. | .. | .. |

`2) F-kysymyssetti mahdollisesti tulossa`



---


#### taulu: **question_subsets**

> ***question_subsets** sisältää kysymyssettien (A-E) osa-alueet (ESIM. 1-2...4)*

| id | content | number | question_set
| -------- | -------- | -------- | -------- |
| `int A_I` :key: | `VARCHAR(150)` | `int` | `int` :link:[question_sets.id](#taulu-question_sets) |
| 37 | Tietotekniikka, osaan käyttää | 1 | 8 ||
| .. | .. | .. | .. |



---


#### taulu: **questions**

> ***questions** sisältää itse kysymykset (ESIM. a-d...f)*

| id | content | letter | question_subset |
| -------- | -------- | -------- | -------- |
| `int A_I` :key: | `VARCHAR(150)` | `VARCHAR(1)` | `int` :link:[question_subsets.id](#taulu-question_subsets) |
| 50 | Vuorovaikutuksellisia verkkoalustoja esim... | 4 | 37 |
| .. | .. | .. | .. |



---


#### taulu: **answer_options**

> ***answer_options** sisältää [kysymyksien](#taulu-questions) vastausvaihtoehdot (ESIM. 1-3..5)*

:::warning
HUOM! Vastausvaihtoehdot ovat tällä hetkellä ainoastaan numeroitu 1-5.

**Allaoleva taulu ei (toistaiseksi) ole käytössä, vaan vaihtoehdot (1-5) generoidaan ohjelmallisesti.**
:::

| id | content | value | question |
| -------- | -------- | -------- | -------- |
| `int A_I` :key: | `VARCHAR(150)` | `int` | `int` :link:[questions.id](#taulu-questions) |
| 12 | En osaa käyttää vuorovaikutteisia... | 3 | 50 |
| .. | .. | .. | .. |



---


#### taulu: **users**

> ***users** sisältää käyttäjät*

:::info
Taulun suunnittelu on kesken
:::

| id | username | null |
| -------- | -------- | -------- |
| `int A_I` :key: | `VARCHAR(18)` | `timestamp` |
| 12 | foobar | null |
| .. | .. | .. |
