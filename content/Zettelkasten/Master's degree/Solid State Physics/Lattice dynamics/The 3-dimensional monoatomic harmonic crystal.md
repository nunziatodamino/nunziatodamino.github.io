The following is the next to the most general approach to the description of a crystal according to the [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Lattice dynamics approach|Lattice dynamics approach]].
The only way to make it more general is to substitute the Bravais lattice vector $\bar{R}$ with $\tilde{\bar{R}}=\bar{R} + \bar{t}_{\nu}$,  i.e. to consider a crystal structure with a basis instead of a plain Bravais lattice. 

Consider a generic Bravais lattice (until it is specified, our calculations can only be of a general nature). 
Then we can build our potential energy as:

$$\mathcal{E}({\bar{r}_1,\bar{r}_2,\dots\bar{r}_N })  = \frac{1}{2} \sum_{{\bar{R}},{\bar{R}} '} \phi(|\bar{R} -\bar{R}' + \bar{u}(\bar{R}, t) - \bar{u}'(\bar{R}', t)|) $$

And then use [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/The harmonic approximation|The harmonic approximation]], i.e. expand this expression in Taylor's series and cut the expansion up to the second order.
We arrive at the expression:

$$ U_{tot} = U_0 + \frac{1}{4} \sum_{\bar{R},\bar{R}'}\sum_\alpha\sum_ {\beta}(u_{\alpha}-u_{\alpha}')\phi_{\alpha \beta}(\bar{R}-\bar{R}')(u_{\beta}-u_{\beta}') $$

Where, if I denote as $\bar{r}= \bar{R}-\bar{R}'$ we have $\phi_{\alpha\beta}(\bar{r}) = \frac{\partial^2 \phi(\bar{r})}{\partial r_\alpha\partial r_\beta}$.
Note that $\frac{\partial \phi}{\partial r_\alpha}=\frac{\partial \phi}{\partial u_\alpha}\frac{\partial u_{\alpha}}{\partial r_\alpha}=\frac{\partial \phi}{\partial u_\alpha}$, so that alternatively one can write: $\phi_{\alpha\beta}(\bar{r}) = \frac{\partial^2 \phi(\bar{r})}{\partial u_\alpha\partial u_\beta}$


Due to technicality of the subject two procedures will be given:  [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Taylor's series of the potential energy in a 3D monoatomic crystal - classic derivation|1]] and  . We will use only the classic derivation (1)

I want now to define a matrix $D$ such as

$$ U_{tot} = U_0 + \frac{1}{2} \sum_{\bar{R},\bar{R}'}\sum_\alpha\sum_ {\beta}u_{\alpha}D_{\alpha \beta}(\bar{R}-\bar{R}')u_{\beta}'  $$

If I use for expression of the matrix the following

$$D_{\alpha \beta}(\bar{R}-\bar{R}')  =\delta_{\bar{R}\bar{R}'} \sum_{\bar{R}''} \left( \phi_{\alpha \beta}(\bar{R}-\bar{R}'')\right) -\phi_{\alpha \beta}(\bar{R}-\bar{R}')$$

Then the 2 form of the potential energy are the same ( for a detailed derivation see [[D matrix calculations.pdf|here]])

For the matrix $D$ can be proved some [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Properties of the D matrix in the context of the harmonic 3d crystal|properties]], independently of the underlying Bravais lattice.

We are finally ready to solve the equation of motion of the system (for a detailed derivation see [[equation of motion 3d crystal.pdf|here]])

$$\begin{aligned}M \frac{d^2\bar{u}(\bar{R})}{dt^2} = & -\frac{\partial U_{tot}}{\partial \bar{u}(\bar{R})}\\ \\M \frac{d^2\bar{u}(\bar{R})}{dt^2} = & -\sum_{\bar{R}'}D(\bar{R}-\bar{R}') \bar{u}(\bar{R}')\end{aligned}$$

We can propose the solution of this equation:

$$\bar{u}(\bar{R},t) = \bar{\varepsilon}e^{i(\bar{k} \cdot \bar{R} - \omega t)}  \qquad\qquad  \text{where}\ \bar{\varepsilon}=(\varepsilon_x,\varepsilon_y,\varepsilon_z)^t $$

Where we will call $\bar{\varepsilon}$ polarization vector. 
Upon substitution one finds:

$$\begin{aligned}-M\omega^2\bar{\varepsilon}e^{i(\bar{k} \cdot \bar{R} - \omega t)} &= -\sum_{\bar{R}'}D(\bar{R}-\bar{R}') \bar{\varepsilon}e^{i(\bar{k} \cdot \bar{R}' - \omega t)} \\M\omega^2\bar{\varepsilon} & =\sum_{\bar{R}'}D(\bar{R}-\bar{R}') \bar{\varepsilon}e^{i(\bar{k} \cdot (\bar{R}'-\bar{R})) } \\ M\omega^2\bar{\varepsilon} & = \sum_{\bar{R}'}D(\bar{R}-\bar{R}') e^{-i(\bar{k} \cdot (\bar{R}-\bar{R}')) }\bar{\varepsilon} \end{aligned}$$

Now, by setting $\bar{R}-\bar{R}' = \bar{R}''$ we obtain:

$$M\omega^2\bar{\varepsilon} =\sum_{\bar{R}''}D(\bar{R}'') e^{-i(\bar{k} \cdot \bar{R}'') }\bar{\varepsilon} $$

Where we can now set, by index relabeling:

$$\sum_{\bar{R}}D(\bar{R}) e^{-i(\bar{k} \cdot \bar{R}) } = D(\bar{k})$$

The so called dynamical matrix.
We spend some lines in order to justify the the fact that the summation index changed, by taking as example the square lattice.

![[Pasted image 20230907124711.png|200]]

Considering that $\bar{R}$ is fixed. we see that summing over $\bar{R}'$ is the same as summing over $\bar{R}''$. The only thing that changes is the origin of the vector, but because a Bravais lattice is invariant under translation, i.e. because I have to sum over all the atoms, this is irrelevant, and we can change the summation.  

In order to find then the normal modes of oscillation, one must solve the secular equation:

$$\det\left[M\omega^2\mathbb{1}-D(\bar{k})\right] =0$$

Given the fact that the previous equation is just an eigenvalue equation:

$$D(\bar{k})\bar{\varepsilon} = \lambda\bar{\varepsilon}  $$

Setting $\lambda = M\omega^2$. Moreover we observe from this equation that $D(\bar{k})$ is a square matrix of order $n=3+\nu$, where $\nu$ are number of elements in the crystal basis. In our case, because we have no basis, the order is 3, so we expect 3 normal modes

Now, in order to have a more pleasant experience in the calculation, we try to simplify the dynamical matrix.
First we begin by making the following observation: $D(\bar{R}) = \frac{1}{2}(D(\bar{R})+D(\bar{R}))= \frac{1}{2}(D(\bar{R})+D(-\bar{R}))$ by symmetry property of the $D$ matrix.

So that we can write:

$$\begin{aligned} D(\bar{k})&=\sum_{\bar{R}}D(\bar{R}) e^{-i(\bar{k} \cdot \bar{R}) } = \sum_{\bar{R}}\frac{1}{2}(D(\bar{R})+D(-\bar{R})) e^{-i(\bar{k} \cdot \bar{R}) } = \frac{1}{2} \sum_{\bar{R}}D(\bar{R}) \left[e^{-i(\bar{k} \cdot \bar{R}) } + e^{i(\bar{k} \cdot \bar{R}) } \pm 2 \right] = \\ & =  \frac{1}{2} \sum_{\bar{R}}D(\bar{R}) \left[e^{-i(\bar{k} \cdot \bar{R}) } + e^{i(\bar{k} \cdot \bar{R}) } - 2 \right] + \sum_{\bar{R}}D(\bar{R}) \end{aligned}$$

Where the second summation is $0$ for the property on the $D$ matrix on the reticular sum.
Continuing we obtain:

$$\begin{aligned}  D(\bar{k})&= \frac{1}{2} \sum_{\bar{R}}D(\bar{R}) \left[e^{-i(\bar{k} \cdot \bar{R}) } + e^{i(\bar{k} \cdot \bar{R}) } - 2 \right] = \frac{1}{2} \sum_{\bar{R}}D(\bar{R}) \left[2 \cos (\bar{k} \cdot \bar{R}) - 2 \right] = \\& =  \sum_{\bar{R}}D(\bar{R}) \left[ \cos (\bar{k} \cdot \bar{R}) - 1 \right] =-2 \sum_{\bar{R}}D(\bar{R}) \sin^2 \left( \frac{\bar{k} \cdot \bar{R}}{2} \right) \end{aligned} $$

Where in the last line we used the identity $\sin \left( \frac{x}{2} \right) = \sqrt{\frac{1 -\cos(x)}{2}}$

This expression is particularly useful if we want to study [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/The long wavelength limit in a monoatomic 3D harmonic crystal|The long wavelength limit in a monoatomic 3D harmonic crystal]].

Useful references : https://physics.stackexchange.com/questions/665226/the-harmonic-approximation-for-lattice-vibrations-in-ashcroft-and-mermin
