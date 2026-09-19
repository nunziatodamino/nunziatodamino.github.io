# I notturni: source and web assets

Originals are preserved under `exhibitions/I notturni/`; Quartz does not publish that directory. Web copies live under `content/painter/images/i-notturni/`.

All four paintings are dated **2018** and made using **Acrilico su tela**, as supplied by Nunziato Damino. Titles and sizes for three works were subsequently matched to the [Premio Combat 2019 catalogue](https://premiocombat.it/2019/nunziato-damino-79302), supplied by the artist. The catalogue year is the submission year, not the painting date.

- **Addio**: 120 × 100 cm (height × width), catalogued as 100x120.
- **2 modi di soffrire**: 100 × 80 cm (height × width), catalogued as 80x100.
- **Senza titolo** (blue figure in a white jacket): 150 × 100 cm (height × width), confirmed by the artist; not listed in that catalogue.
- **Il Re**: 150 × 100 cm (height × width), catalogued as 100x150 and consistent with the artist's supplied dimensions.

The catalogue image filenames match the first two source photos, and its image of Il Re was visually verified against the fourth. The catalogue dimensions are interpreted as width × height based on the portrait images and the known size of Il Re. The original numeric image filenames remain stable; they are not part of the artwork titles.

| Work                  | Original filename                                    | Web image                      | Processing                                                                       |
| --------------------- | ---------------------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| 1: Addio              | `37380819_340180609854195_3684682258901368832_n.jpg` | `senza-titolo-01.webp`         | Rectangular crop `1020x1205+46+29`; no enlargement                               |
| 2: 2 modi di soffrire | `photo6003514697078386120.jpg`                       | `senza-titolo-02.webp`         | Full image; no enlargement                                                       |
| 3: Senza titolo       | `DSC_0952.jpeg`                                      | `senza-titolo-03.webp`         | Rectangular crop `2955x4348+600+895`; maximum 1800px long edge                   |
| 4: Il Re              | `DSC_0960.JPG`                                       | `senza-titolo-04.webp`         | Full image; maximum 1800px long edge                                             |
| Poster                | `Locandina.pdf`                                      | `poster.webp`, `locandina.pdf` | Full page rendered at 1200px long edge; original PDF copied without modification |

Photos were processed locally with ImageMagick and encoded as WebP at quality 88. The poster was rendered with `pdftoppm` and encoded at quality 90. No AI reconstruction, perspective correction, recolouring, sharpening, or retouching was applied. The rectangular crops retain the complete painted edges and signatures; slight slivers of wall remain where a canvas is tilted. Both the source photographs and aspect ratios remain available for future reprocessing.

To reproduce a photo copy, use the corresponding crop from the table (omit cropping for works 2 and 4):

```sh
magick 'exhibitions/I notturni/DSC_0952.jpeg' \
  -crop 2955x4348+600+895 +repage -resize '1800x1800>' -quality 88 \
  content/painter/images/i-notturni/senza-titolo-03.webp
```

Dates and location are transcribed from the original poster: 9–16 August 2018, Palazzo Cagnone, Piazza San Francesco, Francavilla di Sicilia. The exhibition page links to the [Gazzettino Online article](https://www.gazzettinonline.it/2018/08/14/francavilla-di-sicilia-i-notturni-di-nunziato-damino-in-mostra-a-palazzo-cagnone_109062.html), credited to Rodolfo Amodeo, 14 August 2018. The article is linked rather than republished.
