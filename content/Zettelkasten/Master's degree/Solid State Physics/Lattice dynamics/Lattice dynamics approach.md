We start from the fact that I have already made the [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/The Born-Oppenheimer approximation|The Born-Oppenheimer approximation]] and I want to use this approximation together with the fact that my N nuclei are in a [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Crystalline solid (or crystal)|Crystalline solid (or crystal)]].

One can simplify further the study of the motion if it follows the approach based mainly on these facts:

- **Pair-wise interaction**
Instead of solving the electronic motion equation found with the Born-Oppenheimer approximation to find the function $\mathcal{E}({\bar{R}})$ to be then put into the nuclear motion equation, a convenient hypothesis is made on its form, generally based on experimental assumptions. $\mathcal{E}({\bar{R}})$ is chosen as a sum of potentials that depend only on the reciprocal distances (thus a 2-body interaction): 

$$\mathcal{E}({\bar{R}_{I}}) =\frac{1}{2} \sum_{\bar{R}_{I},\bar{R}_{i} '} \phi(|\bar{R}_{I}-\bar{R}_{I}'|)$$

Note that ${\bar{R}_{I}} = (\bar{R}_1,\bar{R}_2, \dots, \bar{R}_N)$ is a particular fixed nuclear configuration. 
See also [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Note on lattice pair sums|Note on lattice pair sums]] for the sum meaning.

Note that this approximation is good only for crystals made of rare-gas elements. In the case of a metal, 3-body interactions are important, and a function of the form $\Phi(\bar{R}_{I},\bar{R}_{I}',\bar{R}_{I}'')$ should be used.

- **Small displacement**
Instead of study the general motion, we study only the motion of the ions within a small displacement within the Bravais lattice position. This hypothesis is realistic if the crystal is well below its melting point.
So we substitute the atomic positions with:

$$(\bar{R}_1,\bar{R}_2, \dots, \bar{R}_N) \to \bar{r} = \bar{R} + \bar{u}(\bar{R}, t)$$

With the important constraint $|\bar{u}(\bar{R},t)|<<a$ with $a$ lattice constant.
Note that we are denoting with $\bar{R}$ the Bravais lattice, and not the collection of nuclear positions. 
Also the displacement vector $\bar{u}$ is time dependent, and also site dependent, stating that each atom can do what it likes.
We propose an image to clarify:

![[Pasted image 20230906130543.png|400]]

We make also the observation that during lattice motion, the equilibrium mean positions coincide with those of the Bravais lattice. This allows us to associate a Bravais lattice structure to the moving crystal, even though its ions do not instantaneously occupy that position.
