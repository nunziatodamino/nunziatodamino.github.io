- [ ] inserite qui perchè non c'è tempo di inquadrarle nel sistema. Sarebbe bello poi sistemarle per bene quando si fa Statistical Mechanics.

####  Average quantities in a canonical ensemble at thermal equilibrium 
Suppose to be in a canonical ensemble. Then for systems at equilibrium, see [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Ensemble theory/FIX/Thermodynamic (or thermal) equilibrium]], an average quantity of the system $X$ can be evaluated as:

$$ \braket{X} = \frac{\sum_{S} X[S] e^{-\beta H[S]}}{\sum_{S} e^{-\beta H[S]}} = \frac{\sum_{S} X[S] e^{-\beta H[S]}}{\mathcal{Z}}  $$

I.e. a weighted sum with a Boltzmann factor over all the configurations $S$.

#### Role of free energy in a canonical ensemble at thermal equilibrium
We define free energy as:

$$ F=-\frac{1}{\beta} \ln Z $$

Suppose now we have in the Hamiltonian $H'[S]$ the average quantity $X$ coupled with a parameter $\alpha$, specifically: $H'[S]=H[S] + \alpha X$.
Then we notice, if we evaluate:

$$ \frac{\partial F}{\partial \alpha} = -\frac{1}{\beta} \frac{1}{Z}\frac{\partial Z}  {\partial \alpha} = -\frac{1}{\beta} \frac{1}{Z}\sum_{S}(-\beta X)e^{-\beta H'[S]} $$

Then one can notice that:

$$\frac{\partial F}{\partial \alpha}_{|\alpha=0} = \braket{X}$$

I.e. F acts as a [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Characteristic function]] for the random variable $X$ (==nelle dispense dice generatrice, ma penso sia un errore, viste le proprietà==).

This implies that the knowledge of the free energy implies the knowledge of the average quantities of a system.

#### Probability of a macrostate in a canonical ensemble at thermal equilibrium 

We discussed that to a single macrostate corresponds many microstates.
Let's now divide the configuration space in how many macrostates are realizable by the system.
Each region will contain the total microstates that realizes that particular macrostate

![[Images/macrostate_conf.png|500]]

In this picture is easy to understand that the probability to achieve a particular macrostate $m^*$ is given by :

$$ \mathbb{P}(m=m^*) = \frac{\text{Volume occupied by the microstates realizing}\ m^*}{\text{Total volume}} $$

Now we consider the thermodynamic limit $N \to +\infty$.
The 2 terms of the fraction will grow to infinity, but at the limit the fraction will remain finite.
One can show then that the numerator can be written in a canonical ensemble as:

$$ e^{-\beta N F(m^*)} $$

Where $F$ is the free energy. Then one can write:

$$\mathbb{P}(m=m^*) = \frac{e^{-\beta N F(m^*)}}{\sum_{m}e^{-\beta N F(m)}}  =\frac{e^{-\beta N F(m^*)}}{Z}   $$

Where the sum is performed on all possible macrostates.
Notice also that in the thermodynamic limit, due to the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/The Laplace method|The Laplace method]], only the minima contribution to the free energy are important, so that:

$$ \sum_{m \in \text{all macrostates}}e^{-\beta N F(m)} \qquad \Rightarrow \text{in the thermodynamic limit} \Rightarrow \qquad \sum_{m \in \text{minima for F(m)}}e^{-\beta N F(m)}$$
