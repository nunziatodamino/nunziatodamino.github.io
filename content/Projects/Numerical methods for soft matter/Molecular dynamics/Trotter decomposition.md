From [[Projects/Numerical methods for soft matter/Molecular dynamics/Hamilton equations via the Liouville operator|Hamilton equations via the Liouville operator]] we see that the solution of the Hamilton equation is :

$$ \Gamma(t) = e^{i\hat{L}t}\Gamma(0) $$

Now, given that, $i\hat{L} = i\hat{L}_1 + i\hat{L}_2$ but $[i\hat{L}_1, i\hat{L}_2] \neq 0$ as seen in [[Projects/Numerical methods for soft matter/Molecular dynamics/The Liouville operator|The Liouville operator]], the decomposition $e^{i\hat{L}t} \neq e^{i\hat{L}_1t}e^{i\hat{L}_2t}$ is not valid.
We now explore what errors we have in order to make it possible

#### Strang splitting

One first idea is to use the Baker-Campbell-Haussdorf formula:

$$ e^{i\hat{L}t} \simeq e^{i\hat{L}_1t}e^{i\hat{L}_2t}e^{\frac{i}{2}[\hat{L}_1,L_2]t^2} = e^{i\hat{L}_1t}e^{i\hat{L}_2t} $$

The error here is of the order $\frac{e^{i\hat{L}t}}{e^{i\hat{L}_1t}e^{i\hat{L}_2t}} = \mathcal{O}(t^2)$

#### Lie -Trotter product

We write :

$$ e^{i\hat{L}t} = \lim_{M \to +\infty} \left(e^{i\frac{\hat{L}_1}{M}t}e^{i\frac{\hat{L}_2}{M}t}\right)^M $$

The error here is again of the order $\mathcal{O}(t^2)$

#### Symmetric Trotter - Suzuki 

We write :

$$ e^{i\hat{L}t} = \lim_{M \to +\infty} \left(e^{i\frac{\hat{L}_2}{2M}t}e^{i\frac{\hat{L}_1}{M}t}e^{i\frac{\hat{L}_2}{2M}t}\right)^M $$

The error here is of the order $\mathcal{O}(t^3)$

