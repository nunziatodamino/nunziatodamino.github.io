There is a technical definition of the residue of a function, which is the coefficient $a_{-1}$ of its Laurent series expansion when the expansion is possible, as seen [[On the building blocks of Complex analysis - holomorphy and analicity|here]]. Having a formula for the coefficients, we can say that:

>[!note] Residue definition 
>$$ Res(f(z); z_0) = \frac{1}{2 \pi i} \int_{+\gamma} f(z) dz$$

Where $\gamma$ is any circle that encloses the singularity $z_0$. It is simpler, however, in the context of practical applications, to use propositions for evaluating the residue without going through the definition.

>[!info] Residue of pole of order n
>If $z_0$ is a pole of order $n$, the formula holds:
>$$ Res(f(z); z_0)= \lim_{z \to z_0} \frac{1}{(n-1)!}D^{n-1}[f(z)(z-z_0)^n] $$

 >[!info] Special formula for pole of first order
 >Let $f$ and $g$ be holomorphic functions, and further, let $z_0$ be a first-order pole for the function $g$. Then the formula holds:
>$$ Res \left( \frac{f(z)}{g(z)} ; z_0 \right) = \frac{f(z_0)}{g'(z_0)} $$

>[!info] How to evaluate the residue in the point at infinity
>Given $z_1, z_2, \dots, z_n \in \mathbb{C}$ and $f(z)$ holomorphic in $\mathbb{C} / \{ z_1, z_2, \dots, z_n \}$, it holds that:
$$ \sum_j Res(f(z); z_j) + Res(f(z); \infty) = 0 $$
