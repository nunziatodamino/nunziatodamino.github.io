Suppose to have a finite system confined in a volume $\Omega$ and with boundary $\partial \Omega$.
To fix the idea, if we call $L$ the typical length scale of the system (i.e. suppose to encapsulate the system in a cubic box of side $L$), then, clearly, for a given dimensionality $d$:

$$ m(\Omega) = V(\Omega) \propto L^d \qquad m(\partial\Omega) = S(\Omega) \propto L^{d-1}$$

Where $m(\cdot)$ is the measure.
Of course we can descend in the dimensionality abyss as we wish, but generally the bulk term (volume) and the surface term (surface) are the most meaningful term in any type of application (considering also that even if the topic can be treated for a generic dimensionality $d$, generally we care only about $d = 3$)

Given these considerations, when we write the free energy of a system (either the Gibbs or the Helmoltz one), we can write:

$$ F_{\Omega}(T, \{K_n\}) = V(\Omega)f_b(T, \{K_n\}) + S(\Omega)f_S(T, \{K_n\}) + \mathcal{O}(L^{d-2}) $$

So that we are simply writing the free energy as a bulk (volume) term $f_b$ , a surface term $f_S$, and other higher order terms which can be omitted in a first analysis of the system (and also in most of the practical situations).
One can more rigorously define these terms in this way:

$$f_b(T, \{K_n\}) = \lim_{V(\Omega)\to +\infty} \frac{F_{\Omega}(T, \{K_n\})}{V(\Omega)} \qquad f_S(T, \{K_n\}) = \lim_{S(\Omega)\to +\infty} \frac{F_{\Omega}(T, \{K_n\})-V(\Omega)f_{b}(T, \{K_n\})}{S(\Omega)}$$

Given that they exists both finite.
Note of course that of course both of these limits must be performed as a [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Thermodynamics/Thermodynamic limit (Van Hove limit)|Thermodynamic limit (Van Hove limit)]]
