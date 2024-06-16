We want to expand the function inside the summation

$$U_{tot} = \frac{1}{2} \sum_{{\bar{R}},{\bar{R}} '} \Phi(|\bar{R} -\bar{R}' + \bar{u}(\bar{R}, t) - \bar{u}'(\bar{R}', t)|) $$

While remembering that $|\bar{u}(\bar{R}, t) - \bar{u}'(\bar{R}', t)|<<0$.
We recall the Taylor's expansion usually reported in the Mathematical Analysis textbooks:

$$f(\bar{R}+\bar{u}) = f(\bar{R}) + \bar{u}^t\nabla f(\bar{R}) + \frac{1}{2!} \bar{u}^t \mathcal{H}[f(\bar{R})]\bar{u} +\dots$$

One obtains, applying the expansion to the function $\Phi$:

$$ \Phi(|\bar{R} -\bar{R}' + \bar{u}(\bar{R}, t) - \bar{u}'(\bar{R}', t)|) \simeq \Phi(|\bar{R}-\bar{R}'|) +(\bar{u}-\bar{u}')^t\nabla\Phi(|\bar{R}-\bar{R}'|)+ (\bar{u}-\bar{u}')^t\mathcal{H}[\Phi(|\bar{R}-\bar{R}'|)](\bar{u}-\bar{u}')  $$

If we sum all over the lattice, the second term in the RHS : $\frac{1}{2} \sum_{{\bar{R}},{\bar{R}} '}(\bar{u}-\bar{u}')^t\nabla\Phi(|\bar{R}-\bar{R}'|)$ is 0, because contains all the force acting on the atom in $\bar{R}$ due to all the other atom. Because $\bar{R}$ is an equilibrium position this term is 0.
Now, if we call the first term in the RHS cohesive energy $U_0$ , after have summed all over the lattice, we obtain the expression:

$$ U_{tot} = U_0 + \frac{1}{4} \sum_{\bar{R},\bar{R}'}(\bar{u}-\bar{u}')^t\mathcal{H}[\Phi(|\bar{R}-\bar{R}'|)](\bar{u}-\bar{u}')  $$

In order to have a more manageable expression, one can expand the dot product:

$$ U_{tot} = U_0 + \frac{1}{4} \sum_{\bar{R},\bar{R}'}\sum_\alpha\sum_ {\beta}(u_{\alpha}-u_{\alpha}')\mathcal{H}_{\alpha \beta}[\Phi(|\bar{R}-\bar{R}'|)](u_{\beta}-u_{\beta}')  $$

We can relabel the Hessian matrix $\mathcal{H}_{\alpha \beta}[\Phi(\bar{R}-\bar{R}')]\equiv\phi_{\alpha \beta}(\bar{R}-\bar{R}')$ :

$$ U_{tot} = U_0 + \frac{1}{4} \sum_{\bar{R},\bar{R}'}\sum_\alpha\sum_ {\beta}(u_{\alpha}-u_{\alpha}')\phi_{\alpha \beta}(\bar{R}-\bar{R}')(u_{\beta}-u_{\beta}') $$

To obtain the book's expression