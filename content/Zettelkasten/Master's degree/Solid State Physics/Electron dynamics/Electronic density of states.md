
Consider a crystal, where any restrictions on its dimensions, followed by the application of [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Born-Von Karman boundary conditions|Born-Von Karman boundary conditions]], result in a discretization of possible electronic wave vectors $\bar{k}$. These wave vectors are obtained by solving equations derived from the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Approach to the electron dynamics - the one electron approximation|Approach to the electron dynamics - the one electron approximation]].
In addition to the discretization, we have an energy structure divided into different $E_n(\bar{k})$ values, labeled according to the model used.
We have specific electronic density of states for the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Free electron model for metals (Sommerfeld model)|Free electron model for metals (Sommerfeld model)]] and specific electronic density of states for the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Band theory|Band theory]].

## Definitions

Regardless of the model used, we call the 4-tuple $(\bar{k}, E(\bar{k}))$ an electronic state, and we define the electronic density of states as:

$$D(E)dE = \text{number of states for which } E\in [E, E+dE] $$

This implies that:

$$\int_{E_0}^{E_1}D(E)dE = \text{number of states for which } E\in [E_0, E_1] $$

And moreover from this we can define formally the density of states as:

$$ D(E) = g \sum_{\bar {k}} \delta (E-E(\bar{k})) $$

Where $g$ is the electron degeneracy (in most cases $g=2$).
The function $E(\bar{k})$ depends on the model we are considering. If we are in the free electron case (Sommerfeld model) is simply $E(\bar{k}) = \frac{\hbar^2k^2}{2m}$, if we are in the context of the band theory is a particular band $E_{n}(\bar{k})$ (note that in that case one has to sum over $n$ in order to find the total density of state, or it will find the density of states of the band).

A more general definition can be achieved, labeling the possible eigenstates with an index $m$ and summing over them (cfr. Grosso-Parravicini pg. 29), but here we want to maintain the definition agile.

**An important note is that many authors, specially in the context of application, will define the density of states per unit volume. In this way is possible to show that the DOS (density of states acronym from now on) is independent from the sample size.**

## Closed forms for the DOS

In order to obtain for the DOS a closed form we have mainly 2 ways, both concerning states counting in the k-space.

1 - We count the number of states in a strip (shell in N dimension) in k-space that have energies $E\in [E, E+dE]$ and then adjust the differentials.
2 - We count the number of states in a volume in k-space that have energies $E'\in [E_0, E]$ and then differentiate.

We try to use both approaches for each dimension.

### 1 dimension
#### Approach 1
We consider:

$$ D(E)dE = dN \iff D(E) = \frac{dN}{dk}\frac{dk}{dE} = 2 \frac{L}{2 \pi}\frac{dk}{dE} = \frac{L}{ \pi}\frac{dk}{dE}  $$

Due to the fact that there are 2 electrons per state.
#### Approach 2

We consider:

$$\int_{0}^{E} D(E')dE' = N \iff \int_{0}^{E} D(E')dE' = 2 \int_0^k\frac{dN}{dk'}dk' = \frac{Lk(E)}{\pi}  $$

Due to symmetry. Then by differentiation: 

$$ D(E) =  \frac{L}{\pi}\frac{dk}{dE}  $$

### 2 dimension

#### Approach 1

In 2 dimensions the situation is different. We don't have a differential, but a line with a width $dE$ and in general this line does not have a symmetry. Only in the case of symmetry (e.g. the free electron case) we can find immediately a closed form, in the other cases we can aspire only to an integral form.

##### General form

$$ D(E)dE = dN \iff D(E) = \frac{S}{(2 \pi)^2} \int_A dk_xdk_y $$

##### Symmetric form (free electron case)





In order to evaluate its analytical form, we use, using the same ansatz saw in [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Examples in evaluating particular vibrational density of states]]:


$$D(E) = 2 \frac{V}{(2 \pi)^3} \int_{\text{shell}} dS_{E} \frac{1}{|\nabla_{\bar{k}}(E(\bar{k}))|} $$

This is the same expression as for the phonon case, with the caution that it needs to be corrected for spin degeneracy, and there are no branches to consider.
Another equivalent ansatz is to integrate over all the reciprocal space and select the energy we want to count with a Dirac delta:

$$D(E) = 2 \frac{V}{(2 \pi)^3} \int d^3k\ \delta\left( E-E(\bar{k}) \right)$$
