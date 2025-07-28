Imagine you do the same procedure in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Critical exponents in the context of Widom's scaling hypothesis|Critical exponents in the context of Widom's scaling hypothesis]] but this time on 

$$f^{\text{micro}}_{\text{sing}}(t,h) = l^{-d}f^{\text{coarse}}_{\text{sing}}(tl^{y_t},hl^{y_h})$$

In this way one similar relation but this time respect the critical scaling exponents $y_t$, $y_h$.
What is interesting respect to the Widom's one is that most of the contain the critical exponent of the correlation length.
This because, as we saw in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Kadanoff argument applied to the 2 point connected correlation function|Kadanoff argument applied to the 2 point connected correlation function]], we as a result that $\nu = 1/y_t$.

We list them without proof, as the ansatz is the same:

- Correlation length exponent:        $\nu = \dfrac{1}{y_t}$
- Specific heat exponent:            $\alpha = 2 - \dfrac{d}{y_t} = 2-d\nu$
- Order parameter exponent:          $\beta = \dfrac{d - y_h}{y_t} = \nu (d-y_h)$
- Susceptibility exponent:           $\gamma = \dfrac{2 y_h - d}{y_t} = \nu (2 y_h-d)$
- Critical isotherm exponent:        $\delta = \dfrac{y_h}{d - y_h}$
- Anomalous dimension exponent:      $\eta= 2+d - 2y_h$

There is also an additional relational that is fundamental to derive the hyperscaling relation, that is :

$$ \gamma = \nu(2-\eta) $$

This is called **Fischer's relation**.