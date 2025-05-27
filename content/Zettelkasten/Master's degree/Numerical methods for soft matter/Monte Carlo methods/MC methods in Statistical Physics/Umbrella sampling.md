In situations in which we are in presence of meta-stable state, i.e. pronounced local minima of the energy landscape, can be useful a reweighting technique known as umbrella sampling.
**This method falls under the category of the static methods.**
The idea is quite simple: we use the [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Importance sampling method|importance sampling method]]

$$\braket{O}_{\pi} = \sum_C O(C)\pi(C) = \sum_C O(C)\frac{\pi(C)}{g(C)}g(C) = \braket{O \frac{\pi}{g}}_{g} $$

Where we choose as $g(C)$ a modified version of the Boltzmann weight, specifically one where we modify just the energy:

$$ g(C) = \frac{1}{\mathcal{\tilde{Z}}}e^{-\beta E_g(C)} = \frac{e^{-\beta E_g(C)}}{\sum_C e^{-\beta E_g(C)}} $$

with $E_g(C) = E(C) + U(C)$, where $E(C)$ is the energy of the non-modified Boltzmann weight $\pi$ and $U(C)$ is a function 
that the user chooses.
This leads to the final expression:

$$\braket{O}_{\pi} = \left\langle O  \frac{\frac{e^{-\beta E(C)}}{\sum_C e^{-\beta E(C)}}}{\frac{e^{-\beta (E(C) + U(C))}}{\sum_C e^{-\beta (E(C) + U(C))}}} \right\rangle_g = \left\langle \frac{O  e^{\beta U(C)}}{\sum_C e^{-\beta U(C)}} \right\rangle_g$$
