# Palazzo Cagnone, 2021: source and web assets

Nunziato Damino confirmed his participation in a group exhibition at Palazzo Cagnone, Francavilla di Sicilia, in 2021. The exhibition title, exact dates, organisers and other participants are unknown. “Group exhibition” is a descriptive label. No poster is available.

The artist identified the photograph in `exhibitions/mostra P.Cagnone 2021/` as a painting from this exhibition. Its original remains untouched; the web copy is `content/painter/images/palazzo-cagnone-2021/portrait.webp`.

The artist supplied the title **Senza titolo**, medium **Tecnica mista**, and dimensions **60 × 40 cm** (height × width). The painting year and support have not been supplied and are omitted. The exhibition year does not establish the painting year.

The source photograph is 720 × 960 pixels. A rectangular crop of `482x754+106+127` removes the wall margins and wall label while retaining the full painting. Small slivers of wall remain around its tilted edges. No enlargement, perspective correction, colour adjustment or AI editing is applied. The web copy is encoded as WebP at quality 88.

```sh
magick 'exhibitions/mostra P.Cagnone 2021/photo5994307592865822600.jpg' \
  -crop 482x754+106+127 +repage -quality 88 \
  content/painter/images/palazzo-cagnone-2021/portrait.webp
```
