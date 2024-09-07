In the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Drude Theory|Drude Theory]] we supposed for simplicity that our electrons travel in a perfect Bravais lattice.
Of course there is no such thing in nature as a perfect Bravais lattice, and oftentimes there presents in the lattice structures impurities or vacancies, that we call defects (we report an example for the square lattice):

![[Mathiessen rule.png|400]]

This has the effect to change the relaxation time (the mean time between collisions), and due to the considerations made in [[Projects/Solid State Physics/Electron dynamics/Electrical conductivity in metals|Electrical conductivity in metals]], also the resistivity, because $\rho = \frac{1}{\sigma} \propto \frac{1}{\tau}$.
We want then to quantify how much the defects impacts on the resistivity.
From experiments we observe curves like these:

![[Mathiessen rule_potassa.png|400]]

The curve above represent relative resistivity for a sample with more impurities than the one below. The 2 curves are almost shifted, so that we can write:

$$ \rho_+(T)=\rho_-(T)+\rho_{\text{def}}(T) $$

Note that the shift also changes slightly with the temperature.
This suggests the following empirical law: supposing possibile to produce a sample with no defects, this should satisfy the same equation. So that, one can write in general

$$ \rho=\rho_{\text{lattice}}+\rho_{\text{defects}} \qquad \iff \qquad \frac{1}{\tau}=\frac{1}{\tau_{\text{lattice}}}+\frac{1}{\tau_{\text{defects}}}$$

This is called Matthiessen's rule.
