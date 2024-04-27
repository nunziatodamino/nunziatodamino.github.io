The **Kramers–Kronig relations** are bidirectional mathematical relations, connecting the real and imaginary parts of any complex function  that is analytic in the upper half-plane . The relations are often used to compute the real part from the imaginary part (or vice versa) of response functions in physical systems, i.e the refractive index, because for stable systems, causality implies the condition of analyticity, and conversely, analyticity implies causality of the corresponding stable physical system.

>[!note] **Kramers–Kronig relations**
>Let $\chi(\omega) = \chi_1(\omega) + i \chi_2(\omega)$ be a complex function of the complex variable $\omega$, where $\chi_1(\omega)$ and $\chi_2(\omega)$ are real. Suppose this function is analytic in the closed upper half-plane of $\omega$ and vanishes faster than $1/|\omega|$ as $\omega \to \infty$.
The Kramers–Kronig relations are given by
>
>
>$$\chi_1(\omega) =  \frac{1}{\pi}\  \mbox{P.V.}\!\!\int_{-\infty}^\infty \frac{\chi_2(\omega')}{\omega' - \omega}\,d\omega'\qquad \chi_2(\omega) = -\frac{1}{\pi} \mbox{P.V.}\!\!\int_{-\infty}^\infty \frac{\chi_1(\omega')}{\omega' - \omega}\,d\omega',$$
>

where $\omega$ is real and where P.V. denotes the Cauchy principal value. So the real and imaginary parts of such a function are not independent, and the full function can be reconstructed given just one of its parts.
The proof can be found [[Proof of the Kramers-Kronig relations_231104_095654.pdf|here]].

#### Physical applications

- [ ] Sistemare la nota su Kramers kronig e collegarla con EEls o con il complex refractive index

Are used to relate the relate the real and imaginary part of the complex refractive index

===Electron spectroscopy===
In electron energy loss spectroscopy, Kramers–Kronig analysis allows one to calculate the energy dependence of both real and imaginary parts of a specimen's light optical permittivity, together with other optical properties such as the absorption coefficient and reflectivity.<ref>{{cite book|author=R. F. Egerton|year=1996|title= Electron energy-loss spectroscopy in the electron microscope|edition = 2nd|publisher= Plenum Press| location=New York| isbn=0-306-45223-5}}</ref>

In short, by measuring the number of high energy (e.g. 200 keV) electrons which lose a given amount of energy in traversing a very thin specimen (single scattering approximation), one can calculate the imaginary part of permittivity at that energy. Using this data with Kramers–Kronig analysis, one can calculate the real part of permittivity (as a function of energy) as well.

This measurement is made with electrons, rather than with light, and can be done with very high spatial resolution. One might thereby, for example, look for ultraviolet (UV) absorption bands in a laboratory specimen of presolar grain|interstellar dust less than a 100&nbsp;nm across, i.e. too small for UV spectroscopy. Although electron spectroscopy has poorer energy resolution than light spectroscopy, data on properties in visible, ultraviolet and soft x-ray Electromagnetic spectrum|spectral ranges may be recorded in the same experiment.

In angle resolved photoemission spectroscopy the Kramers–Kronig relations can be used to link the real and imaginary parts of the electrons self-energy. This is characteristic of the many body interaction the electron experiences in the material. Notable examples are in the high temperature superconductors, where kinks corresponding to the real part of the self-energy are observed in the band dispersion and changes in the MDC width are also observed corresponding to the imaginary part of the self-energy.<ref>{{cite journal |journal= Rev. Mod. Phys. |year=2003 |volume=75 |issue=2 |pages=473–541 |title= Angle-resolved photoemission studies of the cuprate superconductors |author= Andrea Damascelli |doi=10.1103/RevModPhys.75.473 |bibcode=2003RvMP...75..473D|arxiv = cond-mat/0208504 |s2cid=118433150 }}</ref>