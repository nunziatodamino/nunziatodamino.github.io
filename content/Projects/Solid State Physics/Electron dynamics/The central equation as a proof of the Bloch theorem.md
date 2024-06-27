We want to prove [[Projects/Solid State Physics/Electron dynamics/Bloch Theorem|Bloch Theorem]].
We begin by expanding the eigenstate of the Hamiltonian in Fourier series.
Despite the eigenstate not being periodic, we can use the following fact: any function that satisfies the Born-von Karman conditions can be expanded in a basis of plane waves subject to the same periodic condition. (This in fact makes the functions artificially periodic)
These plane waves are of the form $\varphi(\bar{r}) = e^{i\bar{q}\cdot\bar{r}}$, where $\bar{q}$ is a wavevector that satisfies the conditions described in [[Projects/Solid State Physics/Electron dynamics/Wavevectors discretisation in the band model]].

We then obtain from the expansion:

$$ \Psi_{\bar{k}}(\bar{r}) = \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} $$

We also expand in Fourier series the potential. This is easier, due to the fact that is a periodic function over a Bravais lattice, so:

$$V(\bar{r}) = \sum_{\bar{G}}V_{\bar{G}} e^{i\bar{G}\cdot\bar{r}} $$

Where $\bar{G}$ are vectors in the reciprocal space.
We now use these expansions in the Hamiltonian:

$$\begin{aligned} \frac{-\hbar^2}{2m}\nabla^2\Psi_{\bar{k}}(\bar{r}) + V(\bar{r})\Psi_{\bar{k}}(\bar{r})  &= E_{\bar{k}} \Psi_{\bar{k}}(\bar{r})
\\ \frac{-\hbar^2}{2m}\nabla^2 \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} + \sum_{\bar{G}}V_{\bar{G}} e^{i\bar{G}\cdot\bar{r}} \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}}  &= E_{\bar{k}}  \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} 
\\ \frac{-\hbar^2}{2m}\sum_{\bar{q}}C_{\bar{q}} (-q^2) e^{i\bar{q}\cdot\bar{r}} +\sum_{\bar{q}} \sum_{\bar{G}}C_{\bar{q}}V_{\bar{G}} e^{i(\bar{G}+\bar{q})\cdot\bar{r}}    - E_{\bar{k}}  \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} &=0 \end{aligned}$$

Now we recast $\bar{q}' = \bar{q} + \bar{G}$, in order simplify the second sum. Note that the summation over $q$ becomes over $q'$ and not over $q'-G$ because they are equivalent: we are summing all over the reciprocal lattice and the summation vector is simply translating. Given that the reciprocal space is invariant under translation this changes nothing (if one wants an intuitive explanation on why that is, check this ==inserire calcolo somma bilatera con traslazione== ). 
Continuing one has:

$$ \frac{-\hbar^2}{2m}\sum_{\bar{q}}C_{\bar{q}} (-q^2) e^{i\bar{q}\cdot\bar{r}} +\sum_{\bar{q}'} \sum_{\bar{G}}C_{\bar{q}'-\bar{G}}V_{\bar{G}} e^{i\bar{q}'\cdot\bar{r}}    - E_{\bar{k}}  \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} =0 $$

I can then relabel $q' \to q$ and put all under one summation

$$\sum_{\bar{q}} e^{i\bar{q}\cdot\bar{r}}\left( \frac{-\hbar^2}{2m}C_{\bar{q}} (-q^2) + \sum_{\bar{G}}C_{\bar{q}-\bar{G}}V_{\bar{G}}- E_{\bar{k}} C_{\bar{q}} \right) =0 $$

Which is true only if:

$$\begin{aligned} \frac{q^2\hbar^2}{2m}C_{\bar{q}}  + \sum_{\bar{G}}C_{\bar{q}-\bar{G}}V_{\bar{G}}- E_{\bar{k}} C_{\bar{q}}&=0
\\\left(\frac{q^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{\bar{q}} + \sum_{\bar{G}'}C_{\bar{q}-\bar{G}'}V_{\bar{G}'}&=0 \end{aligned}$$

We also relabeled $\bar{G} \to \bar{G}'$ for future easiness.
This is called **central equation in most books**.

One can continue and write :

$$\bar{q} = \bar{k} - \bar{G}$$

Where $\bar{k}$ lies in the first Brillouin zone, and $\bar{G}$ lies in the reciprocal space. This decomposition can always be found (or also the equivalent $\bar{q} = \bar{k}' + \bar{G}$, where respect to the precedent decomposition $\bar{k}' = \bar{k}$ ) as seen in the particular example shown in the picture for the reciprocal space of a square lattice:

![[Immagini/The central equation as a proof of the Bloch theorem.png|300]]

We hence find:

$$\left(\frac{( \bar{k} - \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} - \bar{G}} + \sum_{\bar{G}'}C_{ \bar{k} - \bar{G}-\bar{G}'}V_{\bar{G}'}=0$$

We propose in the summation the following variable change : $\bar{G}'' = \bar{G}'+\bar{G}$ so that one can write:

$$\left(\frac{( \bar{k} - \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} - \bar{G}} + \sum_{\bar{G}''}C_{ \bar{k} -\bar{G}''}V_{\bar{G}''-\bar{G}}=0$$

Finally, by relabeling $\bar{G}'' \to  \bar{G}'$ we obtain the final expression:

$$\left(\frac{( \bar{k} - \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} - \bar{G}} + \sum_{\bar{G}'}C_{ \bar{k} -\bar{G}'}V_{\bar{G}'-\bar{G}}=0$$

That is called central equation in our course.

>[!info] Conventions
>One can find the 3 equivalent form in literature for the central equation:
>
>$$ \left(\frac{k^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{\bar{k}} + \sum_{\bar{G}'}C_{\bar{k}-\bar{G}'}V_{\bar{G}'}=0 $$
>$$\left(\frac{( \bar{k} - \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} - \bar{G}} + \sum_{\bar{G}'}C_{ \bar{k} -\bar{G}'}V_{\bar{G}'-\bar{G}}=0$$
>$$\left(\frac{( \bar{k} + \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} + \bar{G}} + \sum_{\bar{G}'}C_{ \bar{k} +\bar{G}'}V_{\bar{G}'-\bar{G}}=0$$
>
>These of course is crazy, because in each of the 3 $k$ means a different thing.
 > Convention 1 ) $\bar{k}$ is a generic reciprocal lattice vector
> Convention 2,3) $\bar{k}$ is a generic $1^{st}$ Brillouin zone vector. Moreover they are different vector in each of the conventions, specifically they are opposite one another.
>**We will take the middle one as the principal one.**


Given that $\bar{k}$  is a value belonging to the first Brillouin zone then I have $N$ possible value for it, while $\bar{G}$ spans all over the reciprocal lattice.
So I have $N$ systems of linear equation, one for each value of $\bar{k}$ and each system contains infinite equations.

We can write this equation also in [[Projects/Solid State Physics/Electron dynamics/Matricial form of the central equation|matricial form]]:

$$A(\bar{k})\bar{C}_{\bar{G}}(\bar{k})=E_{\bar{k}}\bar{C}_{\bar{G}}(\bar{k})$$

and from this description is easier to see that is an eigenvalue equation, for which we have discrete eigenvalues. If we label these eigenvalues with an index $n$, the set of continuous functions $\{E_n(\bar{k})\}$ is called **band structure**. (Note that we do not use $\bar{G}$ as a variable for the band structure because the functions are periodic respect to the periodic lattice.)

In this description an electron state is described by the couple $\{n, k\}$, i.e. by a band index and the wavenumber respectively. 

Now we are all set to conclude the proof of the Bloch Theorem.
Given an electron state $\{n, k\}$ , i.e. we are considering $\bar{k}$ fixed,  there exist coefficients infinite $C_{k-G}$ that satisfy the central equation, and these coefficients are necessarily the Fourier coefficients of the wave function that so:

$$ \Psi_{\bar{k}}(\bar{r}) = \sum_{\bar{G}}C_{\bar{k}-\bar{G}} e^{i(\bar{k}-\bar{G})\cdot\bar{r}}  = e^{i\bar{k}\cdot\bar{r}} \sum_{\bar{G}}C_{\bar{k}-\bar{G}} e^{-i\bar{G}\cdot\bar{r}}  $$

But if I consider:

$$ \sum_{\bar{G}}C_{\bar{k}-\bar{G}} e^{-i\bar{G}\cdot\bar{r}} \equiv u_{n\bar{k}}(\bar{r}) $$

Then is easy to see that $u_{n\bar{k}}(\bar{r})=u_{n\bar{k}}(\bar{r}+\bar{R})$, where is a generic Bravais lattice vector:

$$u_{n\bar{k}}(\bar{r}+\bar{R}) =  \sum_{\bar{G}}C_{\bar{k}-\bar{G}} e^{-i\bar{G}\cdot(\bar{r}+\bar{R})}=  \sum_{\bar{G}}C_{\bar{k}-\bar{G}} e^{-i\bar{G}\cdot\bar{r}} e^{-i\bar{G}\cdot \bar{R}} =  \sum_{\bar{G}}C_{\bar{k}-\bar{G}} e^{-i\bar{G}\cdot\bar{r}} = u_{n\bar{k}}(\bar{r}) $$

This means that:

$$ \Psi_{\bar{k}}(\bar{r}) =  u_{n\bar{k}}(\bar{r})  e^{i\bar{k}\cdot\bar{r}}  $$

Concluding the proof of the Bloch theorem.