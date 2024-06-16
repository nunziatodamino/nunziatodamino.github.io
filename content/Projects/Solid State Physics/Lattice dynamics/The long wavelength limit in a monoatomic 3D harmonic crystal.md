---
note_summary: In the long wavelength limit ($\lambda >> a$) we are vibrating the crystal in such a way that we are neglecting its periodic structure, i.e. we are considering the continuous limit. In this limit we will find only the acoustic modes, or simply how sound propagates in the solid according to the classic theory of elasticity
---

We are now interested in the so called long wavelength, that is when $\lambda >> a$, where $a$ is the reticular constant. 
This condition represent the continuous limit, where the crystalline structure is not resolvable.
This limit can also be rewritten, by appropriate manipulation, as $ka<<1$.
When information on $k$ or $a$ are missing, one can consider the equivalent formulation $k \to 0 \vee a\to 0$ .
In our case is good to consider as the long wavelength limit $k \to 0$.

So we can approximate:

$$D(\bar{k})=-2 \sum_{\bar{R}}D(\bar{R}) \sin^2 \left( \frac{\bar{k} \cdot \bar{R}}{2} \right) \simeq -2 \sum_{\bar{R}}D(\bar{R})  \left( \frac{\bar{k} \cdot \bar{R}}{2} \right)^2 = -\frac{k^2}{2}\sum_{\bar{R}}D(\bar{R})  \left( {\hat{k} \cdot \bar{R}} \right)^2 $$

This leads to a simpler secular equation:

$$ \det\left[M\omega^2\mathbb{1}+\frac{k^2}{2}\sum_{\bar{R}}D(\bar{R})  \left( {\hat{k} \cdot \bar{R}} \right)^2\right] =0 $$

$$ \det\left[\omega^2\mathbb{1}-\left(-\frac{1}{2M}\sum_{\bar{R}}D(\bar{R})  \left( {\hat{k} \cdot \bar{R}} \right)^2 \right) k^2\right] =0 $$

From this secular equation we can imply that:

$$ \omega_s = c_s(\bar{k})k_s $$

Where $c_s(\bar{k})$ are the square roots of the eigenvalues of the matrix in parentheses in the secular equation. In the case of the monoatomic case $s=1,2,3$.
So we can conclude that in the case of the monoatomic 3d harmonic crystal all modes are acoustic.
Moreover we observe that the sound velocity depends on the $\bar{k}$ direction and that from the theory of elasticity one mode is longitudinal in character ( $\bar{\varepsilon} \parallel \bar{k}$ ) while two are transverse ( $\bar{\varepsilon} \perp \bar{k}$ )


