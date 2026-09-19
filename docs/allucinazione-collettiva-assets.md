# Allucinazione collettiva: source and web assets

Originals are preserved under `exhibitions/Allucinazione collettiva/`. Only the prepared assets under `content/painter/images/allucinazione-collettiva/` are published.

The poster supplies the exhibition dates and venue: **19–25 August 2019**, Aula consiliare “Falcone-Borsellino”, Francavilla di Sicilia. Nunziato Damino confirmed that he organised the group exhibition as art director and exhibited just one painting.

The painting title, **Gli amanti di Aldebaran**, comes from its source filename. The artist supplied **2019**, **Tecnica mista**, **100 × 120 cm**. Dimensions are retained in the supplied order pending confirmation: the photograph is vertical, so these may be width × height. The support has not been supplied and is omitted.

| Original                      | Web copy                       | Processing                                                                  |
| ----------------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| `Gli amanti di Aldebaran.JPG` | `gli-amanti-di-aldebaran.webp` | Full image, resized from 3099 × 3841 to 1452 × 1800 pixels; WebP quality 88 |
| `locandina.jpg`               | `poster.webp`                  | Full poster, original 724 × 1022 resolution; WebP quality 90                |
| `locandina.jpg`               | `locandina.jpg`                | Unmodified original, linked from the poster                                 |

The painting photograph is already closely cropped. Its full edges, signature, texture and colour are preserved. No AI edits, perspective correction, recolouring, retouching or enlargement were applied.

```sh
magick 'exhibitions/Allucinazione collettiva/Gli amanti di Aldebaran.JPG' \
  -resize '1800x1800>' -quality 88 \
  content/painter/images/allucinazione-collettiva/gli-amanti-di-aldebaran.webp
magick 'exhibitions/Allucinazione collettiva/locandina.jpg' -quality 90 \
  content/painter/images/allucinazione-collettiva/poster.webp
cp 'exhibitions/Allucinazione collettiva/locandina.jpg' \
  content/painter/images/allucinazione-collettiva/locandina.jpg
```
